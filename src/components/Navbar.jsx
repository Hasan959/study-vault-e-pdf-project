import React, { useState } from "react"
import { NavLink, Link } from "react-router"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Books", to: "/books" },
  { label: "Articles", to: "/articles" },
  { label: "Contact", to: "/contact" },
  { label: "Writer Zone", to: "/writerzone" },
  { label: "GenesisEdu", to: "/genesisedu" },
]

/* =========================
   NAV LINK COMPONENT
========================= */
function DesktopNavLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `relative text-[14px] font-medium transition-colors duration-200 group
        ${isActive ? "text-[var(--text)]" : "text-[var(--text2)] hover:text-[var(--text)]"}`
      }
    >
      {({ isActive }) => (
        <>
          {label}

          <span
            className={[
              "absolute -bottom-0.5 left-0 right-0 h-[1.5px] rounded-full",
              "bg-gradient-to-r from-navy-500 to-violet-500",
              "transition-transform duration-300 origin-left",
              isActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  )
}

/* =========================
   DARK MODE TOGGLE
========================= */
function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 text-sm rounded-md border border-[var(--border)] text-[var(--text)]"
    >
      Theme
    </button>
  )
}

/* =========================
   NAVBAR
========================= */
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="w-full border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl fixed top-0 left-0 z-50">
      <div className="max-w-[1160px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-bold text-[var(--text)]">
          My Website
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <DesktopNavLink key={l.to} {...l} />
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--text)]"
            onClick={() => setOpen(true)}
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}
      {open && (
        <div className="fixed inset-0 bg-[var(--bg2)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-50">

          {/* Close */}
          <button
            className="absolute top-5 right-5 text-[var(--text)]"
            onClick={closeMenu}
          >
            <HiX size={26} />
          </button>

          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-bold transition-colors
                ${isActive ? "text-[var(--text)]" : "text-[var(--text2)]"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar