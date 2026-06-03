import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "../assets/sea/SKI_6818.jpg";
import studioImg from "../assets/studio/SKI_6886.jpg";
import gardenImg from "../assets/garden/SKI_6829.jpg";
import seaImg from "../assets/sea/SKI_6785.jpg";
import spinalongaImg from "../assets/spinalonga.jpg";
import plakaImg from "../assets/plaka.jpg";
import cafeFront from "@/assets/cafe/photo_2026-06-03_20-59-46.jpg.asset.json";
import cafeTerrace from "@/assets/cafe/photo_2026-06-03_20-59-48.jpg.asset.json";
import cafeStreet from "@/assets/cafe/photo_2026-06-03_20-59-49.jpg.asset.json";
import cafeInside from "@/assets/cafe/photo_2026-06-03_20-59-51.jpg.asset.json";



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
      {/* Full-bleed hero image */}
      <img
        src={heroImg}
        alt="Sea view from Athina Villas terrace"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />


      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" aria-hidden />

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
          <a href="https://spinalonga.book-onlinenow.net/mobile/index.aspx?Page=0&nocountip=999.999.999.999" target="_blank" rel="noopener noreferrer" className="bg-[oklch(0.97_0.012_85)] text-primary px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-primary-foreground transition">
            Book Your Stay
          </a>
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
          ["Free Wi-Fi", "& café breakfast", "Delicious breakfast served at our café, The Island"],
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
          <img src={plakaImg} alt="Plaka village at sunset, with Elounda bay" loading="lazy" width={1200} height={1500} className="w-full h-auto object-cover aspect-[4/5]" />
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-background border border-border p-8 max-w-xs">
            <p className="font-serif italic text-2xl text-primary leading-snug">
              "Breakfast at their café tasted of figs, honey and the morning sea."
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

function Reviews() {
  const reviews = [
    {
      quote: "This accommodation is exactly what we were looking for. Relaxing and peaceful. Perfectly located for my research as an author. Our host was welcoming, helpful and friendly. Breakfast was the best and our apartment was clean, comfortable and spacious.",
      name: "Neelie W.",
      meta: "Tripadvisor · May 2022",
      title: "Great place to stay",
      stars: 5,
    },
    {
      quote: "I stayed 3 nights at the wonderful Athina Villa's in May '21. It is a lovely accommodation with a typically Greek welcome; Kyrie Manoli was friendly, kind and really helpful. The rooms are great with sea views to Spinalonga.",
      name: "Tripadvisor guest",
      meta: "Tripadvisor · May 2021",
      title: "Beautiful Plaka & Athina Villa's",
      stars: 5,
    },
    {
      quote: "Spent four nights here with friends to celebrate my 50th birthday. We stayed in the 2-bedroom apartment — really clean and spacious, with a wonderful balcony and a sea view.",
      name: "Tripadvisor guest",
      meta: "Tripadvisor",
      title: "Wonderful",
      stars: 5,
    },
  ];
  return (
    <section id="reviews" className="py-24 md:py-40 px-6 md:px-16 bg-[oklch(0.97_0.012_85)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Guest stories</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Loved by <em>travellers</em>.
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            A few words from the people who have already made Athina Villas their Cretan home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {reviews.map((r) => (
            <figure key={r.title} className="bg-background p-10 md:p-12 flex flex-col">
              <div className="flex gap-1 text-accent text-lg mb-6" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">{r.title}</h3>
              <blockquote className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-primary">{r.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{r.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 md:mt-16 flex justify-center">
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g189416-d2543474-Reviews-Athina_Villas-Elounda_Lasithi_Prefecture_Crete.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition"
          >
            View all reviews on Tripadvisor
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  return (
    <section id="find-us" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Find us</p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
            On the bay of <em>Mirabello</em>.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
            Plaka, Lassithi 72053, Crete, Greece — directly opposite Spinalonga island, 100 metres from the shore.
          </p>
          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">Phone</span>
              +30 28410 41342
            </p>
            <p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">Email</span>
              athina-villas@hotmail.com
            </p>
          </div>
          <a
            href="https://www.facebook.com/AthinaVillasElounda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z"/>
            </svg>
            Follow us on Facebook
          </a>
        </div>
        <div className="aspect-square overflow-hidden border border-border">
          <iframe
            title="Map of Athina Villas, Plaka, Crete"
            src="https://www.google.com/maps?q=35.298874,25.727545&hl=en&z=15&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
        <a href="https://spinalonga.book-onlinenow.net/mobile/index.aspx?Page=0&nocountip=999.999.999.999" target="_blank" rel="noopener noreferrer" className="inline-block mt-12 bg-[oklch(0.97_0.012_85)] text-primary px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-primary-foreground transition">
          Book Your Stay
        </a>
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
      <Reviews />
      <FindUs />
      <CTA />
      <SiteFooter />
    </main>
  );
}
