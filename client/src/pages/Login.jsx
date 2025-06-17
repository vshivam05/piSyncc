import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import left from "../assets/PI.jpg";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) navigate("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="w-full flex flex-col max-h-screen overflow-y-hidden">
      <h1 className="flex bg-red-800 font-bold text-white py-4 px-6 flex justify-between items-center">
        PiSync Admin Dashboard
      </h1>
      <div className="w-full flex ">
        <div className="left-img w-1/2 flex items-center justify-center ms-44 mb-8 ">
          {" "}
          <img
            className="w-60 h-60  object-contain  border-gray-300 "
            src={left}
            alt=""
          />
        </div>
        <div className="right w-1/2 pe-28 ">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="w-[100%] max-w-xl  p-8 bg-white  rounded">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-4 py-2 border rounded w-full border-gray-400"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border rounded w-full border-gray-400"
                />
                <p className="text-right mt-2 text-sm text-blue-600 cursor-pointer hover:underline">
                  Forgot password
                </p>
                <button
                  type="submit"
                  className="bg-black text-white py-2  rounded hover:bg-gray-800"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
