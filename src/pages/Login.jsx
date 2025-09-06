import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/upload"); // redirect to Upload after login
    } catch (err) {
      console.error("Login Error:", err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
            alt="Logo"
            className="w-16 h-16 mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 mb-8">
          Sign in to access your dashboard
        </p>

        {/* Google Button */}
        <button
          onClick={handleLogin}
          className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Logo"
            className="w-6 h-6"
          />
          <span className="font-medium">Sign in with Google</span>
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-6">
          Powered by Firebase Authentication
        </p>
      </div>
    </div>
  );
}
