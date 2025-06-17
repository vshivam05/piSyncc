import { useState } from "react";
import Header from "../components/Header";
import DeviceTable from "../components/DeviceTable";
import ErrorTable from "../components/ErrorTable";
import { useAuth } from "../context/AuthContext";
import { getDevices } from "../api/deviceService";
const Dashboard = () => {
  const [tab, setTab] = useState("devices");
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        <div className="flex  mb-4 align-center justify-between">
          <div className="left flex gap-4 mb-4">
            <button
              onClick={() => setTab("devices")}
              className={`px-4 py-2 rounded ${
                tab === "devices"
                  ? " text-black underline border  "
                  : "hover:border "
              }`}
            >
              Device Management
            </button>
            <button
              onClick={() => setTab("errors")}
              className={`px-4 py-2 rounded ${
                tab === "errors"
                  ? " text-black underline border hover:border"
                  : "hover:border "
              }`}
            >
              Recent Errors
            </button>
          </div>
          <div className="right flex gap-4 mb-4">
            <button
              className=" px-4 py-2 bg-gray-100 hover:border hover:underline hover:rounded-lg "
              onClick={getDevices}
            >
              Refresh icon
            </button>
            <button
              className="px-4 py-2 bg-gray-100 hover:border hover:underline hover:rounded-lg transition-all duration-300"
              onClick={logout}
            >
              Logout icon
            </button>
          </div>
        </div>
        {tab === "devices" ? <DeviceTable /> : <ErrorTable />}
      </div>
    </div>
  );
};

export default Dashboard;
