
import {
  HiOutlineMapPin,
  HiOutlinePencilSquare,
  HiOutlineEnvelope,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiArrowRight,
} from "react-icons/hi2";

import Button from "../components/ui/Button";
import SectionChip from "../components/ui/SectionChip";

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1160px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <SectionChip>About The Author</SectionChip>

          <h2 className="font-sora font-extrabold mt-4 text-[clamp(28px,4vw,48px)] text-[var(--text)]">
            A Physician Who Writes
          </h2>

          <p className="text-[var(--text2)] mt-3 font-lora text-[15px] max-w-xl mx-auto">
            Blending clinical experience with storytelling to simplify healthcare.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col items-center md:items-start">

            {/* IMAGE */}
            <div
              className="relative animate-pulse-glow rounded-3xl p-[3px]
                         bg-gradient-to-br from-navy-500 via-violet-500 to-teal-400"
            >
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
                alt="Doctor"
                className="w-[360px] h-[460px] object-cover rounded-[22px]"
              />

              {/* Floating badge */}
              <div className="card absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl">
                <div className="font-sora font-extrabold text-[26px] text-[var(--text)] text-center leading-none">
                  12+
                </div>
                <div className="text-[12px] text-[var(--text2)] text-center">
                  Years Experience
                </div>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-14 space-y-3 w-full max-w-[360px]">

              {[
                {
                  icon: HiOutlineMapPin,
                  text: "Based in Bangladesh",
                },
                {
                  icon: HiOutlinePencilSquare,
                  text: "Author & Educator",
                },
                {
                  icon: HiOutlineEnvelope,
                  text: "yourname@email.com",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl
                               bg-white/5 backdrop-blur-md border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-violet-300" />
                    <span className="text-sm text-[var(--text2)]">
                      {item.text}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* JOURNEY */}
            <div className="mt-14 w-full max-w-[360px]">

              <h3 className="text-[var(--text)] font-sora font-bold text-lg mb-6">
                Journey
              </h3>

              <div className="space-y-6">

                {[
                  {
                    year: "2024",
                    title: "Launched Genesis Edu",
                    desc: "Built an online education platform serving thousands.",
                  },
                  {
                    year: "2022",
                    title: "Published 10th Book",
                    desc: "Reached decade milestone of published works.",
                  },
                  {
                    year: "2019",
                    title: "Started Writing Professionally",
                    desc: "Shifted to full-time writing and education.",
                  },
                  {
                    year: "2015",
                    title: "First Book Published",
                    desc: "Debut literary publication released.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">

                    {/* DOT + LINE */}
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-violet-400 mt-1.5 group-hover:scale-125 transition-transform" />
                      {i < 3 && (
                        <div className="w-px flex-1 bg-white/10 mt-2" />
                      )}
                    </div>

                    {/* TEXT */}
                    <div className="pb-5">
                      <span className="text-xs text-violet-300 font-medium tracking-widest">
                        {item.year}
                      </span>

                      <h4 className="text-[var(--text)] font-semibold mt-1 text-sm">
                        {item.title}
                      </h4>

                      <p className="text-[var(--text2)] text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* STORY */}
            <h3 className="font-sora text-[22px] font-bold text-[var(--text)]">
              My Journey
            </h3>

            <p className="mt-4 font-lora text-[15px] leading-[1.9] text-[var(--text2)]">
              I began my career in clinical medicine, treating thousands of patients
              across different hospitals and communities.
            </p>

            <p className="mt-4 font-lora text-[15px] leading-[1.9] text-[var(--text2)]">
              Over time, I realized that real impact comes not only from treatment,
              but from education and awareness.
            </p>

            {/* CARDS */}
            <div className="mt-8 grid grid-cols-2 gap-3">

              {[
                {
                  icon: HiOutlineAcademicCap,
                  title: "Medical Doctor",
                  desc: "MBBS + Clinical Practice",
                },
                {
                  icon: HiOutlinePencilSquare,
                  title: "Medical Author",
                  desc: "Books & Articles",
                },
                {
                  icon: HiOutlineBookOpen,
                  title: "Educator",
                  desc: "Health Awareness",
                },
                {
                  icon: HiOutlineMapPin,
                  title: "Bangladesh",
                  desc: "Based Location",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="glass rounded-2xl px-4 py-4"
                  >
                    <Icon className="w-5 h-5 text-violet-300" />
                    <div className="font-semibold text-sm mt-2 text-[var(--text)]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[var(--text2)]">
                      {item.desc}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-8 flex-wrap">

              <a href="#books">
                <Button size="md">
                  <HiOutlineBookOpen className="w-4 h-4" />
                  Explore Books
                </Button>
              </a>

              <a href="#contact">
                <Button variant="ghost" size="md">
                  Contact Me <HiArrowRight className="w-4 h-4" />
                </Button>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}