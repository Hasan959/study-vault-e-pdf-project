import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineGlobeAlt,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiArrowRight } from "react-icons/hi2";

import Button from "../components/ui/Button";
import SectionChip from "../components/ui/SectionChip";

/* ---------------- DATA ---------------- */

const CONTACT_INFO = [
  {
    Icon: HiOutlineMail,
    label: "Email",
    value: "contact@drabutahersohan.com",
  },
  {
    Icon: HiOutlineGlobeAlt,
    label: "Website",
    value: "www.drabutahersohan.com",
  },
  {
    Icon: HiOutlinePhone,
    label: "WhatsApp",
    value: "+880 1700-000000",
  },
  {
    Icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Dhaka, Bangladesh",
  },
];

const SOCIALS = [
  { label: "Facebook", Icon: FaFacebookF, href: "#" },
  { label: "Twitter", Icon: FaTwitter, href: "#" },
  { label: "YouTube", Icon: FaYoutube, href: "#" },
  { label: "LinkedIn", Icon: FaLinkedinIn, href: "#" },
];

/* ---------------- WHATSAPP ICON (ARROW FUNCTION) ---------------- */

const WaIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
};

/* ---------------- COMPONENT ---------------- */

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  /* input handler */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg2)]">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <SectionChip>Contact</SectionChip>

          <h2 className="text-[clamp(26px,4vw,48px)] font-bold mt-4 text-[var(--text)]">
            Let’s <span className="gradient-text italic">Connect</span>
          </h2>

          <p className="mt-4 text-[var(--text2)] max-w-md mx-auto">
            Book enquiries, speaking engagements or appointments anytime.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-5 gap-12">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="wa" className="w-full">
                <WaIcon />
                WhatsApp Contact
              </Button>
            </a>

            {/* Contact Info */}
            {CONTACT_INFO.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl glass"
              >
                <Icon className="w-5 h-5 text-navy-500" />

                <div>
                  <p className="text-xs uppercase text-[var(--text3)]">
                    {label}
                  </p>
                  <p className="text-sm text-[var(--text)]">{value}</p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="pt-2">
              <p className="text-xs uppercase text-[var(--text3)] mb-3">
                Follow
              </p>

              <div className="flex gap-3">
                {SOCIALS.map(({ label, Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl glass
                 hover:-translate-y-1 hover:text-navy-500 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3 p-8 rounded-2xl bg-white/5 border border-white/10">
            {/* SUCCESS STATE */}
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-[var(--text)]">
                  Message Sent
                </h3>
                <p className="text-[var(--text2)] mt-2">I will reply soon.</p>
              </div>
            ) : (
              /* FORM */
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="form-field"
                  value={form.name}
                  onChange={handleChange}
                />

                <input
                  name="email"
                  placeholder="Your Email"
                  className="form-field"
                  value={form.email}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="form-field"
                  value={form.message}
                  onChange={handleChange}
                />

                <Button type="submit" disabled={loading}>
                  {loading ? "⏳ Sending..." : "🚀 Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
