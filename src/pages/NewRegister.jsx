import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";

const NewRegister = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[var(--bg)] px-4 transition-colors duration-500">

      {/* 🌈 BACKGROUND ORBS */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl bg-pink-500/20"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl bg-indigo-500/20"
      />

      {/* ⭐ CENTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-[32px] p-8 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl bg-white/5"
        >

          {/* TITLE */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--text)]">
              Create Account 🚀
            </h1>
            <p className="text-[var(--text2)] text-sm mt-2">
              Join us and start your journey
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5">

            {/* USERNAME */}
            <div>
              <label className="text-sm text-[var(--text)] block mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-[var(--text)] outline-none focus:border-pink-400"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-[var(--text)] block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-[var(--text)] outline-none focus:border-indigo-400"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-[var(--text)] block mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-12 rounded-2xl bg-white/10 border border-white/10 text-[var(--text)] outline-none focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPass ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm text-[var(--text)] block mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full px-4 py-3 pr-12 rounded-2xl bg-white/10 border border-white/10 text-[var(--text)] outline-none focus:border-pink-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            >
              Create Account
            </motion.button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-[var(--text2)] mt-6">
            Already have an account?{" "}
            <Link to="/auth" className="text-pink-400 hover:underline">
              Login
            </Link>
          </p>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default NewRegister;