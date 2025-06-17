import { useEffect, useState } from "react";
import { getErrors } from "../api/deviceService";
import { useAuth } from "../context/AuthContext";
import formatDate from "../utils/formatDate";
const ROWS_PER_PAGE = 8;

const ErrorTable = () => {
  const [errors, setErrors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, setIsLoading } = useAuth();
  const fetchDevices = async () => {
    try {
      setIsLoading(true);
      const data = await getErrors();

      await new Promise((resolve) => setTimeout(resolve, 500));

      setErrors(data);
    } catch (err) {
      console.error("Error fetching devices:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const totalPages = Math.ceil(errors.length / ROWS_PER_PAGE);

  const currentData = errors.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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

  return (
    <div className="overflow-x-auto bg-white border border-gray-800 shadow-md rounded p-4">
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
                <th className="px-4 py-2">Error Message</th>
                <th className="px-4 py-2">Last Attempt</th>
              </tr>
            </thead>
            <tbody>
              {currentData && currentData.length > 0 ? (
                currentData.map((d) => (
                  <tr key={d.id} className="text-center border-b">
                    <td className="px-4 py-2">{d.id}</td>
                    <td className="px-4 py-2">{d.error || "Unknown Error"}</td>
                    <td className="px-4 py-2">
                      {/* {new Date(d.lastSync).toLocaleDateString()} */}
                      {formatDate(d.lastSync)}
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

          {totalPages > 1 && (
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
          )}
        </>
      )}
    </div>
  );
};

export default ErrorTable;
