import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BOOKS, CATEGORIES } from "../data/books";
import BookCard, { BookCardSkeleton } from "../components/BookCard";
import BookModal from "../components/BookModal";
import SectionChip from "../components/ui/SectionChip";

export default function Books() {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

    const t = setTimeout(() => setLoading(false), 1400);

    return () => clearTimeout(t);
  }, []);

  function handleFilter(cat) {
    if (cat === category) return;

    setCategory(cat);
    setLoading(true);

    setTimeout(() => setLoading(false), 700);
  }

  const filtered =
    category === "All"
      ? BOOKS
      : BOOKS.filter((b) => b.category === category);

  return (
    <section
      id="books"
      className="py-24 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1160px] mx-auto px-6">

        {/* HEADER */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <SectionChip>Published Works</SectionChip>

          <h2 className="text-[clamp(26px,4vw,50px)] font-bold text-[var(--text)]">
            Books by{" "}
            <span className="gradient-text italic">
              Dr. Sohan
            </span>
          </h2>

          <p className="max-w-[520px] mx-auto text-[var(--text2)] mt-3">
            Clinical knowledge + everyday life
          </p>

          {/* FILTER BUTTONS */}
          <div
            className="flex flex-wrap justify-center gap-3 mt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
                className={`
                  px-5 py-2.5 rounded-full border text-sm font-medium
                  transition-all duration-300
                  ${
                    category === cat
                      ? "bg-violet-500 text-white border-violet-500 shadow-lg shadow-violet-500/20"
                      : "border-white/10 bg-white/5 text-[var(--text2)] hover:border-violet-400/40 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <BookCardSkeleton />
                </div>
              ))
            : filtered.map((book, index) => (
                <div
                  key={book.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <BookCard
                    book={book}
                    onOpen={setModal}
                  />
                </div>
              ))}
        </div>

        {/* EMPTY */}
        {!loading && filtered.length === 0 && (
          <div
            className="text-center py-20 text-[var(--text2)]"
            data-aos="fade-up"
          >
            No books found
          </div>
        )}

      </div>

      {/* MODAL */}
      {modal && (
        <BookModal
          book={modal}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}