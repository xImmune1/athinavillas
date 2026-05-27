import { createFileRoute } from "@tanstack/react-router";
import { RoomDetail } from "@/components/room-detail";
import studio from "@/assets/room-studio.jpg";
import garden from "@/assets/room-garden.jpg";
import sea from "@/assets/room-sea.jpg";
import spinalonga from "@/assets/spinalonga.jpg";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/rooms/sea-view")({
  component: () => (
    <RoomDetail
      name="Sea View"
      tagline="Our signature 90 m² apartment — panoramic Spinalonga views, two separate bedrooms, the Cretan Sea at your feet."
      hero={sea}
      gallery={[sea, spinalonga, breakfast, garden]}
      size="90 m²"
      capacity="4–5 Guests"
      view="Cretan Sea & Spinalonga"
      about="This 4–5 person apartment opens onto a private balcony with a sweeping view of the Cretan Sea and Spinalonga island. With two separate bedrooms, air conditioning, a flat-screen satellite TV, and a kitchenette with electric kettle, hobs, fridge and full kitchenware, it is our most generous space — designed for families and slow, sun-soaked weeks."
      sleeping="Bedroom 1: 1 Large Double · Bedroom 2: 1 Large Double or 2 Singles"
      amenities={[
        "Sea View","Spinalonga View","Air Conditioning","Fan","Satellite TV","Flat-screen TV",
        "Cable Channels","Streaming Service","Two Bedrooms","Balcony","Patio","Outdoor Furniture",
        "Kitchenette","Refrigerator","Stovetop","Kitchenware","Coffee Maker","Dining Table",
        "Sofa","Sofa Bed","Desk","Safety Deposit Box","Iron","Heating",
        "Wardrobe","Dressing Room","Tile/Marble Floor","Private Entrance","Free Wi-Fi","Free Parking",
      ]}
      related={[
        { name: "Studio", to: "/rooms/studio", img: studio, meta: "30 m² · 2 Guests" },
        { name: "Garden View", to: "/rooms/garden-view", img: garden, meta: "50 m² · 4 Guests" },
        { name: "Plaka & beyond", to: "/location", img: spinalonga, meta: "Discover the village" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Sea View · Athina Villas — Plaka, Crete" },
      { name: "description", content: "A 90 m² apartment with panoramic Cretan Sea and Spinalonga views in Plaka, Crete." },
    ],
  }),
});
