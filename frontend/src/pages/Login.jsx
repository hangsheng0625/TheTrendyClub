import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(
            "Account created successfully! Welcome to TheTrendyClub!"
          );
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome back!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-grey-50 to-grey-100 px-4 w-full">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-grey-300/20 to-grey-400/20 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-grey-200/20 to-grey-300/20 rounded-full opacity-20 animate-pulse-slow"></div>

      <div className="card max-w-md w-full p-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            {currentState === "Login" ? "Welcome Back!" : "Join Us Today!"}
          </h1>
          <p className="text-gray-600">
            {currentState === "Login"
              ? "Sign in to access your account and continue shopping"
              : "Create your account and start your fashion journey"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-6">
          {currentState === "Sign Up" && (
            <div className="animate-fadeInUp">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="input-field"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="input-field"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="input-field"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm">
            {currentState === "Login" && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
            )}
            {currentState === "Login" && (
              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
              >
                Forgot password?
              </button>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full btn-primary relative ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : currentState === "Login" ? (
              "🚀 Sign In"
            ) : (
              "✨ Create Account"
            )}
          </button>

          {/* Toggle state */}
          <div className="text-center">
            <p className="text-gray-600">
              {currentState === "Login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={() =>
                  setCurrentState(
                    currentState === "Login" ? "Sign Up" : "Login"
                  )
                }
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
              >
                {currentState === "Login" ? "Sign up here" : "Sign in here"}
              </button>
            </p>
          </div>
        </form>

        {/* Features */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">🔒</span>
              <span>Secure</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">💖</span>
              <span>Loved by 10K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
