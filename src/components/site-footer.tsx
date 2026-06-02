import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-[oklch(0.18_0.02_220)] text-[oklch(0.85_0.01_85)] py-16 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-[oklch(0.97_0.012_85)]">
            Athina <span className="text-accent">·</span> Villas
          </p>
          <p className="mt-4 text-sm opacity-70 max-w-sm leading-relaxed">
            Plaka, Lassithi, 72053 Crete, Greece. Opposite Spinalonga island.
          </p>
          <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.25em]">
            <Link to="/rooms/studio" className="opacity-70 hover:opacity-100 hover:text-accent">Studio</Link>
            <Link to="/rooms/garden-view" className="opacity-70 hover:opacity-100 hover:text-accent">Garden</Link>
            <Link to="/rooms/sea-view" className="opacity-70 hover:opacity-100 hover:text-accent">Sea View</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
          <p className="text-sm opacity-80">athina-villas@hotmail.com</p>
          <p className="text-sm opacity-80 mt-1">+30 28410 41342</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Visit</p>
          <Link to="/location" className="block text-sm opacity-80 hover:opacity-100">Location</Link>
          <a href="https://spinalonga.book-onlinenow.net/mobile/index.aspx?Page=0&nocountip=999.999.999.999" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 mt-1 hover:opacity-100">Book a stay</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[oklch(0.97_0.012_85/0.1)] flex flex-col md:flex-row justify-between text-xs opacity-60">
        <p>© {new Date().getFullYear()} Athina Villas. All rights reserved.</p>
        <p>Crafted in Crete.</p>
      </div>
    </footer>
  );
}
