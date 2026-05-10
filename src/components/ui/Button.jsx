import { forwardRef } from "react";

/**
 * Reusable Button component.
 * variant: 'primary' | 'ghost' | 'wa' | 'auth'
 * size:    'sm' | 'md' | 'lg'
 */

const BASE =
  "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer border-0 outline-none select-none overflow-hidden";

const VARIANTS = {
  primary:
    "bg-gradient-to-br from-navy-500 to-violet-500 text-white shadow-glow border border-transparent hover:border-fuchsia-400/70 hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] hover:-translate-y-0.5 active:translate-y-0",

  ghost:
    "glass text-[var(--text)] hover:bg-navy-500/10 hover:border-navy-500/40 hover:-translate-y-0.5 active:translate-y-0",

  wa: "bg-gradient-to-br from-green-400 to-green-500 text-white shadow-wa hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",

  auth:
  "relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md rounded-xl z-10",
};

const SIZES = {
  sm: "text-[13px] px-4 py-2",
  md: "text-[15px] px-6 py-3",
  lg: "text-[16px] px-8 py-4",
};

const Button = forwardRef(function Button(
  { variant = "primary", size = "md", className = "", children, ...props },
  ref
) {
  const isAuth = variant === "auth";

  return (
    <button
      ref={ref}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className} ${
        isAuth ? "group" : ""
      }`}
      {...props}
    >
      {/* 🔥 ONLY AUTH hover fill layer */}
      {isAuth && (
        <span className="
          absolute inset-0 
          bg-white/10 
          scale-x-0 
          origin-left 
          transition-transform duration-500 
          group-hover:scale-x-100
        " />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});

export default Button;