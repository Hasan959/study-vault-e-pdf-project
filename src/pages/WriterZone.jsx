import { useState } from "react";

const tools = [
  { icon: "🖊️", title: "Daily Word Tracker", desc: "Track your writing streak and consistency." },
  { icon: "🧠", title: "Plot Builder", desc: "Generate story structure and ideas." },
  { icon: "📖", title: "Reading Journal", desc: "Save quotes and insights." },
  { icon: "⏱️", title: "Focus Timer", desc: "Deep work writing sessions." },
];

const tips = [
  { number: "01", title: "Write first, edit later", body: "Don’t stop to perfect sentences." },
  { number: "02", title: "Read like a writer", body: "Study structure, not just story." },
  { number: "03", title: "Finish things", body: "Completion builds skill faster than perfection." },
  { number: "04", title: "Protect writing time", body: "Treat it like a real job schedule." },
];

export default function WriterZone() {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-16">
          <span className="chip">Writer Sanctuary</span>

          <h1 className="mt-5 text-[clamp(32px,5vw,60px)] font-extrabold text-[var(--text)]">
            Build Your Writing Habit
          </h1>

          <p className="mt-4 text-[var(--text2)] max-w-2xl mx-auto">
            Tools, focus systems, and craft principles for serious writers.
          </p>

          {/* mini stats */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="glass px-4 py-2 rounded-full text-sm">🔥 5 Day Streak</div>
            <div className="glass px-4 py-2 rounded-full text-sm">✍️ 1,240 Words Today</div>
            <div className="glass px-4 py-2 rounded-full text-sm">🎯 Focus Mode ON</div>
          </div>
        </section>

        {/* TOOLS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">
            Writing Tools
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <div
                key={t.title}
                onClick={() => setActiveTool(t)}
                className="card p-5 cursor-pointer hover:scale-[1.02]"
              >
                <div className="text-2xl mb-3">{t.icon}</div>
                <h3 className="font-semibold text-[var(--text)]">{t.title}</h3>
                <p className="text-sm text-[var(--text2)] mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DAILY PROMPT */}
        <section className="mb-20">
          <div className="card p-8 border border-[var(--border)]">
            <span className="chip mb-4 inline-block">Today's Prompt</span>

            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text)] leading-relaxed">
              “Write a scene where a character discovers a secret but chooses silence.”
            </h3>

            <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-br from-navy-500 to-violet-500 text-white font-semibold">
              Start Writing
            </button>
          </div>
        </section>

        {/* TIPS */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">
            Craft Principles
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((t) => (
              <div key={t.number} className="card p-6">
                <div className="text-3xl font-bold text-[var(--text3)]">
                  {t.number}
                </div>
                <h3 className="mt-2 font-semibold text-[var(--text)]">
                  {t.title}
                </h3>
                <p className="text-sm text-[var(--text2)] mt-2 leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* TOOL MODAL (simple preview) */}
      {activeTool && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-6"
          onClick={() => setActiveTool(null)}
        >
          <div
            className="card p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-[var(--text)]">
              {activeTool.title}
            </h3>
            <p className="mt-2 text-[var(--text2)]">{activeTool.desc}</p>

            <button
              onClick={() => setActiveTool(null)}
              className="mt-5 w-full py-2 rounded-lg glass"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}