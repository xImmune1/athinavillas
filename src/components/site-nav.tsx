import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Tone = "light" | "dark";

const links = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms/sea-view" },
  { label: "Location", to: "/location" },
  { label: "Book", to: "/book" },
];

export function SiteNav({ tone = "dark" }: { tone?: Tone }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const overlay = tone === "light";
  const solid = !overlay || scrolled;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 md:py-5 flex items-center justify-between transition-colors duration-500",
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border text-primary"
          : "text-[oklch(0.97_0.012_85)]",
      ].join(" ")}
    >
      <Link to="/" className="font-serif text-2xl tracking-wide">
        Athina<span className="text-accent"> · </span>Villas
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.22em] font-light">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="opacity-80 hover:opacity-100 transition"
              activeProps={{ className: "opacity-100 text-accent" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/book"
        className={[
          "hidden md:inline-block px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition border",
          solid
            ? "border-primary hover:bg-primary hover:text-primary-foreground"
            : "border-[oklch(0.97_0.012_85/0.5)] hover:bg-[oklch(0.97_0.012_85)] hover:text-primary",
        ].join(" ")}
      >
        Reserve
      </Link>
    </nav>
  );
}
