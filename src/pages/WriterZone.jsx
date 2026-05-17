import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  HiOutlinePencilSquare,
  HiOutlineLightBulb,
  HiOutlineBookOpen,
  HiOutlineClock,
} from "react-icons/hi2";

/* ---------------- TOOLS DATA ---------------- */
const tools = [
  {
    icon: HiOutlinePencilSquare,
    title: "Daily Word Tracker",
    desc: "Track your writing streak and consistency.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Plot Builder",
    desc: "Generate story structure and ideas.",
  },
  {
    icon: HiOutlineBookOpen,
    title: "Reading Journal",
    desc: "Save quotes and insights.",
  },
  {
    icon: HiOutlineClock,
    title: "Focus Timer",
    desc: "Deep work writing sessions.",
  },
];

/* ---------------- TIPS DATA ---------------- */
const tips = [
  {
    number: "01",
    title: "Write first, edit later",
    body: "Don’t stop to perfect sentences.",
  },
  {
    number: "02",
    title: "Read like a writer",
    body: "Study structure, not just story.",
  },
  {
    number: "03",
    title: "Finish things",
    body: "Completion builds skill faster than perfection.",
  },
  {
    number: "04",
    title: "Protect writing time",
    body: "Treat it like a real job schedule.",
  },
];

export default function WriterZone() {
  const [activeTool, setActiveTool] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="min-h-screen pt-28 pb-20 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-16" data-aos="fade-up">
          <span className="chip">Writer Sanctuary</span>

          <h1 className="mt-5 text-[clamp(32px,5vw,60px)] font-extrabold text-[var(--text)] leading-tight">
            Build Your Writing Habit
          </h1>

          <p className="mt-4 text-[var(--text2)] max-w-2xl mx-auto leading-relaxed">
            Tools, focus systems, and craft principles for serious writers.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mb-20">
          <h2
            className="text-2xl font-bold mb-6 text-[var(--text)]"
            data-aos="fade-right"
          >
            Writing Tools
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t, index) => {
              const Icon = t.icon;

              return (
                <div
                  key={t.title}
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                  onClick={() => setActiveTool(t)}
                  className="card p-5 cursor-pointer hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* ICON (React Icons) */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-violet-300" />
                  </div>

                  <h3 className="font-semibold text-[var(--text)]">
                    {t.title}
                  </h3>

                  <p className="text-sm text-[var(--text2)] mt-2">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* DAILY PROMPT */}
        <section className="mb-20" data-aos="fade-up">
          <div className="card p-8">
            <span className="chip mb-4 inline-block">
              Today's Prompt
            </span>

            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text)]">
              “Write a scene where a character discovers a secret but chooses silence.”
            </h3>
          </div>
        </section>

        {/* TIPS */}
        <section>
          <h2
            className="text-2xl font-bold mb-6 text-[var(--text)]"
            data-aos="fade-right"
          >
            Craft Principles
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((t, index) => (
              <div
                key={t.number}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 120}
                className="card p-6"
              >
                <div className="text-3xl font-bold text-[var(--text3)]">
                  {t.number}
                </div>

                <h3 className="mt-2 font-semibold text-[var(--text)]">
                  {t.title}
                </h3>

                <p className="text-sm text-[var(--text2)] mt-2">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODAL */}
      {activeTool && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
          onClick={() => setActiveTool(null)}
        >
          <div
            className="card p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <activeTool.icon className="w-7 h-7 text-violet-300" />
            </div>

            <h3 className="text-2xl font-bold text-[var(--text)]">
              {activeTool.title}
            </h3>

            <p className="mt-3 text-[var(--text2)]">
              {activeTool.desc}
            </p>

            <button
              onClick={() => setActiveTool(null)}
              className="mt-6 w-full py-3 rounded-xl glass"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}