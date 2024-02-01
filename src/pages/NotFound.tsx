import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F2FF]">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-extrabold text-[#B278FB]">404</h1>
        <h1 className="text-3xl  text-gray-600">Page not found</h1>
        <button className="bg-[#B278FB] text-white px-8 py-2 rounded-md hover:bg-[#b072fca1] duration-100">
          <Link to="/auth">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
