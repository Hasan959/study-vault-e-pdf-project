import React from "react";
import { HiOutlineBookOpen, HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

/* Button */
const Button = ({ children, variant = "primary" }) => (
  <button
    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition hover:-translate-y-1
    ${
      variant === "ghost"
        ? "border border-[var(--border)] text-[var(--text)] hover:bg-white/10"
        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg"
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

      {/* 🌌 COSMIC BACKGROUND */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ⭐ STAR FIELD */}
      <div className="absolute inset-0">
        <div className="w-1 h-1 bg-white rounded-full absolute top-[10%] left-[20%] animate-twinkle delay-1"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-[30%] left-[70%] animate-twinkle delay-2"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-[60%] left-[40%] animate-twinkle delay-3"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-[80%] left-[80%] animate-twinkle delay-4"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-[50%] left-[10%] animate-twinkle delay-5"></div>
      </div>

      {/* GLOW ORBS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-float" />

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text)] leading-tight">
            Healing Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400">
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
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur"
              >
                <h3 className="text-xl font-bold text-[var(--text)]">
                  {s.value}
                </h3>
                <p className="text-xs text-[var(--text2)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - COSMIC VISUAL */}
        <div className="relative flex justify-center items-center">

          {/* ORBIT RINGS */}
          <div className="absolute w-[420px] h-[420px] border border-indigo-400/20 rounded-full animate-orbit" />
          <div className="absolute w-[300px] h-[300px] border border-purple-400/20 rounded-full animate-orbit" />

          {/* ORBIT DOT (MOON / PLANET FEEL) */}
          <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-0 animate-orbit" />

          {/* IMAGE */}
          <div className="animate-float z-10">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80"
              className="w-[280px] md:w-[340px] rounded-3xl border border-white/10 shadow-2xl"
              alt="doctor"
            />
          </div>

          {/* RATING FLOAT */}
          <div className="absolute top-10 right-0 bg-white/5 backdrop-blur border border-white/10 px-4 py-3 rounded-xl animate-float">
            <p className="text-white font-bold">4.8 ★</p>
            <p className="text-xs text-gray-300">Reader Rating</p>
          </div>

          {/* BOTTOM BADGE */}
          <div className="absolute bottom-10 left-0 bg-white/5 backdrop-blur border border-white/10 px-4 py-3 rounded-xl animate-float">
            <p className="text-white font-bold">40K+</p>
            <p className="text-xs text-gray-300">Books Sold</p>
          </div>

        </div>
      </div>

    </section>
  );
}