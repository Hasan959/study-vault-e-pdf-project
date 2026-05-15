import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

import { HiCheckCircle } from "react-icons/hi2";

import { Send, Loader2 } from "lucide-react";

import Button from "../components/ui/Button";
import SectionChip from "../components/ui/SectionChip";

/* ---------------- DATA ---------------- */

const contactInfo = [
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

/* ---------------- WHATSAPP ICON ---------------- */

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

  /* AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 1100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  /* INPUT HANDLER */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* SUBMIT HANDLER */
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

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
    }, 1200);
  };

  return (
    <section
      className="py-24 bg-[var(--bg2)] overflow-hidden"
      id="contact"
    >
      <div className="max-w-[1160px] mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <SectionChip>Contact</SectionChip>

          <h2 className="text-[clamp(26px,4vw,48px)] font-bold mt-4 text-[var(--text)]">
            Let’s{" "}
            <span className="gradient-text italic">
              Connect
            </span>
          </h2>

          <p className="mt-4 text-[var(--text2)] max-w-md mx-auto leading-relaxed">
            Book enquiries, speaking engagements or appointments anytime.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-5 gap-12">

          {/* ================= LEFT SIDE ================= */}
          <div
            className="md:col-span-2 flex flex-col gap-4"
            data-aos="fade-right"
          >

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              data-aos="zoom-in"
            >
              <Button
                variant="wa"
                className="w-full hover:scale-[1.02] transition-all duration-300"
              >
                <WaIcon />
                WhatsApp Contact
              </Button>
            </a>

            {/* Contact Info */}
            {contactInfo.map(({ Icon, label, value }, index) => (
              <div
                key={label}
                data-aos="fade-right"
                data-aos-delay={index * 120}
                className="flex items-center gap-4 p-4 rounded-xl glass
                           hover:-translate-y-1 hover:border-white/10
                           transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-navy-500" />

                <div>
                  <p className="text-xs uppercase text-[var(--text3)]">
                    {label}
                  </p>

                  <p className="text-sm text-[var(--text)]">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* SOCIALS */}
            <div
              className="pt-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-xs uppercase text-[var(--text3)] mb-3">
                Follow
              </p>

              <div className="flex gap-3">
                {SOCIALS.map(({ label, Icon, href }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="w-10 h-10 flex items-center justify-center rounded-xl glass
                               hover:-translate-y-1 hover:text-navy-500
                               hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="md:col-span-3 p-8 rounded-2xl bg-white/5 border border-white/10
                       backdrop-blur-xl"
            data-aos="fade-left"
          >

            {/* SUCCESS */}
            {sent ? (
              <div
                className="text-center flex flex-col items-center py-10"
                data-aos="zoom-in"
              >
                <div className="text-green-500 text-5xl mb-3 animate-bounce">
                  <HiCheckCircle />
                </div>

                <h3 className="text-xl font-bold text-[var(--text)]">
                  Message Sent
                </h3>

                <p className="text-[var(--text2)] mt-2">
                  I will reply soon.
                </p>
              </div>
            ) : (

              /* FORM */
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* NAME */}
                <div data-aos="fade-up" data-aos-delay="100">
                  <input
                    required
                    name="name"
                    placeholder="Your Name"
                    className="form-field"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                {/* EMAIL */}
                <div data-aos="fade-up" data-aos-delay="200">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="form-field"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* MESSAGE */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="form-field resize-none"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* BUTTON */}
                <div data-aos="fade-up" data-aos-delay="400">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="hover:scale-[1.02] transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;