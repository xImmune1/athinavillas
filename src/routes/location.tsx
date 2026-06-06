import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import spinalonga from "@/assets/spinalonga.jpg";
import cafePhoto from "@/assets/cafe/photo_2026-06-03_20-59-48.jpg.asset.json";
import sea from "@/assets/sea/SKI_6788.jpg";
import { useT, THtml, type DictKey } from "@/lib/i18n";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Location · Athina Villas — Plaka, Lassithi, Crete" },
      { name: "description", content: "Plaka is a fishing village on Mirabello Bay, opposite Spinalonga island and 70 km from Heraklion airport." },
    ],
  }),
});

type K = DictKey;
const reasons: [K, K][] = [
  ["locp.r1.t","locp.r1.d"],
  ["locp.r2.t","locp.r2.d"],
  ["locp.r3.t","locp.r3.d"],
  ["locp.r4.t","locp.r4.d"],
  ["locp.r5.t","locp.r5.d"],
  ["locp.r6.t","locp.r6.d"],
];

const distances: [string, K][] = [
  ["100μ", "locp.dist.beach"],
  ["30μ", "locp.dist.port"],
  ["5χλμ", "locp.dist.elounda"],
  ["10χλμ", "locp.dist.agios"],
  ["13χλμ", "locp.dist.plaka"],
  ["70χλμ", "locp.dist.airport"],
];

function LocationPage() {
  const { t, lang } = useT();
  const unitsEn = ["100m","30m","5km","10km","13km","70km"];
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
          <p className="text-xs uppercase tracking-[0.4em] mb-5 opacity-90 animate-fadeup">{t("locp.discover")}</p>
          <h1 className="font-serif text-6xl md:text-9xl leading-[0.95] font-light animate-fadeup delay-200">
            {t("locp.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl font-light opacity-90 animate-fadeup delay-400">
            {t("locp.hero")}
          </p>
        </div>
      </section>

      {/* Why Plaka */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("locp.why.kicker")}</p>
            <THtml k="locp.why.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map(([kt, kd]) => (
              <div key={kt} className="border-t border-border pt-5">
                <h3 className="font-serif text-2xl text-primary">{t(kt)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(kd)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("locp.dist.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">{t("locp.dist.title")}</h2>
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
            {distances.map(([n, kl], i) => (
              <div key={kl}>
                <dt className="font-serif text-5xl md:text-6xl text-accent">{lang === "el" ? n : unitsEn[i]}</dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.25em] opacity-80">{t(kl)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("find.kicker")}</p>
            <THtml k="find.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
              {t("locp.find.body")}
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <p><span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">{t("find.email")}</span>{"athina-villas@hotmail.com"}</p>
              <p><span className="text-[10px] uppercase tracking-[0.3em] text-accent mr-3">{t("find.phone")}</span>{"+30 28410 41342"}</p>
            </div>
            <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition">
              {t("locp.reserve")}
            </a>
          </div>
          <div className="aspect-square overflow-hidden border border-border">
            <iframe
              title="Map of Athina Villas, Plaka, Crete"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.7175%2C35.2939%2C25.7375%2C35.3039&layer=mapnik&marker=35.298874%2C25.727545"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Live webcam */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end mb-12 md:mb-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("liveCam.label")}</p>
            <THtml k="liveCam.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          </div>
          <div className="md:col-span-7">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("liveCam.body")}
            </p>
          </div>
        </div>
        <a
          href="https://www.skylinewebcams.com/en/webcam/ellada/crete/lasithi/spinalonga.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden border border-border group"
        >
          <img
            src="https://embed.skylinewebcams.com/img/3952.jpg"
            alt="Live webcam of Spinalonga — Lasithi, Crete"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="inline-flex items-center gap-2 text-[oklch(0.97_0.012_85)] text-xs uppercase tracking-[0.3em]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              {t("liveCam.cta")}
            </span>
          </div>
        </a>
      </section>

      {/* Inspiration strip */}
      <section className="grid md:grid-cols-2">
        <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] overflow-hidden">
          <img src={cafePhoto.url} alt="Breakfast served at our café, The Island, in Plaka" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/3] md:aspect-auto md:h-[60vh] overflow-hidden">
          <img src={sea} alt="Sea view from Athina Villas" className="w-full h-full object-cover" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
