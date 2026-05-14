import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../components/ui/Button";

const articles = [
  {
    title: "Why Every Writer Needs a Creative Ritual",
    category: "Craft",
    date: "Apr 12, 2025",
    readTime: "5 min",
    excerpt:
      "The blank page is never truly blank — it's alive with everything you bring to it. Here's how ritual transforms that terror into fuel.",
  },
  {
    title: "The Education System We Deserve",
    category: "Education",
    date: "Mar 28, 2025",
    readTime: "8 min",
    excerpt:
      "We've been teaching children what to think for centuries. It's time to teach them how — and why that difference changes everything.",
  },
  {
    title: "On Reading Slowly in a Fast World",
    category: "Culture",
    date: "Mar 5, 2025",
    readTime: "6 min",
    excerpt:
      "Speed-reading is a myth we tell ourselves. The books that changed me demanded patience, rereading, and the courage to sit with confusion.",
  },
];

const categories = [
  "All",
  "Craft",
  "Education",
  "Culture",
  "Language",
  "Technology",
];

export default function Articles() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div
          className="mb-12 text-center"
          data-aos="fade-up"
        >
          <span className="chip">Ideas & Essays</span>

          <h1 className="font-sora font-extrabold mt-4 text-[clamp(28px,4vw,48px)] text-[var(--text)]">
            Articles
          </h1>

          <p className="text-[var(--text2)] mt-4 max-w-xl mx-auto leading-relaxed">
            Thoughts on writing, reading, education, and the world that shapes all three.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {categories.map((cat, index) => (
            <div
              key={cat}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <Button
                size="sm"
                variant={active === cat ? "primary" : "ghost"}
                onClick={() => setActive(cat)}
                className="rounded-full px-5"
              >
                {cat}
              </Button>
            </div>
          ))}
        </div>

        {/* ARTICLES LIST */}
        <div className="space-y-6">
          {filtered.map((article, i) => (
            <article
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 150}
              className="card p-6 cursor-pointer group
                         hover:-translate-y-1 transition-all duration-500
                         hover:border-white/10"
            >

              {/* META */}
              <div className="flex flex-wrap items-center gap-3 mb-3 text-[12px] text-[var(--text3)]">
                <span className="text-navy-500 font-semibold">
                  {article.category}
                </span>

                <span>•</span>

                <span>{article.date}</span>

                <span>•</span>

                <span>{article.readTime} read</span>
              </div>

              {/* TITLE */}
              <h2
                className="font-lora font-semibold text-[20px]
                           text-[var(--text)] mb-2
                           group-hover:text-navy-400
                           transition duration-300"
              >
                {article.title}
              </h2>

              {/* EXCERPT */}
              <p className="text-[var(--text2)] text-[14px] leading-relaxed">
                {article.excerpt}
              </p>

              {/* CTA */}
              <div
                className="mt-4 text-navy-500 text-sm font-semibold
                           opacity-0 translate-x-[-10px]
                           group-hover:opacity-100
                           group-hover:translate-x-0
                           transition-all duration-300"
              >
                Read article →
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}