import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Auth = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">

      <div className="w-full max-w-md">

        {/* CARD */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-8 shadow-xl">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-center text-[var(--text)] mb-6">
            Login to your account
          </h2>

          {/* FORM */}
          <form className="space-y-5">

            {/* USER ID */}
            <div>
              <label className="text-sm text-[var(--text2)]">User ID</label>
              <input
                type="text"
                placeholder="Enter your user id"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-transparent border border-[var(--border)]
                text-[var(--text)] outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-[var(--text2)]">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-transparent border border-[var(--border)]
                  text-[var(--text)] outline-none focus:border-indigo-500 transition"
                />

                {/* EYE ICON */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text2)]"
                >
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="flex justify-end">
              <button className="text-sm text-indigo-400 hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300 shadow-md
              "
            >
              Login
            </button>

          </form>

          {/* REGISTER */}
          <p className="text-center text-sm text-[var(--text2)] mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-indigo-400 font-medium hover:underline"
            >
              Register now
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Auth;