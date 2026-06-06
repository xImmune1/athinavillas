import { createFileRoute } from "@tanstack/react-router";
import { RoomDetail } from "@/components/room-detail";
import studio from "@/assets/room-studio.jpg";
import sea from "@/assets/room-sea.jpg";
import breakfast from "@/assets/breakfast.jpg";
import g1 from "@/assets/garden/SKI_6829.jpg";
import g2 from "@/assets/garden/SKI_6832.jpg";
import g3 from "@/assets/garden/SKI_6835.jpg";
import g4 from "@/assets/garden/SKI_6842.jpg";
import g5 from "@/assets/garden/SKI_6857.jpg";
import g6 from "@/assets/garden/SKI_6860.jpg";
import g7 from "@/assets/garden/SKI_6868.jpg";
import g8 from "@/assets/garden/SKI_6871.jpg";
import g9 from "@/assets/garden/SKI_6873.jpg";
import g10 from "@/assets/garden/SKI_6881.jpg";
import { useT } from "@/lib/i18n";

function GardenPage() {
  const { t } = useT();
  return (
    <RoomDetail
      name={t("room.garden.short")}
      tagline={t("rd.garden.tag")}
      hero={g1}
      gallery={[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10]}
      size="50 m²"
      capacity={t("rd.garden.cap")}
      view={t("rd.garden.view")}
      about={t("rd.garden.about")}
      sleeping={t("rd.garden.sleeping")}
      amenities={[
        "Air Conditioning","Fan","Satellite TV","Flat-screen TV","Garden View","Balcony",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Area",
        "Sofa","Sofa Bed","Wardrobe","Safety Deposit Box","Iron","Heating",
        "Tile/Marble Floor","Private Entrance","Outdoor Furniture","Linen","Towels","Free Wi-Fi",
        "Hairdryer","Toiletries","Cleaning Products","Children's High Chair","Free Parking","Non-smoking",
      ]}
      related={[
        { name: t("room.studio.name"), to: "/rooms/studio", img: studio, meta: t("room.studio.meta") },
        { name: t("room.sea.short"), to: "/rooms/sea-view", img: sea, meta: t("room.sea.meta") },
        { name: t("rd.plakaBeyond"), to: "/location", img: breakfast, meta: t("rd.plakaBeyondMeta") },
      ]}
    />
  );
}

export const Route = createFileRoute("/rooms/garden-view")({
  component: GardenPage,
  head: () => ({
    meta: [
      { title: "Garden View · Athina Villas — Plaka, Crete" },
      { name: "description", content: "A 50 m² apartment for four opening onto lush gardens, just steps from Plaka beach." },
    ],
  }),
});
