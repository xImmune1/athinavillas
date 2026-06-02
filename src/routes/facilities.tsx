import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import breakfast from "@/assets/breakfast.jpg";
import sea from "@/assets/room-sea.jpg";
import garden from "@/assets/room-garden.jpg";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
  head: () => ({
    meta: [
      { title: "Facilities · Athina Villas — Plaka, Crete" },
      { name: "description", content: "Everything we offer at Athina Villas: kitchenettes, daily breakfast, free Wi-Fi & parking, air conditioning, and concierge for Spinalonga." },
    ],
  }),
});

const groups = [
  {
    title: "In every apartment",
    items: [
      "Air conditioning & ceiling fan",
      "Flat-screen satellite TV",
      "Streaming services",
      "Fully equipped kitchenette",
      "Refrigerator & electric hobs",
      "Kettle, coffee maker & kitchenware",
      "Dining table & sofa area",
      "Wardrobe / dressing room",
      "Iron & ironing board",
      "Safety deposit box",
      "Tile / marble flooring",
      "Private entrance",
    ],
  },
  {
    title: "Bedrooms & bathroom",
    items: [
      "Premium linen & extra-long beds",
      "Sofa bed for additional guests",
      "Private en-suite bathroom",
      "Daily towels & toiletries",
      "Hairdryer",
      "Socket near bed",
      "Heating for cooler evenings",
      "Blackout curtains",
    ],
  },
  {
    title: "Outdoor & views",
    items: [
      "Private balcony or patio",
      "Sea or garden views",
      "Outdoor furniture",
      "Direct view of Spinalonga (Sea View apt)",
      "Quiet, low-rise neighbourhood",
      "Steps to Plaka beach (100 m)",
    ],
  },
  {
    title: "Services & extras",
    items: [
      "Daily breakfast — continental or full English",
      "Free Wi-Fi throughout",
      "Free public parking nearby",
      "Concierge for Spinalonga boat tickets",
      "Tavern, market & bus stop within walking distance",
      "Cleaning products & hand sanitiser",
      "Children's high chair on request",
      "Non-smoking throughout",
    ],
  },
];

const highlights = [
  { tag: "Breakfast", title: "Figs, honey & the morning sea.", body: "Continental spreads or a full English — served daily, with the catch of the day available on request.", img: breakfast },
  { tag: "The view", title: "Spinalonga, front row.", body: "Sea-view apartments open onto an unbroken panorama of the Cretan Sea and Spinalonga island.", img: sea },
  { tag: "The garden", title: "Lemon, olive & bougainvillea.", body: "Mature Mediterranean gardens surround the villa — quiet corners to read, sketch, or simply sit.", img: garden },
];

function FacilitiesPage() {
  return (
    <main className="bg-background">
      <SiteNav tone="dark" />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-5">Facilities</p>
        <h1 className="font-serif text-5xl md:text-8xl text-primary leading-[0.95]">
          Everything, <em>considered</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          From the linen on the bed to the coffee on the hob — Athina Villas is finished with the small comforts that turn a stay into a slow, lived-in week.
        </p>
      </section>

      {/* Highlights */}
      <section className="px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {highlights.map((h) => (
            <article key={h.title} className="group">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img src={h.img} alt={h.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">{h.tag}</p>
              <h3 className="font-serif text-3xl text-primary leading-tight">{h.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Full list */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">The full list</p>
              <h2 className="font-serif text-5xl md:text-6xl">Amenities & services.</h2>
            </div>
            <p className="max-w-md text-base opacity-80 leading-relaxed">
              Most amenities are standard across all three apartments. View-specific features are noted on each room page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="font-serif text-2xl md:text-3xl mb-6 pb-4 border-b border-[oklch(0.97_0.012_85/0.2)]">
                  {g.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm opacity-90">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House rules */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">House notes</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Quiet, simple, <em>generous</em>.
            </h2>
          </div>
          <dl className="md:col-span-7 grid sm:grid-cols-2 gap-y-10 gap-x-10">
            {[
              ["Check-in", "From 14:00"],
              ["Check-out", "By 11:00"],
              ["Children", "Welcome at all ages"],
              ["Pets", "Not permitted"],
              ["Smoking", "Outdoor terraces only"],
              ["Payment", "Cash or card on arrival"],
              ["Languages", "Greek · English · German"],
              ["Cancellation", "Free up to 7 days prior"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-5">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-accent">{k}</dt>
                <dd className="mt-2 font-serif text-2xl text-primary">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Ready when you are</p>
        <h2 className="font-serif text-5xl md:text-6xl max-w-3xl mx-auto leading-[1.05]">
          Choose a room — we'll handle the rest.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/rooms/sea-view" className="border border-[oklch(0.97_0.012_85/0.6)] px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[oklch(0.97_0.012_85/0.1)] transition">
            Browse rooms
          </Link>
          <a href="https://spinalonga.book-onlinenow.net/mobile/index.aspx?Page=0&nocountip=999.999.999.999" target="_blank" rel="noopener noreferrer" className="bg-[oklch(0.97_0.012_85)] text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition">
            Book your stay
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
