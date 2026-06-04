import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

type Tone = "light" | "dark";

const rooms = [
  { label: "Studio", meta: "30 m² · 2 Guests", to: "/rooms/studio" as const },
  { label: "Apartment with Garden View", meta: "50 m² · 4 Guests", to: "/rooms/garden-view" as const },
  { label: "Apartment with Sea View", meta: "90 m² · 4–5 Guests", to: "/rooms/sea-view" as const },
];

const links = [
  { label: "Home", to: "/" as const },
  { label: "Facilities", to: "/facilities" as const },
  { label: "Location", to: "/location" as const },
  { label: "Book", to: "/book" as const },
];

export function SiteNav({ tone = "dark" }: { tone?: Tone }) {
  const [scrolled, setScrolled] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const overlay = tone === "light";
  const solid = !overlay || scrolled;

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenRooms(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenRooms(false), 150);
  };

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
        <li>
          <Link
            to="/"
            className="opacity-80 hover:opacity-100 transition"
            activeProps={{ className: "opacity-100 text-accent" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
        </li>

        {/* Rooms dropdown */}
        <li className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
          <button
            type="button"
            onClick={() => setOpenRooms((v) => !v)}
            className="opacity-80 hover:opacity-100 transition flex items-center gap-1.5 uppercase tracking-[0.22em]"
            aria-haspopup="menu"
            aria-expanded={openRooms}
          >
            Rooms
            <span className={`text-[10px] transition-transform ${openRooms ? "rotate-180" : ""}`}>▾</span>
          </button>

          <div
            className={[
              "absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[340px] transition-all duration-200",
              openRooms ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none",
            ].join(" ")}
            role="menu"
          >
            <div className="bg-background border border-border shadow-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent px-5 pt-5 pb-2">Accommodation</p>
              <ul className="pb-2">
                {rooms.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      onClick={() => setOpenRooms(false)}
                      className="block px-5 py-3 hover:bg-muted transition group"
                      activeProps={{ className: "bg-muted" }}
                    >
                      <span className="font-serif text-lg text-primary block group-hover:text-accent transition">
                        {r.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {r.meta}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer"
                onClick={() => setOpenRooms(false)}
                className="block text-center text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground py-3 hover:bg-accent hover:text-accent-foreground transition"
              >
                Reserve a room
              </a>
            </div>
          </div>
        </li>

        {links.slice(1).map((l) => (
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

      <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer"
        className={[
          "hidden md:inline-block px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition border",
          solid
            ? "border-primary hover:bg-primary hover:text-primary-foreground"
            : "border-[oklch(0.97_0.012_85/0.5)] hover:bg-[oklch(0.97_0.012_85)] hover:text-primary",
        ].join(" ")}
      >
        Reserve
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block w-6 h-px bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden fixed inset-x-0 top-[64px] bg-background border-b border-border text-primary transition-all duration-300 origin-top",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible",
        ].join(" ")}
      >
        <div className="px-6 py-6 space-y-1">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm uppercase tracking-[0.25em] border-b border-border">Home</Link>
          <div className="py-3 border-b border-border">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">Rooms</p>
            {rooms.map((r) => (
              <Link key={r.to} to={r.to} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 font-serif text-lg">
                {r.label} <span className="text-xs text-muted-foreground">· {r.meta}</span>
              </Link>
            ))}
          </div>
          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="block py-3 text-sm uppercase tracking-[0.25em] border-b border-border">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
