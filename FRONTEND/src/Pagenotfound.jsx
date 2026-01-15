import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white px-6">
      <div className="max-w-md w-full text-center">
        
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logo.png" // <-- put your Vexora Solutions logo here
            alt="Vexora Solutions"
            className="h-14 object-contain"
          />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-indigo-500 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-bold mb-2 text-gray-950">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you’re trying to access doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Home
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Vexora Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
}
