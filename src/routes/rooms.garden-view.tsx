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

export const Route = createFileRoute("/rooms/garden-view")({
  component: () => (
    <RoomDetail
      name="Garden View"
      tagline="A spacious 50 m² apartment opening onto lush gardens, with room for up to four guests."
      hero={g1}
      gallery={[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10]}

      size="50 m²"
      capacity="4 Guests"
      view="Garden"
      about="This 4-person apartment features a private balcony overlooking the garden, two comfortable sleeping areas, and a full kitchenette. Amenities include air conditioning and a fan, satellite TV, kettle, fridge, hobs, kitchenware and coffee maker — everything you need for a long, slow Cretan stay."
      sleeping="1 Double Bed · 2 Single Beds"
      amenities={[
        "Air Conditioning","Fan","Satellite TV","Flat-screen TV","Garden View","Balcony",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Area",
        "Sofa","Sofa Bed","Wardrobe","Safety Deposit Box","Iron","Heating",
        "Tile/Marble Floor","Private Entrance","Outdoor Furniture","Linen","Towels","Free Wi-Fi",
        "Hairdryer","Toiletries","Cleaning Products","Children's High Chair","Free Parking","Non-smoking",
      ]}
      related={[
        { name: "Studio", to: "/rooms/studio", img: studio, meta: "30 m² · 2 Guests" },
        { name: "Sea View", to: "/rooms/sea-view", img: sea, meta: "90 m² · 4–5 Guests" },
        { name: "Plaka & beyond", to: "/location", img: breakfast, meta: "Discover the village" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Garden View · Athina Villas — Plaka, Crete" },
      { name: "description", content: "A 50 m² apartment for four opening onto lush gardens, just steps from Plaka beach." },
    ],
  }),
});
