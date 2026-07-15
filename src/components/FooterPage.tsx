import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";
import footerLogo from "../assets/longlogo-black.webp";
import { Link } from "react-router-dom";

export function Footer() {
  const socials = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/tedxcongareevista/",
      label: "Instagram",
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/TEDxCongareeVista",
      label: "Facebook",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/tedxcongareevista/",
      label: "LinkedIn",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@tedxcongareevista",
      label: "YouTube",
    },
    { Icon: Mail, href: "mailto:info@tedxcongareevista.org", label: "Email" },
  ];

  return (
    <footer className="bg-white/10 text-white px-6 pt-10 pb-28 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={footerLogo}
              alt="TEDxCongaree Vista Footer Logo"
              className="w-full max-w-2xl h-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Inspire Columbia Logo */}
          <a
            href="https://inspirecolumbia.org/"
            className="cursor-pointer"
            style={{ marginTop: "0.5rem", marginBottom: "2rem" }}
          >
            <img
              src="/assets/InspireBlackLogo.webp"
              alt="Inspire Columbia Logo"
              style={{ height: "7.375rem", width: "auto" }}
            />
          </a>

          {/* Disclaimer + Copyright */}
          <div className="mt-4">
            <p className="text-sm text-black">
              This independent TEDx event is operated under license from{" "}
              <a
                href="https://www.ted.com/"
                className="!underline underline-offset-4"
              >
                TED
              </a>
              .
            </p>

            <p className="text-sm text-black">
              © 2026{" "}
              <a
                href="https://inspirecolumbia.org/"
                className="!underline underline-offset-4"
              >
                Inspire Columbia Inc.
              </a>
              , a 501(c)3 nonprofit. All rights reserved.
            </p>
          </div>
          <br></br>

          {/* Social Icons */}
          <div className="mt-10 w-full px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center text-black transition hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <br></br>

          {/* Links */}
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-black">
            <Link
              to="/about-ted"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              About TED
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              to="/about"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              About Us
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              to="/support"
              className="underline underline-offset-4 hover:text-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <br></br>
      </div>
    </footer>
  );
}
