import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "../assets/sea/SKI_6818.jpg";
import studioImg from "../assets/studio/SKI_6886.jpg";
import gardenImg from "../assets/garden/SKI_6829.jpg";
import seaImg from "../assets/sea/SKI_6785.jpg";
import spinalongaImg from "../assets/spinalonga.jpg";
import plakaImg from "../assets/plaka.jpg";
import cafeFront from "@/assets/cafe/cafe-wide.jpg.asset.json";
import cafeTerrace from "@/assets/cafe/photo_2026-06-03_20-59-48.jpg.asset.json";
import cafeStreet from "@/assets/cafe/photo_2026-06-03_20-59-49.jpg.asset.json";
import cafeInside from "@/assets/cafe/photo_2026-06-03_20-59-51.jpg.asset.json";
import cafeBreakfast from "@/assets/cafe/breakfast-platter.jpg.asset.json";
import { useT, THtml, type DictKey } from "@/lib/i18n";

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
  const { t } = useT();
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-primary">
      <img
        src={heroImg}
        alt="Sea view from Athina Villas terrace"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" aria-hidden />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 text-[oklch(0.97_0.012_85)]">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 animate-fadeup opacity-90">
          {t("hero.kicker")}
        </p>
        <h1 className="font-serif text-[4rem] md:text-[8rem] leading-[0.95] font-light animate-fadeup delay-200">
          Athina <span className="italic">Villas</span>
        </h1>
        <p className="mt-8 max-w-md text-lg md:text-xl font-light leading-relaxed opacity-90 animate-fadeup delay-400">
          {t("hero.sub")}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-fadeup delay-600">
          <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="bg-[oklch(0.97_0.012_85)] text-primary px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-primary-foreground transition">
            {t("hero.cta.book")}
          </a>
          <a href="#rooms" className="border border-[oklch(0.97_0.012_85/0.7)] px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-[oklch(0.97_0.012_85/0.1)] transition">
            {t("hero.cta.explore")}
          </a>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  const { t } = useT();
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("welcome.kicker")}</p>
          <THtml k="welcome.title" as="h2" className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary" />
        </div>
        <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>{t("welcome.p1")}</p>
          <p>{t("welcome.p2")}</p>
          <div className="flex items-baseline gap-3 pt-4">
            <span className="font-serif text-6xl text-accent">{t("welcome.bignum")}</span>
            <span className="text-sm uppercase tracking-[0.2em] text-primary">{t("welcome.bignum.label")}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px mt-20 md:mt-32 bg-border">
        {([
          ["welcome.stat1.a","welcome.stat1.b","welcome.stat1.c"],
          ["welcome.stat2.a","welcome.stat2.b","welcome.stat2.c"],
          ["welcome.stat3.a","welcome.stat3.b","welcome.stat3.c"],
        ] as [DictKey,DictKey,DictKey][]).map(([a,b,c]) => (
          <div key={a} className="bg-background p-10 md:p-12">
            <p className="font-serif text-3xl md:text-4xl text-primary">
              {t(a)} <span className="text-muted-foreground italic text-2xl">{t(b)}</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t(c)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rooms() {
  const { t } = useT();
  const rooms = [
    { img: studioImg, size: "30 m²", guests: t("room.studio.meta").split(" · ")[1] ?? "2", name: t("room.studio.name"), tag: t("rooms.studio.tag"), to: "/rooms/studio" as const },
    { img: gardenImg, size: "50 m²", guests: t("room.garden.meta").split(" · ")[1] ?? "4", name: t("room.garden.short"), tag: t("rooms.garden.tag"), to: "/rooms/garden-view" as const },
    { img: seaImg, size: "90 m²", guests: t("room.sea.meta").split(" · ")[1] ?? "4–5", name: t("room.sea.short"), tag: t("rooms.sea.tag"), to: "/rooms/sea-view" as const },
  ];
  return (
    <section id="rooms" className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">{t("rooms.kicker")}</p>
            <THtml k="rooms.title" as="h2" className="font-serif text-5xl md:text-7xl leading-[1.05]" />
          </div>
          <p className="max-w-md text-base md:text-lg opacity-80 leading-relaxed">
            {t("rooms.sub")}
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
  const { t } = useT();
  return (
    <section id="facilities" className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <img src={spinalongaImg} alt="Spinalonga island fortress across the bay from Plaka" loading="lazy" width={1920} height={1100} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-xl text-[oklch(0.97_0.012_85)]">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("spin.kicker")}</p>
          <THtml k="spin.title" as="h2" className="font-serif text-5xl md:text-7xl leading-[1.05]" />
          <p className="mt-8 text-lg leading-relaxed opacity-90">
            {t("spin.body")}
          </p>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useT();
  const stats: [string, DictKey][] = [
    ["100m", "loc.stats.beach"],
    ["30m", "loc.stats.spin"],
    ["5km", "loc.stats.elounda"],
    ["10km", "loc.stats.agios"],
  ];
  return (
    <section id="location" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <img src={plakaImg} alt="Plaka village at sunset, with Elounda bay" loading="lazy" width={1200} height={1500} className="w-full h-auto object-cover aspect-[4/5]" />
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-background border border-border p-8 max-w-xs">
            <p className="font-serif italic text-2xl text-primary leading-snug">
              {t("loc.quote")}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{t("loc.quoteAttr")}</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("loc.kicker")}</p>
          <THtml k="loc.title" as="h2" className="font-serif text-5xl md:text-6xl leading-[1.05] text-primary" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
            {t("loc.body")}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-y-10 gap-x-6">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-5xl text-primary">{n}</dt>
                <dd className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{t(l)}</dd>
              </div>
            ))}
          </dl>

          <Link to="/location" className="inline-block mt-12 text-sm uppercase tracking-[0.3em] text-primary border-b border-accent pb-1 hover:text-accent transition">
            {t("loc.discover")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useT();
  const reviews = [
    { quote: t("rev.q1"), name: t("rev.n1"), title: t("rev.t1"), stars: 5 },
    { quote: t("rev.q2"), name: t("rev.guest"), title: t("rev.t2"), stars: 5 },
    { quote: t("rev.q3"), name: t("rev.guest"), title: t("rev.t3"), stars: 5 },
  ];
  return (
    <section id="reviews" className="py-24 md:py-40 px-6 md:px-16 bg-[oklch(0.97_0.012_85)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">{t("rev.kicker")}</p>
            <THtml k="rev.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          </div>
          <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("rev.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {reviews.map((r) => (
            <figure key={r.title} className="bg-background p-10 md:p-12 flex flex-col">
              <div className="flex gap-1 text-accent text-lg mb-6" aria-label={`${r.stars} stars`}>
                {Array.from({ length: r.stars }).map((_, i) => (<span key={i}>★</span>))}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">{r.title}</h3>
              <blockquote className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-primary">{r.name}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g189416-d2543474-Reviews-Athina_Villas-Elounda_Lasithi_Prefecture_Crete.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition"
          >
            {t("rev.viewAll")}
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g189416-d2543474-Reviews-Athina_Villas-Elounda_Lasithi_Prefecture_Crete.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition"
          >
            {t("rev.followTa")}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  const { t } = useT();
  return (
    <section id="find-us" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("find.kicker")}</p>
          <THtml k="find.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
            {t("find.body")}
          </p>
          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">{t("find.phone")}</span>
              +30 28410 41342
            </p>
            <p>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">{t("find.email")}</span>
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
            {t("find.fb")}
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
  const { t } = useT();
  return (
    <section id="book" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden bg-primary text-[oklch(0.97_0.012_85)]">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("cta.kicker")}</p>
        <THtml k="cta.title" as="h2" className="font-serif text-5xl md:text-7xl leading-[1.05]" />
        <p className="mt-8 text-lg md:text-xl opacity-85 leading-relaxed">
          {t("cta.body")}
        </p>
        <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="inline-block mt-12 bg-[oklch(0.97_0.012_85)] text-primary px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-primary-foreground transition">
          {t("hero.cta.book")}
        </a>
      </div>
    </section>
  );
}

function CafeCarousel() {
  const images = [
    { src: cafeFront.url, alt: "The Island café-snack — full view of the building and terrace" },
    { src: cafeBreakfast.url, alt: "Traditional Cretan breakfast platter with cheese, olives, tomato, cucumber and rusks" },
    { src: cafeTerrace.url, alt: "Shaded pergola terrace at The Island café" },
    { src: cafeInside.url, alt: "Inside The Island café — bar and counter" },
    { src: cafeStreet.url, alt: "Plaka street view from The Island café" },
  ];
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden">
      <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button onClick={prev} aria-label="Previous photo" className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary w-10 h-10 flex items-center justify-center transition backdrop-blur-sm">←</button>
      <button onClick={next} aria-label="Next photo" className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary w-10 h-10 flex items-center justify-center transition backdrop-blur-sm">→</button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to photo ${i + 1}`} className={`w-2 h-2 rounded-full transition ${i === index ? "bg-primary" : "bg-primary/30"}`} />
        ))}
      </div>
    </div>
  );
}

function Cafe() {
  const { t } = useT();
  return (
    <section id="cafe" className="py-24 md:py-40 px-6 md:px-16 bg-[oklch(0.97_0.012_85)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end mb-16 md:mb-20">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("cafe.kicker")}</p>
            <THtml k="cafe.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          </div>
          <div className="md:col-span-6">
            <THtml k="cafe.body" as="p" className="text-base md:text-lg text-muted-foreground leading-relaxed" />
          </div>
        </div>

        <CafeCarousel />
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
      <Cafe />
      <Location />
      <Reviews />
      <FindUs />
      <CTA />
      <SiteFooter />
    </main>
  );
}
