import { Link } from "@tanstack/react-router";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { RoomGallery } from "./room-gallery";
import { useT } from "@/lib/i18n";

export interface RoomDetailProps {
  name: string;
  tagline: string;
  hero: string;
  gallery: string[];
  size: string;
  capacity: string;
  view: string;
  about: string;
  sleeping: string;
  amenities: string[];
  related: { name: string; to: string; img: string; meta: string }[];
}

export function RoomDetail(p: RoomDetailProps) {
  const { t } = useT();
  return (
    <main className="bg-background">
      <SiteNav tone="light" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden bg-primary">
        <div
          className="absolute inset-0 animate-kenburns"
          style={{ backgroundImage: `url(${p.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-20 text-[oklch(0.97_0.012_85)]">
          <p className="text-xs uppercase tracking-[0.4em] mb-5 opacity-90 animate-fadeup">{t("rd.kicker")}</p>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light animate-fadeup delay-200">
            {p.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-90 animate-fadeup delay-400">
            {p.tagline}
          </p>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-border">
          {[
            [t("rd.spec.size"), p.size],
            [t("rd.spec.cap"), p.capacity],
            [t("rd.spec.view"), p.view],
          ].map(([k, v]) => (
            <div key={k} className="px-6 md:px-12 py-10 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</p>
              <p className="font-serif text-3xl md:text-4xl text-primary mt-2">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About + sidebar */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("rd.about")}</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-primary mb-8">
              {t("rd.aboutTitle")}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{p.about}</p>

            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {[
                [t("rd.sleeping"), p.sleeping],
                [t("rd.bathroom"), t("rd.bathroomV")],
                [t("rd.parking"), t("rd.parkingV")],
                [t("rd.smoking"), t("rd.smokingV")],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="md:sticky md:top-28 border border-border bg-card p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{t("rd.checkAvail")}</p>
              <p className="font-serif text-3xl text-primary mt-3 leading-snug">
                {t("rd.reserve")} <em>{p.name}</em>
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {t("rd.submitDates")}
              </p>
              <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer"
                className="mt-6 block text-center bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition"
              >
                {t("rd.bookThis")}
              </a>
              <p className="mt-4 text-[11px] text-muted-foreground text-center">
                stay@athinavillas.gr · +30 28410 00000
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("rd.gallery")}</p>
        <RoomGallery images={p.gallery} roomName={p.name} />
      </section>

      {/* Amenities */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("rd.amenitiesTitle")}</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">{t("rd.amenitiesH")}</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-sm opacity-90">
            {p.amenities.map((a) => (
              <li key={a} className="flex items-center gap-3 border-b border-[oklch(0.97_0.012_85/0.12)] pb-3">
                <span className="text-accent">✦</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">{t("rd.other")}</h2>
          <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="hidden md:inline text-xs uppercase tracking-[0.3em] text-accent border-b border-accent pb-1">
            {t("rd.bookNow")}
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {p.related.map((r) => (
            <Link key={r.to} to={r.to} className="group block">
              <div className="relative overflow-hidden aspect-[4/5] mb-5">
                <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary flex items-baseline justify-between">
                {r.name}
                <span className="text-accent text-base transition-transform group-hover:translate-x-2">→</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.meta}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
