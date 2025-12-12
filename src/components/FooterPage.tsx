import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import footerLogo from "../assets/footer-logo.png";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">

        {/* Logo / Title */}
        <img
            src={footerLogo}
            alt="TEDxCongaree Vista Footer Logo"
            className="h-6 w-auto object-contain md:h-7"
        />

        {/* TEDx Disclaimer */}
        <p className="text-sm text-gray-300">
          This independent TEDx event is operated under license from{" "}
          <span className="underline">TED</span>.
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 <span className="underline">ChangeMakers Events Inc.</span>, a
          501(c)3 nonprofit. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-4">
          {[
            <Instagram />,
            <Facebook />,
            <Linkedin />,
            <Youtube />,
            <Mail />,
          ].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#E62B1E] hover:scale-110 transition"
            >
              {Icon}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm underline pt-2">
          <a href="#">About TED</a>
          <span>•</span>
          <a href="#">About Us</a>
          <span>•</span>
          <a href="#">Contact Us</a>
        </div>

        {/* Subscribe */}
        <div className="flex justify-center pt-6">
          <div className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-full px-5 py-3 text-black outline-none"
            />
            <button className="rounded-full bg-white text-[#E62B1E] px-6 py-3 font-medium hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
