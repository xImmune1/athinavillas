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
          <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="block text-sm opacity-80 mt-1 hover:opacity-100">Book a stay</a>
          <a
            href="https://www.facebook.com/AthinaVillasElounda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Athina Villas on Facebook"
            className="group mt-5 inline-flex items-center gap-3 border border-[oklch(0.97_0.012_85/0.2)] px-4 py-2.5 text-[10px] uppercase tracking-[0.3em] opacity-90 hover:opacity-100 hover:border-accent hover:text-accent transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z"/>
            </svg>
            Follow us
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[oklch(0.97_0.012_85/0.1)] flex flex-col md:flex-row justify-between text-xs opacity-60">
        <p>© {new Date().getFullYear()} Athina Villas. All rights reserved.</p>
        <p>Crafted in Crete.</p>
      </div>
    </footer>
  );
}
