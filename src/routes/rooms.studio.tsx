import { createFileRoute } from "@tanstack/react-router";
import { RoomDetail } from "@/components/room-detail";
import studio from "@/assets/room-studio.jpg";
import garden from "@/assets/room-garden.jpg";
import sea from "@/assets/room-sea.jpg";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/rooms/studio")({
  component: () => (
    <RoomDetail
      name="Studio"
      tagline="An intimate retreat for two, with a private balcony and a glimpse of the Cretan coastline."
      hero={studio}
      gallery={[studio, breakfast, garden, sea]}
      size="30 m²"
      capacity="2 Guests"
      view="Sea / Balcony"
      about="This 2-person apartment opens onto a private balcony, with some units offering a patio or sea view. It is finished with air conditioning and a ceiling fan, satellite flat-screen TV, and a kitchenette equipped with a kettle, fridge, electric hobs, coffee maker and full kitchenware."
      sleeping="1 Double Bed"
      amenities={[
        "Air Conditioning","Fan","Satellite TV","Flat-screen TV","Cable Channels","Streaming Service",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Table",
        "Sofa","Sofa Bed","Desk","Safety Deposit Box","Iron","Heating",
        "Wardrobe","Dressing Room","Tile/Marble Floor","Private Entrance","Patio","Outdoor Furniture",
        "Socket Near Bed","Clothes Rack","Linen","Extra Long Beds","Cleaning Products","Children's High Chair",
      ]}
      related={[
        { name: "Garden View", to: "/rooms/garden-view", img: garden, meta: "50 m² · 4 Guests" },
        { name: "Sea View", to: "/rooms/sea-view", img: sea, meta: "90 m² · 4–5 Guests" },
        { name: "Plaka & beyond", to: "/location", img: breakfast, meta: "Discover the village" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Studio · Athina Villas — Plaka, Crete" },
      { name: "description", content: "An intimate 30 m² studio for two in Plaka, Crete — private balcony, kitchenette, steps from the sea." },
    ],
  }),
});
