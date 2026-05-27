import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import spinalonga from "@/assets/spinalonga.jpg";
import breakfast from "@/assets/breakfast.jpg";
import sea from "@/assets/room-sea.jpg";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Location · Athina Villas — Plaka, Lassithi, Crete" },
      { name: "description", content: "Plaka is a fishing village on Mirabello Bay, opposite Spinalonga island and 70 km from Heraklion airport." },
    ],
  }),
});

const reasons = [
  ["Ever-clean beaches", "Pristine pebbled shores and picturesque coves for slow Cretan days."],
  ["Opposite Spinalonga", "Just 2 km across the bay from the historic island and its Venetian fortress."],
  ["Minutes from Agios Nikolaos", "20 minutes by car to Crete's most charming harbour town and nightlife."],
  ["Traditional taverns", "A village of fishermen where the catch of the day arrives at your table."],
  ["Intimate & authentic", "About 300 residents — unspoiled, neighbourly, and reassuringly quiet."],
  ["Easy connections", "Frequent buses to Elounda, Agios Nikolaos and across the island."],
];

const distances = [
  ["100m", "Plaka Beach"],
  ["30m", "Spinalonga Port"],
  ["5km", "Elounda"],
  ["10km", "Agios Nikolaos"],
  ["13km", "Plaka from Ag. Nikolaos"],
  ["70km", "Heraklion Airport"],
];

function LocationPage() {
  return (
    <main className="bg-background">
      <SiteNav tone="light" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden bg-primary">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{ backgroundImage: `url(${spinalonga})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 text-[oklch(0.97_0.012_85)]">
          <p className="text-xs uppercase tracking-[0.4em] mb-5 opacity-90 animate-fadeup">Discover</p>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.95] font-light animate-fadeup delay-200">
            Location
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl font-light opacity-90 animate-fadeup delay-400">
            Plaka, Lassithi — a fishing village on Mirabello Bay, opposite the legendary Spinalonga.
          </p>
        </div>
      </section>

      {/* Why Plaka */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Why Plaka</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Where history, nature & Greek <em>hospitality</em> converge.
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map(([t, d]) => (
              <div key={t} className="border-t border-border pt-5">
                <h3 className="font-serif text-2xl text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Distances</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">Everything, within easy reach.</h2>
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
            {distances.map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-5xl md:text-6xl text-accent">{n}</dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.25em] opacity-80">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Find us</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              On the bay of <em>Mirabello</em>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
              Plaka, Lassithi 72053, Crete, Greece. Opposite Spinalonga island, on the road from Elounda toward the cape.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <p><span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">Email</span> stay@athinavillas.gr</p>
              <p><span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">Phone</span> +30 28410 00000</p>
            </div>
            <Link to="/book" className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition">
              Reserve your stay
            </Link>
          </div>
          <div className="aspect-square overflow-hidden border border-border">
            <iframe
              title="Map of Plaka, Crete"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.7250%2C35.2700%2C25.7700%2C35.3000&layer=mapnik&marker=35.2850%2C25.7470"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Inspiration strip */}
      <section className="grid md:grid-cols-2">
        <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] overflow-hidden">
          <img src={breakfast} alt="Cretan breakfast on a sunny terrace" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] overflow-hidden">
          <img src={sea} alt="Sea view from Athina Villas" className="w-full h-full object-cover" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
