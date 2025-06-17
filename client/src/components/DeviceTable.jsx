import { useEffect, useState } from "react";
import { getDevices, triggerSync } from "../api/deviceService";
import formatDate from "../utils/formatDate";
import { useAuth } from "../context/AuthContext";
const ROWS_PER_PAGE = 8;

const DeviceTable = () => {
    const [devices, setDevices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const { isLoading, setIsLoading } = useAuth();
  const fetchDevices = async () => {
    try {
      setIsLoading(true);
      const data = await getDevices();

      await new Promise((resolve) => setTimeout(resolve, 500));

      setDevices(data);
    } catch (err) {
      console.error("Error fetching devices:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const totalPages = Math.ceil(devices.length / ROWS_PER_PAGE);

  const currentData = devices.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );
  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-4 py-2 rounded-md ${
            i === currentPage
              ? "bg-blue-600 text-white"
              : "bg-blue-100 hover:bg-blue-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handleSync = async (id) => {
    await triggerSync(id);
    const updated = await getDevices();
    setDevices(updated);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded p-4">
      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <span className="ml-4 text-gray-600 font-medium">
            Loading devices...
          </span>
        </div>
      ) : (
        <>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Device ID</th>
                <th className="px-4 py-2">Last Sync Time</th>
                <th className="px-4 py-2">Sync Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
           <tbody>
    {currentData && currentData.length > 0 ? (
      currentData.map((d) => (
        <tr key={d.id} className="text-center border-b">
          <td className="px-4 py-2">{d.id}</td>
          <td className="px-4 py-2">{formatDate(d.lastSync)}</td>
          <td className="px-4 py-2">
            {d.status === "Success" && "✅ Success"}
            {d.status === "Failed" && "❌ Failed"}
            {d.status === "Pending" && "⏳ Pending"}
          </td>
          <td className="px-4 py-2">
            <button
              onClick={() => handleSync(d.id)}
              className="text-blue-600 underline"
            >
              Sync Now
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="text-center py-4 text-gray-500">
          No data found
        </td>
      </tr>
    )}
  </tbody>
          </table>

          <div className="pagination flex flex-wrap justify-center items-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              Prev
            </button>
            {renderPageButtons()}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeviceTable;
