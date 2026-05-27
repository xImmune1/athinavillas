import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "../assets/hero-plaka.jpg";
import studioImg from "../assets/room-studio.jpg";
import gardenImg from "../assets/room-garden.jpg";
import seaImg from "../assets/room-sea.jpg";
import spinalongaImg from "../assets/spinalonga.jpg";
import breakfastImg from "../assets/breakfast.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Athina Villas — Quiet luxury in Plaka, Crete" },
      {
        name: "description",
        content:
          "Athina Villas in Plaka, Lassithi — opposite Spinalonga island, 100m from the beach. Studios and sea-view apartments for a slow Cretan stay.",
      },
    ],
  }),
});

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-primary">
      <div
        className="absolute inset-0 animate-kenburns"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 text-[oklch(0.97_0.012_85)]">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 animate-fadeup opacity-90">
          Plaka · Elounda · Crete
        </p>
        <h1 className="font-serif text-[4rem] md:text-[8rem] leading-[0.95] font-light animate-fadeup delay-200">
          Athina <span className="italic">Villas</span>
        </h1>
        <p className="mt-8 max-w-md text-lg md:text-xl font-light leading-relaxed opacity-90 animate-fadeup delay-400">
          Where the Cretan Sea meets the legend of Spinalonga — a sanctuary of
          quiet luxury, just one hundred metres from the shore.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fadeup delay-600">
          <Link to="/book" className="bg-[oklch(0.97_0.012_85)] text-primary px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-primary-foreground transition">
            Book Your Stay
          </Link>
          <Link to="/rooms/sea-view" className="border border-[oklch(0.97_0.012_85/0.7)] px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[oklch(0.97_0.012_85/0.1)] transition">
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Welcome</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary">
            Opposite the legendary <em>Spinalonga</em>.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            Athina Villas is tucked into the fishing village of Plaka, in Lassithi — directly across the bay from Spinalonga and just one hundred metres from the pebbled shore. Each apartment is finished with a well-equipped kitchenette, soft linens, and Wi-Fi that simply works.
          </p>
          <p>
            A few steps from your door: a mini market, family taverns, the bus stop, and the small port where the boats leave for Spinalonga. Parking, like the morning light, is free.
          </p>
          <div className="flex items-baseline gap-3 pt-4">
            <span className="font-serif text-6xl text-accent">30m</span>
            <span className="text-sm uppercase tracking-[0.2em] text-primary">to Spinalonga port</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px mt-20 md:mt-32 bg-border">
        {[
          ["100m", "to the beach", "Steps from Plaka's pristine shore"],
          ["Spinalonga", "in full view", "The legendary island, right across the bay"],
          ["Free Wi-Fi", "& breakfast", "Continental or full English, daily"],
        ].map(([a, b, c]) => (
          <div key={a} className="bg-background p-10 md:p-12">
            <p className="font-serif text-3xl md:text-4xl text-primary">
              {a} <span className="text-muted-foreground italic text-2xl">{b}</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rooms() {
  const rooms = [
    { img: studioImg, size: "30 m²", guests: "2 Guests", name: "Studio", tag: "Intimate retreat for two", to: "/rooms/studio" as const },
    { img: gardenImg, size: "50 m²", guests: "4 Guests", name: "Garden View", tag: "Lush seclusion with garden panorama", to: "/rooms/garden-view" as const },
    { img: seaImg, size: "90 m²", guests: "4–5 Guests", name: "Sea View", tag: "Spinalonga & the Cretan Sea at your feet", to: "/rooms/sea-view" as const },
  ];
  return (
    <section id="rooms" className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Accommodation</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">Choose your <em>retreat</em></h2>
          </div>
          <p className="max-w-md text-base md:text-lg opacity-80 leading-relaxed">
            From intimate studios to panoramic sea-view apartments — each space designed for the slow, sun-soaked Cretan way of living.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {rooms.map((r) => (
            <Link key={r.name} to={r.to} className="group block">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img src={r.img} alt={r.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] opacity-90 flex gap-4">
                  <span>{r.size}</span><span>·</span><span>{r.guests}</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl flex items-baseline justify-between">
                {r.name}
                <span className="text-accent text-xl transition-transform group-hover:translate-x-2">→</span>
              </h3>
              <p className="mt-2 text-sm opacity-70">{r.tag}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spinalonga() {
  return (
    <section id="facilities" className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <img src={spinalongaImg} alt="Spinalonga island fortress across the bay from Plaka" loading="lazy" width={1920} height={1100} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl text-[oklch(0.97_0.012_85)]">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Across the bay</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">A fortress, <em>a story</em>, a horizon.</h2>
          <p className="mt-8 text-lg leading-relaxed opacity-90">
            Five centuries of Venetian stone watch over a sea so clear it forgets it has a bottom. Walk down to the port, step onto a boat, and the island is yours in fifteen minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const stats = [
    ["100m", "to Beach"],
    ["30m", "to Spinalonga Port"],
    ["5km", "to Elounda"],
    ["10km", "to Agios Nikolaos"],
  ];
  return (
    <section id="location" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <img src={breakfastImg} alt="Greek breakfast on a sunny terrace" loading="lazy" width={1200} height={1500} className="w-full h-auto object-cover aspect-[4/5]" />
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-background border border-border p-8 max-w-xs">
            <p className="font-serif italic text-2xl text-primary leading-snug">
              "Breakfast tasted of figs, honey and the morning sea."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">— Guest, August 2025</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Location</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary">
            The heart of <em>Plaka</em>.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
            A charming fishing village with traditional taverns, crystal-clear beaches, and the gateway to Spinalonga — all at your doorstep.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-y-10 gap-x-6">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-5xl text-primary">{n}</dt>
                <dd className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>

          <Link to="/location" className="inline-block mt-12 text-sm uppercase tracking-[0.3em] text-primary border-b border-accent pb-1 hover:text-accent transition">
            Discover Plaka →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="book" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden bg-primary text-[oklch(0.97_0.012_85)]">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Reserve</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          Begin your <em>Cretan</em> story.
        </h2>
        <p className="mt-8 text-lg md:text-xl opacity-85 leading-relaxed">
          Breakfast with a view. Evenings by the sea. Days steeped in history.
        </p>
        <Link to="/book" className="inline-block mt-12 bg-[oklch(0.97_0.012_85)] text-primary px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-primary-foreground transition">
          Book Your Stay
        </Link>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <SiteNav tone="light" />
      <Hero />
      <Welcome />
      <Rooms />
      <Spinalonga />
      <Location />
      <CTA />
      <SiteFooter />
    </main>
  );
}
