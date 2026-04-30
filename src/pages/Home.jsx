import React from "react";
import { HiOutlineBookOpen, HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

/* Button */
const Button = ({ children, variant = "primary" }) => (
  <button
    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]
    ${
      variant === "ghost"
        ? "border border-[var(--border)] text-[var(--text)] hover:bg-white/10"
        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
    }`}
  >
    {children}
  </button>
);

const STATS = [
  { value: "12+", label: "Years Practice" },
  { value: "6", label: "Books Published" },
  { value: "40K+", label: "Readers" },
  { value: "4.8★", label: "Avg Rating" },
];

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[var(--bg)]">

      {/* 🌌 STAR FIELD */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* 🔵 GLOW ORBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-float delay-300" />

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text)] leading-tight">
            Healing Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 animate-shimmer">
              Medicine & Words
            </span>
          </h1>

          <p className="mt-6 text-[var(--text2)] max-w-[480px]">
            A journey of knowledge, healing and transformation through science and storytelling.
          </p>

          <div className="flex gap-4 mt-6">
            <Button>
              <HiOutlineBookOpen /> Explore Books
            </Button>
            <Button variant="ghost">
              <HiOutlineMail /> Contact <HiArrowRight />
            </Button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-[var(--text)]">
                  {s.value}
                </h3>
                <p className="text-xs text-[var(--text2)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* ORBIT RINGS */}
          <div className="orbit-ring w-[420px] h-[420px]" />
          <div className="orbit-ring slow w-[300px] h-[300px]" />

          {/* ORBIT DOT */}
          <div className="orbit-dot" />

          {/* IMAGE */}
          <div className="animate-float z-10">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80"
              className="w-[280px] md:w-[340px] rounded-3xl border border-white/10 shadow-2xl"
              alt="doctor"
            />
          </div>

          {/* RATING */}
          <div className="floating-card top-10 right-0">
            <p className="font-bold">4.8 ★</p>
            <p className="text-xs opacity-70">Reader Rating</p>
          </div>

          {/* BOOKS */}
          <div className="floating-card bottom-10 left-0 ">
            <p className="font-bold">40K+</p>
            <p className="text-xs opacity-70">Books Sold</p>
          </div>

        </div>
      </div>
    </section>
  );
}