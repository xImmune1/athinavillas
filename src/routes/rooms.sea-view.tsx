import { createFileRoute } from "@tanstack/react-router";
import { RoomDetail } from "@/components/room-detail";
import studio from "@/assets/studio/SKI_6886.jpg";
import garden from "@/assets/garden/SKI_6829.jpg";
import spinalonga from "@/assets/spinalonga.jpg";
import sv1 from "@/assets/sea/SKI_6818.jpg";
import sv2 from "@/assets/sea/SKI_6785.jpg";
import sv3 from "@/assets/sea/SKI_6813.jpg";
import sv4 from "@/assets/sea/SKI_6789.jpg";
import sv5 from "@/assets/sea/SKI_6788.jpg";
import sv6 from "@/assets/sea/SKI_6791.jpg";
import sv7 from "@/assets/sea/SKI_6803.jpg";
import sv8 from "@/assets/sea/SKI_6805.jpg";
import sv9 from "@/assets/sea/SKI_6796.jpg";
import sv10 from "@/assets/sea/SKI_6810.jpg";
import { useT } from "@/lib/i18n";

function SeaPage() {
  const { t } = useT();
  return (
    <RoomDetail
      name={t("room.sea.short")}
      tagline={t("rd.sea.tag")}
      hero={sv1}
      gallery={[sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9, sv10]}
      size="90 m²"
      capacity={t("rd.sea.cap")}
      view={t("rd.sea.view")}
      about={t("rd.sea.about")}
      sleeping={t("rd.sea.sleeping")}
      amenities={[
        "Sea View","Spinalonga View","Air Conditioning","Fan","Satellite TV","Flat-screen TV",
        "Cable Channels","Streaming Service","Two Bedrooms","Balcony","Patio","Outdoor Furniture",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Table",
        "Sofa","Sofa Bed","Desk","Safety Deposit Box","Iron","Heating",
        "Wardrobe","Dressing Room","Tile/Marble Floor","Private Entrance","Free Wi-Fi","Free Parking",
      ]}
      related={[
        { name: t("room.studio.name"), to: "/rooms/studio", img: studio, meta: t("room.studio.meta") },
        { name: t("room.garden.short"), to: "/rooms/garden-view", img: garden, meta: t("room.garden.meta") },
        { name: t("rd.plakaBeyond"), to: "/location", img: spinalonga, meta: t("rd.plakaBeyondMeta") },
      ]}
    />
  );
}

export const Route = createFileRoute("/rooms/sea-view")({
  component: SeaPage,
  head: () => ({
    meta: [
      { title: "Sea View · Athina Villas — Plaka, Crete" },
      { name: "description", content: "A 90 m² apartment with panoramic Cretan Sea and Spinalonga views in Plaka, Crete." },
    ],
  }),
});
