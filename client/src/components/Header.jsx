// import { useAuth } from "../context/AuthContext";

const Header = () => {
  //   const { logout } = useAuth();
  return (
    <div className="bg-red-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">PiSync Admin Dashboard</h1>
    </div>
  );
};

export default Header;
