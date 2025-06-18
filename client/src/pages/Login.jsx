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
    <div className="w-full min-h-screen flex flex-col bg-white">
      <header className="bg-red-800 text-white py-4 px-6 text-sm sm:text-base font-semibold shadow">
        PiSync Admin Dashboard
      </header>

      <main className="flex flex-col md:flex-row justify-center items-center flex-grow px-4 py-8 gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={left}
            alt="Pi logo"
            className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-sm">
          <div className="bg-white p-6 sm:p-8 border border-gray-300 rounded shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-400 rounded"
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-400 rounded"
              />
              <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
                Forget password
              </p>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
