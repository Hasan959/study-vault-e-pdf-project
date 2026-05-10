import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {  Link } from "react-router";

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const stars = Array.from({ length: 25 });

const Auth = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-[var(--bg)] px-4 transition-colors duration-500">
      {/* =========================
          ANIMATED STARS
      ========================= */}

      {stars.map((_, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
            top: `${(i * 13) % 100}%`,
            left: `${(i * 17) % 100}%`,
            boxShadow: "0 0 12px rgba(255,255,255,0.9)",
          }}
        />
      ))}

      {/* =========================
          BACKGROUND ORBS
      ========================= */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          blur-3xl
          bg-pink-500/20
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          blur-3xl
          bg-indigo-500/20
        "
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          rounded-full
          blur-3xl
          bg-cyan-500/10
        "
      />

      {/* =========================
          FLOATING CARTOONS
      ========================= */}

      <motion.img
        variants={floatingAnimation}
        animate="animate"
        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
        className="
          absolute
          top-20
          left-10
          w-28
          opacity-40
          hidden lg:block
        "
      />

      <motion.img
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 1 }}
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        className="
          absolute
          bottom-20
          left-20
          w-32
          opacity-30
          hidden lg:block
        "
      />

      <motion.img
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 2 }}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        className="
          absolute
          top-16
          right-10
          w-28
          opacity-40
          hidden lg:block
        "
      />

      {/* =========================
          ROTATING STAR
      ========================= */}

      <motion.img
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
          },
        }}
        src="https://cdn-icons-png.flaticon.com/512/616/616490.png"
        className="
          absolute
          bottom-16
          right-16
          w-20
          opacity-50
          hidden lg:block
          drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
        "
      />

      {/* =========================
          FLOATING PARTICLES
      ========================= */}

      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          top-32
          right-1/4
          w-24
          h-24
          rounded-full
          bg-pink-500/10
          blur-2xl
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-32
          left-1/4
          w-32
          h-32
          rounded-full
          bg-cyan-500/10
          blur-2xl
        "
      />

      {/* =========================
          AUTH CARD
      ========================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            p-8
            border
            border-white/10
            shadow-[0_0_60px_rgba(0,0,0,0.4)]
          "
        >
          {/* =========================
              ANIMATED BACKGROUND
          ========================= */}

          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(255,0,128,0.18), rgba(124,58,237,0.18), rgba(0,112,243,0.18))",

                "linear-gradient(135deg, rgba(0,198,255,0.18), rgba(0,255,136,0.18), rgba(255,234,0,0.18))",

                "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(236,72,153,0.18), rgba(6,182,212,0.18))",

                "linear-gradient(135deg, rgba(255,0,128,0.18), rgba(124,58,237,0.18), rgba(0,112,243,0.18))",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-[32px]
            "
          />

          {/* GLASS OVERLAY */}

          <div
            className="
              absolute
              inset-0
              rounded-[32px]
              bg-black/10
              backdrop-blur-2xl
            "
          />

          {/* MULTI COLOR BORDER */}

          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-[32px]
              opacity-40
              blur-2xl
              bg-[linear-gradient(
                90deg,
                #ff0080,
                #7928ca,
                #0070f3,
                #00c6ff,
                #00ff88,
                #ffea00,
                #ff0080
              )]
              bg-[length:400%_400%]
            "
          />

          {/* =========================
              CONTENT
          ========================= */}

          <div className="relative z-10">
            {/* LOGO */}

            <div className="text-center mb-8">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-3xl
                  bg-gradient-to-r
                  from-pink-500
                  via-purple-500
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  font-bold
                  shadow-[0_0_40px_rgba(168,85,247,0.5)]
                "
              >
                A
              </motion.div>

              <motion.h1
                animate={{
                  color: [
                    "#60a5fa",
                    "#a855f7",
                    "#ec4899",
                    "#06b6d4",
                    "#60a5fa",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  text-3xl
                  font-bold
                  mt-6
                "
              >
                Welcome Back 👋
              </motion.h1>

              <p className="text-[var(--text2)] text-sm mt-2">
                Login to continue your amazing journey
              </p>
            </div>

            {/* FORM */}

            <form className="space-y-5">
              {/* USER ID */}

              <div>
                <label className="text-sm text-[var(--text)] block mb-2">
                  User ID
                </label>

                <motion.input
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(0,255,255,0.3)",
                  }}
                  type="text"
                  placeholder="Enter your user id"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    text-[var(--text)]
                    placeholder:text-[var(--text3)]
                    outline-none
                    focus:border-cyan-400
                    focus:bg-white/20
                    transition-all
                    duration-300
                    backdrop-blur-xl
                  "
                />
              </div>

              {/* PASSWORD */}

              <div>
                <label className="text-sm text-[var(--text)] block mb-2">
                  Password
                </label>

                <div className="relative">
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 25px rgba(255,0,128,0.3)",
                    }}
                    type={showPass ? "text" : "password"}
                    placeholder="Enter password"
                    className="
                      w-full
                      px-4
                      py-3
                      pr-12
                      rounded-2xl
                      bg-white/10
                      border
                      border-white/10
                      text-[var(--text)]
                      placeholder:text-[var(--text3)]
                      outline-none
                      focus:border-pink-400
                      focus:bg-white/20
                      transition-all
                      duration-300
                      backdrop-blur-xl
                    "
                  />

                  {/* EYE BUTTON */}

                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-[var(--text2)]
                      hover:text-white
                      transition
                    "
                  >
                    {showPass ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              {/* FORGOT PASSWORD */}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="
                    text-sm
                    text-cyan-400
                    hover:text-cyan-300
                    hover:underline
                  "
                >
                  Forgot Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 40px rgba(168,85,247,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="
                  relative
                  overflow-hidden
                  w-full
                  py-3
                  rounded-2xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-pink-500
                  via-purple-500
                  to-cyan-500
                "
              >
                <span className="relative z-10">Login</span>

                {/* SHINE EFFECT */}

                <motion.span
                  animate={{
                    x: [-200, 500],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-24
                    bg-white/20
                    blur-xl
                    rotate-12
                  "
                />
              </motion.button>
            </form>

            {/* REGISTER */}

            <p
              className="
              text-center
              text-sm
              text-[var(--text2)]
              mt-7
            "
            >
              Don’t have an account?{" "}
              <Link
                to="/newregister"
                className=" text-pink-400 hover:text-pink-300 hover:underline font-medium"
              >
                Register now
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Auth;
