import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/tedx-logo.png.asset.json";


const links = [
  { to: "/", label: "Home" },
  { to: "/speakers", label: "Speakers" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" aria-label="TEDxCongaree Vista" className="flex items-center">
          <img src={logo.url} alt="TEDxCongaree Vista" className="h-7 md:h-9 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/70 hover:text-primary transition"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>


        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80 border-b border-border/60"
              >
                {l.label}
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}
