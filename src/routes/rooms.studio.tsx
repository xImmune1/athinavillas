import { createFileRoute } from "@tanstack/react-router";
import { RoomDetail } from "@/components/room-detail";
import garden from "@/assets/room-garden.jpg";
import sea from "@/assets/room-sea.jpg";
import breakfast from "@/assets/breakfast.jpg";
import s1 from "@/assets/studio/SKI_6886.jpg";
import s2 from "@/assets/studio/SKI_6887.jpg";
import s3 from "@/assets/studio/SKI_6888.jpg";
import s4 from "@/assets/studio/SKI_6893.jpg";
import s5 from "@/assets/studio/SKI_6898.jpg";
import s6 from "@/assets/studio/SKI_6899.jpg";
import { useT } from "@/lib/i18n";

function StudioPage() {
  const { t } = useT();
  return (
    <RoomDetail
      name={t("room.studio.name")}
      tagline={t("rd.studio.tag")}
      hero={s1}
      gallery={[s1, s2, s3, s4, s5, s6]}
      size="30 m²"
      capacity={t("rd.studio.cap")}
      view={t("rd.studio.view")}
      about={t("rd.studio.about")}
      sleeping={t("rd.studio.sleeping")}
      amenities={[
        "Air Conditioning","Fan","Satellite TV","Flat-screen TV","Cable Channels","Streaming Service",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Table",
        "Sofa","Sofa Bed","Desk","Safety Deposit Box","Iron","Heating",
        "Wardrobe","Dressing Room","Tile/Marble Floor","Private Entrance","Patio","Outdoor Furniture",
        "Socket Near Bed","Clothes Rack","Linen","Extra Long Beds","Cleaning Products","Children's High Chair",
      ]}
      related={[
        { name: t("room.garden.short"), to: "/rooms/garden-view", img: garden, meta: t("room.garden.meta") },
        { name: t("room.sea.short"), to: "/rooms/sea-view", img: sea, meta: t("room.sea.meta") },
        { name: t("rd.plakaBeyond"), to: "/location", img: breakfast, meta: t("rd.plakaBeyondMeta") },
      ]}
    />
  );
}

export const Route = createFileRoute("/rooms/studio")({
  component: StudioPage,
  head: () => ({
    meta: [
      { title: "Studio · Athina Villas — Plaka, Crete" },
      { name: "description", content: "An intimate 30 m² studio for two in Plaka, Crete — private balcony, kitchenette, steps from the sea." },
    ],
  }),
});
