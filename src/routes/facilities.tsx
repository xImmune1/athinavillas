import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import cafeFront from "@/assets/cafe/cafe-wide.jpg.asset.json";
import cafeBreakfast from "@/assets/cafe/breakfast-platter.jpg.asset.json";
import spinalongaImg from "@/assets/spinalonga.jpg";
import gardenImg from "@/assets/garden/SKI_6829.jpg";
import { useT, THtml, type DictKey } from "@/lib/i18n";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
  head: () => ({
    meta: [
      { title: "Facilities · Athina Villas — Plaka, Crete" },
      { name: "description", content: "Everything we offer at Athina Villas: kitchenettes, delicious breakfast at our café The Island, free Wi-Fi & parking, air conditioning, and concierge for Spinalonga." },
    ],
  }),
});

type K = DictKey;

const groups: { title: K; items: K[] }[] = [
  {
    title: "fac.group1",
    items: [
      "fac.item.ac", "fac.item.tv", "fac.item.stream", "fac.item.kitchen", "fac.item.fridge",
      "fac.item.kettle", "fac.item.dining", "fac.item.wardrobe", "fac.item.iron",
      "fac.item.safe", "fac.item.floor", "fac.item.entrance",
    ],
  },
  {
    title: "fac.group2",
    items: ["fac.item.linen","fac.item.sofabed","fac.item.ensuite","fac.item.towels","fac.item.hair","fac.item.socket","fac.item.heat","fac.item.curtains"],
  },
  {
    title: "fac.group3",
    items: ["fac.item.balcony","fac.item.views","fac.item.outfurn","fac.item.spinview","fac.item.quiet","fac.item.beach100"],
  },
  {
    title: "fac.group4",
    items: ["fac.item.cafebreak","fac.item.wifi","fac.item.parking","fac.item.conc","fac.item.walk","fac.item.clean","fac.item.high","fac.item.nosmoke"],
  },
];

function FacilitiesPage() {
  const { t } = useT();

  const highlights = [
    { tag: t("fac.hl1.tag"), title: t("fac.hl1.title"), body: t("fac.hl1.body"), img: cafeFront.url },
    { tag: t("fac.hl2.tag"), title: t("fac.hl2.title"), body: t("fac.hl2.body"), img: spinalongaImg },
    { tag: t("fac.hl3.tag"), title: t("fac.hl3.title"), body: t("fac.hl3.body"), img: gardenImg },
  ];

  const houseRules: [K, K][] = [
    ["fac.house.checkin","fac.house.checkinV"],
    ["fac.house.checkout","fac.house.checkoutV"],
    ["fac.house.children","fac.house.childrenV"],
    ["fac.house.pets","fac.house.petsV"],
    ["fac.house.smoke","fac.house.smokeV"],
    ["fac.house.pay","fac.house.payV"],
    ["fac.house.lang","fac.house.langV"],
    ["fac.house.cancel","fac.house.cancelV"],
  ];

  return (
    <main className="bg-background">
      <SiteNav tone="dark" />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-5">{t("fac.kicker")}</p>
        <THtml k="fac.title" as="h1" className="font-serif text-5xl md:text-8xl text-primary leading-[0.95]" />
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t("fac.body")}
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
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">{t("fac.fullList")}</p>
              <h2 className="font-serif text-5xl md:text-6xl">{t("fac.amenities")}</h2>
            </div>
            <p className="max-w-md text-base opacity-80 leading-relaxed">
              {t("fac.fullSub")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="font-serif text-2xl md:text-3xl mb-6 pb-4 border-b border-[oklch(0.97_0.012_85/0.2)]">
                  {t(g.title)}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm opacity-90">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>{t(i)}</span>
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
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("fac.house.kicker")}</p>
            <THtml k="fac.house.title" as="h2" className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]" />
          </div>
          <dl className="md:col-span-7 grid sm:grid-cols-2 gap-y-10 gap-x-10">
            {houseRules.map(([k, v]) => (
              <div key={k} className="border-t border-border pt-5">
                <dt className="text-[10px] uppercase tracking-[0.3em] text-accent">{t(k)}</dt>
                <dd className="mt-2 font-serif text-2xl text-primary">{t(v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-[oklch(0.97_0.012_85)] py-24 md:py-32 px-6 md:px-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">{t("fac.cta.kicker")}</p>
        <h2 className="font-serif text-5xl md:text-6xl max-w-3xl mx-auto leading-[1.05]">
          {t("fac.cta.title")}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/rooms/sea-view" className="border border-[oklch(0.97_0.012_85/0.6)] px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-[oklch(0.97_0.012_85/0.1)] transition">
            {t("fac.cta.browse")}
          </Link>
          <a href="https://spinalonga.book-onlinenow.net/" target="_blank" rel="noopener noreferrer" className="bg-[oklch(0.97_0.012_85)] text-primary px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition">
            {t("fac.cta.book")}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
