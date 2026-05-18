import { BOOKS } from "../data/books";
import { HiArrowUp, HiOutlineMail } from "react-icons/hi";

import { Link } from "react-router";

// React Icons (Social)
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

/* ---------- DATA ---------- */
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Books", path: "/books" },
  { label: "Articles", path: "/articles" },
  { label: "Contact", path: "/contact" },
];

const SOCIALS = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/hasan1boss" },
  { label: "Twitter/X", icon: FaTwitter, href: "https://twitter.com" },
  { label: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
];

/* ---------- COMPONENT ---------- */
const Footer = () => {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[180px] bg-black/5 blur-[100px] dark:bg-navy-500/15" />

      <div className="max-w-[1160px] mx-auto px-6 relative">
        {/* ---------- TOP GRID ---------- */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-[var(--border)]">
          
          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[var(--text)]">
              Dr. Abu Taher Sohan
            </h2>

            <p className="text-xs uppercase tracking-[3px] text-[var(--text3)] mt-2 mb-4">
              Doctor · Author · Educator
            </p>

            <p className="text-sm text-[var(--text2)] max-w-[320px] leading-relaxed">
              Making healthcare knowledge simple and accessible for every
              Bengali family through books and education.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl
                               bg-[var(--surface)] border border-[var(--border)]
                               text-[var(--text2)]
                               transition-all duration-300
                               hover:-translate-y-1 hover:text-[var(--text)]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-[var(--text3)] mb-5">
              Navigation
            </h4>

            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm text-[var(--text2)] hover:text-[var(--text)] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-[var(--text3)] mb-5">
              Stay Updated
            </h4>

            <p className="text-sm text-[var(--text2)] mb-4">
              Get updates & health tips.
            </p>

            <div className="flex items-center bg-[var(--surface)] border border-[var(--border)] rounded-xl px-3">
              <HiOutlineMail className="text-[var(--text3)] w-4 h-4" />

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none text-sm px-3 py-3 w-full text-[var(--text)]"
              />
            </div>

            <button
              className="mt-3 w-full py-2 rounded-xl text-sm font-semibold
                         bg-gradient-to-r from-blue-500 to-violet-500
                         text-white hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* ---------- BOOK TAGS ---------- */}
        <div className="py-8 flex flex-wrap gap-3 justify-center">
          {BOOKS.slice(0, 6).map((b) => (
            <span
              key={b.id}
              className="text-xs text-[var(--text3)] border border-[var(--border)]
                         px-3 py-1 rounded-full hover:text-[var(--text)] transition"
            >
              {b.titleEn}
            </span>
          ))}
        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text3)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-[var(--text3)]">Crafted with care ✨</p>

            <a
              href="#home"
              className="w-9 h-9 flex items-center justify-center rounded-xl
                         bg-[var(--surface)] border border-[var(--border)]
                         hover:-translate-y-1 transition"
            >
              <HiArrowUp className="text-[var(--text2)]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;