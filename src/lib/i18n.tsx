import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "el";

type Dict = Record<string, { en: string; el: string }>;

// Natural — not literal — translations.
export const dict: Dict = {
  // ---------- Nav ----------
  "nav.home": { en: "Home", el: "Αρχική" },
  "nav.rooms": { en: "Rooms", el: "Δωμάτια" },
  "nav.facilities": { en: "Facilities", el: "Παροχές" },
  "nav.location": { en: "Location", el: "Τοποθεσία" },
  "nav.book": { en: "Book", el: "Κράτηση" },
  "nav.reserve": { en: "Reserve", el: "Κάντε κράτηση" },
  "nav.reserveRoom": { en: "Reserve a room", el: "Κάντε κράτηση" },
  "nav.accommodation": { en: "Accommodation", el: "Διαμονή" },
  "nav.toggleMenu": { en: "Toggle menu", el: "Μενού" },

  // Room labels (nav + sidebars)
  "room.studio.name": { en: "Studio", el: "Στούντιο" },
  "room.studio.meta": { en: "30 m² · 2 Guests", el: "30 τ.μ. · 2 άτομα" },
  "room.garden.name": { en: "Apartment with Garden View", el: "Διαμέρισμα με θέα στον κήπο" },
  "room.garden.short": { en: "Garden View", el: "Θέα στον Κήπο" },
  "room.garden.meta": { en: "50 m² · 4 Guests", el: "50 τ.μ. · 4 άτομα" },
  "room.sea.name": { en: "Apartment with Sea View", el: "Διαμέρισμα με θέα στη θάλασσα" },
  "room.sea.short": { en: "Sea View", el: "Θέα στη Θάλασσα" },
  "room.sea.meta": { en: "90 m² · 4–5 Guests", el: "90 τ.μ. · 4–5 άτομα" },

  // ---------- Hero (home) ----------
  "hero.kicker": { en: "Plaka · Elounda · Crete", el: "Πλάκα · Ελούντα · Κρήτη" },
  "hero.title": { en: "Athina <span class='italic'>Villas</span>", el: "Athina <span class='italic'>Villas</span>" },
  "hero.sub": {
    en: "Where the Cretan Sea meets the legend of Spinalonga — a sanctuary of quiet luxury, just one hundred metres from the shore.",
    el: "Εκεί όπου το Κρητικό Πέλαγος συναντά τον θρύλο της Σπιναλόγκας — ένα ήσυχο καταφύγιο, μόλις εκατό μέτρα από την παραλία.",
  },
  "hero.cta.book": { en: "Book Your Stay", el: "Κάντε κράτηση" },
  "hero.cta.explore": { en: "Explore Rooms", el: "Δείτε τα δωμάτια" },

  // ---------- Welcome ----------
  "welcome.kicker": { en: "Welcome", el: "Καλώς ήρθατε" },
  "welcome.title": {
    en: "Opposite the legendary <em>Spinalonga</em>.",
    el: "Απέναντι από τη θρυλική <em>Σπιναλόγκα</em>.",
  },
  "welcome.p1": {
    en: "Athina Villas is tucked into the fishing village of Plaka, in Lassithi — directly across the bay from Spinalonga and just one hundred metres from the pebbled shore. Each apartment is finished with a well-equipped kitchenette, soft linens, and Wi-Fi that simply works.",
    el: "Οι Athina Villas βρίσκονται στο γραφικό ψαροχώρι της Πλάκας, στον νομό Λασιθίου — ακριβώς απέναντι από τη Σπιναλόγκα και μόλις εκατό μέτρα από την παραλία με τα βότσαλα. Κάθε διαμέρισμα είναι εξοπλισμένο με πλήρη κουζίνα, καλαίσθητα λευκά είδη και αξιόπιστο Wi-Fi.",
  },
  "welcome.p2": {
    en: "A few steps from your door: a mini market, family taverns, the bus stop, and the small port where the boats leave for Spinalonga. Parking, like the morning light, is free.",
    el: "Λίγα μόλις βήματα μακριά θα βρείτε μίνι μάρκετ, παραδοσιακές ταβέρνες, στάση λεωφορείου και το μικρό λιμάνι απ’ όπου ξεκινούν τα καραβάκια για τη Σπιναλόγκα. Το πάρκινγκ, όπως και το φως του πρωινού, είναι δωρεάν.",
  },
  "welcome.bignum": { en: "30m", el: "30μ" },
  "welcome.bignum.label": { en: "to Spinalonga port", el: "από το λιμάνι της Σπιναλόγκας" },

  "welcome.stat1.a": { en: "100m", el: "100μ" },
  "welcome.stat1.b": { en: "to the beach", el: "από την παραλία" },
  "welcome.stat1.c": { en: "Steps from Plaka's pristine shore", el: "Λίγα βήματα από την πεντακάθαρη ακτή της Πλάκας" },
  "welcome.stat2.a": { en: "Spinalonga", el: "Σπιναλόγκα" },
  "welcome.stat2.b": { en: "in full view", el: "σε πρώτο πλάνο" },
  "welcome.stat2.c": { en: "The legendary island, right across the bay", el: "Το ιστορικό νησί, ακριβώς απέναντι" },
  "welcome.stat3.a": { en: "Free Wi-Fi", el: "Δωρεάν Wi-Fi" },
  "welcome.stat3.b": { en: "& café breakfast", el: "& πρωινό στο café" },
  "welcome.stat3.c": { en: "Delicious breakfast served at our café, The Island", el: "Νόστιμο πρωινό στο café μας, The Island" },

  // ---------- Rooms section ----------
  "rooms.kicker": { en: "Accommodation", el: "Διαμονή" },
  "rooms.title": {
    en: "Choose your <em>retreat</em>",
    el: "Διαλέξτε το <em>καταφύγιό</em> σας",
  },
  "rooms.sub": {
    en: "From intimate studios to panoramic sea-view apartments — each space designed for the slow, sun-soaked Cretan way of living.",
    el: "Από φιλόξενα στούντιο μέχρι ευρύχωρα διαμερίσματα με πανοραμική θέα στη θάλασσα — κάθε χώρος σχεδιασμένος για τις ήρεμες, ηλιόλουστες μέρες της Κρήτης.",
  },
  "rooms.studio.tag": { en: "Intimate retreat for two", el: "Φιλόξενο καταφύγιο για δύο" },
  "rooms.garden.tag": { en: "Lush seclusion with garden panorama", el: "Ηρεμία και πράσινο με θέα στον κήπο" },
  "rooms.sea.tag": { en: "Spinalonga & the Cretan Sea at your feet", el: "Η Σπιναλόγκα και το Κρητικό Πέλαγος μπροστά σας" },

  // ---------- Spinalonga band ----------
  "spin.kicker": { en: "Across the bay", el: "Απέναντι από τον κόλπο" },
  "spin.title": { en: "A fortress, <em>a story</em>, a horizon.", el: "Ένα κάστρο, <em>μια ιστορία</em>, ένας ορίζοντας." },
  "spin.body": {
    en: "Five centuries of Venetian stone watch over a sea so clear it forgets it has a bottom. Walk down to the port, step onto a boat, and the island is yours in fifteen minutes.",
    el: "Πέντε αιώνες βενετσιάνικη πέτρα στέκουν φρουροί πάνω από μια θάλασσα τόσο διάφανη που ξεχνά πως έχει βυθό. Κατεβαίνετε στο λιμάνι, παίρνετε το καραβάκι και σε ένα τέταρτο το νησί είναι δικό σας.",
  },

  // ---------- Location preview ----------
  "loc.kicker": { en: "Location", el: "Τοποθεσία" },
  "loc.title": { en: "The heart of <em>Plaka</em>.", el: "Στην καρδιά της <em>Πλάκας</em>." },
  "loc.body": {
    en: "A charming fishing village with traditional taverns, crystal-clear beaches, and the gateway to Spinalonga — all at your doorstep.",
    el: "Ένα γοητευτικό ψαροχώρι με παραδοσιακές ταβέρνες, καταγάλανες παραλίες και την πύλη προς τη Σπιναλόγκα — όλα στα πόδια σας.",
  },
  "loc.discover": { en: "Discover Plaka →", el: "Γνωρίστε την Πλάκα →" },

  "loc.stats.beach": { en: "to Beach", el: "από την παραλία" },
  "loc.stats.spin": { en: "to Spinalonga Port", el: "από το λιμάνι Σπιναλόγκας" },
  "loc.stats.elounda": { en: "to Elounda", el: "από την Ελούντα" },
  "loc.stats.agios": { en: "to Agios Nikolaos", el: "από τον Άγιο Νικόλαο" },

  // ---------- Reviews ----------
  "rev.kicker": { en: "Guest stories", el: "Λόγια επισκεπτών" },
  "rev.title": { en: "Loved by <em>travellers</em>.", el: "Αγαπημένο των <em>ταξιδιωτών</em>." },
  "rev.sub": {
    en: "A few words from the people who have already made Athina Villas their Cretan home.",
    el: "Λίγα λόγια από όσους έχουν ήδη κάνει τις Athina Villas το κρητικό τους σπίτι.",
  },
  "rev.q1": {
    en: "This accommodation is exactly what we were looking for. Relaxing and peaceful. Perfectly located for my research as an author. Our host was welcoming, helpful and friendly. Breakfast was the best and our apartment was clean, comfortable and spacious.",
    el: "Ακριβώς αυτό που ψάχναμε. Ήρεμο και χαλαρωτικό, σε ιδανική τοποθεσία για τη συγγραφική μου έρευνα. Ο οικοδεσπότης μας ήταν φιλόξενος και πάντα πρόθυμος. Το πρωινό ήταν εξαιρετικό και το διαμέρισμα καθαρό, άνετο και ευρύχωρο.",
  },
  "rev.t1": { en: "Great place to stay", el: "Υπέροχη διαμονή" },
  "rev.m1": { en: "Tripadvisor · May 2022", el: "Tripadvisor · Μάιος 2022" },
  "rev.n1": { en: "Neelie W.", el: "Neelie W." },

  "rev.q2": {
    en: "I stayed 3 nights at the wonderful Athina Villa's in May '21. It is a lovely accommodation with a typically Greek welcome; Kyrie Manoli was friendly, kind and really helpful. The rooms are great with sea views to Spinalonga.",
    el: "Έμεινα τρεις νύχτες στις υπέροχες Athina Villas τον Μάιο του ’21. Μια όμορφη διαμονή με γνήσια ελληνική φιλοξενία· ο κύριος Μανώλης ήταν εξυπηρετικός, ευγενικός και πραγματικά βοηθητικός. Τα δωμάτια είναι εξαιρετικά, με θέα στη Σπιναλόγκα.",
  },
  "rev.t2": { en: "Beautiful Plaka & Athina Villa's", el: "Πανέμορφη Πλάκα & Athina Villas" },
  "rev.m2": { en: "Tripadvisor · May 2021", el: "Tripadvisor · Μάιος 2021" },
  "rev.guest": { en: "Tripadvisor guest", el: "Επισκέπτης Tripadvisor" },

  "rev.q3": {
    en: "Spent four nights here with friends to celebrate my 50th birthday. We stayed in the 2-bedroom apartment — really clean and spacious, with a wonderful balcony and a sea view.",
    el: "Περάσαμε τέσσερις νύχτες εδώ με φίλους για τα 50ά μου γενέθλια. Μείναμε στο διαμέρισμα με τα δύο υπνοδωμάτια — πολύ καθαρό και ευρύχωρο, με υπέροχο μπαλκόνι και θέα στη θάλασσα.",
  },
  "rev.t3": { en: "Wonderful", el: "Υπέροχα" },
  "rev.m3": { en: "Tripadvisor", el: "Tripadvisor" },

  "rev.viewAll": { en: "View all reviews on Tripadvisor", el: "Δείτε όλες τις κριτικές στο Tripadvisor" },
  "rev.followTa": { en: "Follow us on Tripadvisor", el: "Ακολουθήστε μας στο Tripadvisor" },

  // ---------- Find us ----------
  "find.kicker": { en: "Find us", el: "Πού θα μας βρείτε" },
  "find.title": { en: "On the bay of <em>Mirabello</em>.", el: "Στον κόλπο του <em>Μιραμπέλλου</em>." },
  "find.body": {
    en: "Plaka, Lassithi 72053, Crete, Greece — directly opposite Spinalonga island, 100 metres from the shore.",
    el: "Πλάκα, Λασίθι 72053, Κρήτη — ακριβώς απέναντι από τη Σπιναλόγκα, 100 μέτρα από την παραλία.",
  },
  "find.phone": { en: "Phone", el: "Τηλέφωνο" },
  "find.email": { en: "Email", el: "Email" },
  "find.fb": { en: "Follow us on Facebook", el: "Ακολουθήστε μας στο Facebook" },

  // ---------- CTA ----------
  "cta.kicker": { en: "Reserve", el: "Κράτηση" },
  "cta.title": { en: "Begin your <em>Cretan</em> story.", el: "Ξεκινήστε τη δική σας <em>κρητική</em> ιστορία." },
  "cta.body": {
    en: "Breakfast at our café with a view. Evenings by the sea. Days steeped in history.",
    el: "Πρωινό στο café μας με θέα. Βραδιές δίπλα στη θάλασσα. Μέρες ποτισμένες με ιστορία.",
  },

  // ---------- Café ----------
  "cafe.kicker": { en: "Our café", el: "Το café μας" },
  "cafe.title": { en: "Delicious breakfast at <em>The Island</em>.", el: "Νόστιμο πρωινό στο <em>The Island</em>." },
  "cafe.body": {
    en: "Mornings begin a few steps away at our own café-snack, <em>The Island</em> — where breakfast is served fresh each day under the pergola: omelettes, puff pastry pies, club sandwiches, freshly squeezed juices, smoothies, and proper Greek coffee. Stay for lunch, an afternoon ice cream, or a sunset drink.",
    el: "Τα πρωινά ξεκινούν λίγα βήματα μακριά, στο δικό μας café-snack <em>The Island</em> — όπου σερβίρεται φρέσκο πρωινό κάθε μέρα κάτω από την πέργκολα: ομελέτες, σπιτικές πίτες, club sandwiches, φρεσκοστυμμένοι χυμοί, smoothies και αυθεντικός ελληνικός καφές. Μείνετε για μεσημεριανό, ένα παγωτό το απόγευμα ή ένα ποτό στο ηλιοβασίλεμα.",
  },

  "liveCam.label": { en: "Live view", el: "Ζωντανή εικόνα" },
  "liveCam.title": { en: "Spinalonga, <em>live</em>.", el: "Σπιναλόγκα, <em>ζωντανά</em>." },
  "liveCam.body": { en: "Watch the bay in real time — boats coming and going, the changing light on the fortress, and the sea as it looks right now.", el: "Παρακολουθήστε τον κόλπο σε πραγματικό χρόνο — τα καραβάκια να έρχονται και να φεύγουν, το φως που αλλάζει πάνω στο κάστρο, και τη θάλασσα όπως είναι αυτή τη στιγμή." },
  "liveCam.cta": { en: "View live webcam", el: "Δείτε ζωντανά" },
  "home.liveCam": { en: "View Live Location", el: "Ζωντανή Θέα" },

  // ---------- Facilities page ----------
  "fac.kicker": { en: "Facilities", el: "Παροχές" },
  "fac.title": { en: "Everything, <em>considered</em>.", el: "Όλα, με <em>φροντίδα</em>." },
  "fac.body": {
    en: "From the linen on the bed to the coffee on the hob — Athina Villas is finished with the small comforts that turn a stay into a slow, lived-in week.",
    el: "Από τα λευκά είδη του κρεβατιού μέχρι τον καφέ στο μάτι — οι Athina Villas προσέχουν τις μικρές λεπτομέρειες που μετατρέπουν μια διαμονή σε μια ήρεμη, οικεία εβδομάδα.",
  },

  "fac.hl1.tag": { en: "Breakfast at our café", el: "Πρωινό στο café μας" },
  "fac.hl1.title": { en: "Breakfast at The Island.", el: "Πρωινό στο The Island." },
  "fac.hl1.body": {
    en: "Each morning, breakfast is served at our own café-snack The Island — omelettes, puff pastry pies, fresh juices and proper Greek coffee, just steps from your apartment.",
    el: "Κάθε πρωί, το πρωινό σερβίρεται στο δικό μας café-snack, The Island — ομελέτες, παραδοσιακές πίτες, φρέσκοι χυμοί και αυθεντικός ελληνικός καφές, μόλις λίγα βήματα από το διαμέρισμά σας.",
  },
  "fac.hl2.tag": { en: "The view", el: "Η θέα" },
  "fac.hl2.title": { en: "Spinalonga, front row.", el: "Σπιναλόγκα, στην πρώτη σειρά." },
  "fac.hl2.body": {
    en: "Sea-view apartments open onto an unbroken panorama of the Cretan Sea and Spinalonga island.",
    el: "Τα διαμερίσματα με θέα στη θάλασσα ανοίγονται σε αδιάκοπη πανοραμική θέα στο Κρητικό Πέλαγος και τη Σπιναλόγκα.",
  },
  "fac.hl3.tag": { en: "The garden", el: "Ο κήπος" },
  "fac.hl3.title": { en: "Lemon, olive & bougainvillea.", el: "Λεμονιές, ελιές & βουκαμβίλιες." },
  "fac.hl3.body": {
    en: "Mature Mediterranean gardens surround the villa — quiet corners to read, sketch, or simply sit.",
    el: "Μεσογειακοί κήποι περιβάλλουν τη βίλα — ήσυχες γωνιές για να διαβάσετε, να ζωγραφίσετε ή απλώς να καθίσετε.",
  },

  "fac.fullList": { en: "The full list", el: "Η πλήρης λίστα" },
  "fac.amenities": { en: "Amenities & services.", el: "Παροχές & υπηρεσίες." },
  "fac.fullSub": {
    en: "Most amenities are standard across all three apartments. View-specific features are noted on each room page.",
    el: "Οι περισσότερες παροχές είναι κοινές και στα τρία διαμερίσματα. Όσες αφορούν συγκεκριμένη θέα αναφέρονται στη σελίδα του κάθε δωματίου.",
  },

  "fac.group1": { en: "In every apartment", el: "Σε κάθε διαμέρισμα" },
  "fac.group2": { en: "Bedrooms & bathroom", el: "Υπνοδωμάτια & μπάνιο" },
  "fac.group3": { en: "Outdoor & views", el: "Εξωτερικοί χώροι & θέα" },
  "fac.group4": { en: "Services & extras", el: "Υπηρεσίες & επιπλέον" },

  "fac.item.ac": { en: "Air conditioning & ceiling fan", el: "Κλιματισμός & ανεμιστήρας οροφής" },
  "fac.item.tv": { en: "Flat-screen satellite TV", el: "Δορυφορική τηλεόραση επίπεδης οθόνης" },
  "fac.item.stream": { en: "Streaming services", el: "Υπηρεσίες streaming" },
  "fac.item.kitchen": { en: "Fully equipped kitchenette", el: "Πλήρως εξοπλισμένη κουζίνα" },
  "fac.item.fridge": { en: "Refrigerator & electric hobs", el: "Ψυγείο & ηλεκτρικές εστίες" },
  "fac.item.kettle": { en: "Kettle, coffee maker & kitchenware", el: "Βραστήρας, καφετιέρα & σκεύη κουζίνας" },
  "fac.item.dining": { en: "Dining table & sofa area", el: "Τραπεζαρία & καθιστικό με καναπέ" },
  "fac.item.wardrobe": { en: "Wardrobe / dressing room", el: "Ντουλάπα / χώρος αλλαξιάς" },
  "fac.item.iron": { en: "Iron & ironing board", el: "Σίδερο & σιδερώστρα" },
  "fac.item.safe": { en: "Safety deposit box", el: "Χρηματοκιβώτιο" },
  "fac.item.floor": { en: "Tile / marble flooring", el: "Δάπεδο πλακάκι / μάρμαρο" },
  "fac.item.entrance": { en: "Private entrance", el: "Ιδιωτική είσοδος" },

  "fac.item.linen": { en: "Premium linen & extra-long beds", el: "Ποιοτικά λευκά είδη & extra-long κρεβάτια" },
  "fac.item.sofabed": { en: "Sofa bed for additional guests", el: "Καναπές-κρεβάτι για επιπλέον άτομα" },
  "fac.item.ensuite": { en: "Private en-suite bathroom", el: "Ιδιωτικό μπάνιο en-suite" },
  "fac.item.towels": { en: "Daily towels & toiletries", el: "Καθημερινές πετσέτες & είδη μπάνιου" },
  "fac.item.hair": { en: "Hairdryer", el: "Σεσουάρ μαλλιών" },
  "fac.item.socket": { en: "Socket near bed", el: "Πρίζα δίπλα στο κρεβάτι" },
  "fac.item.heat": { en: "Heating for cooler evenings", el: "Θέρμανση για τις πιο δροσερές βραδιές" },
  "fac.item.curtains": { en: "Blackout curtains", el: "Κουρτίνες συσκότισης" },

  "fac.item.balcony": { en: "Private balcony or patio", el: "Ιδιωτικό μπαλκόνι ή βεράντα" },
  "fac.item.views": { en: "Sea or garden views", el: "Θέα στη θάλασσα ή στον κήπο" },
  "fac.item.outfurn": { en: "Outdoor furniture", el: "Έπιπλα εξωτερικού χώρου" },
  "fac.item.spinview": { en: "Direct view of Spinalonga (Sea View apt)", el: "Άμεση θέα στη Σπιναλόγκα (διαμέρισμα Sea View)" },
  "fac.item.quiet": { en: "Quiet, low-rise neighbourhood", el: "Ήσυχη γειτονιά με χαμηλά κτίρια" },
  "fac.item.beach100": { en: "Steps to Plaka beach (100 m)", el: "Λίγα βήματα από την παραλία της Πλάκας (100 μ.)" },

  "fac.item.cafebreak": { en: "Delicious breakfast served at our café, The Island", el: "Νόστιμο πρωινό στο café μας, The Island" },
  "fac.item.wifi": { en: "Free Wi-Fi throughout", el: "Δωρεάν Wi-Fi παντού" },
  "fac.item.parking": { en: "Free public parking nearby", el: "Δωρεάν δημόσιο πάρκινγκ κοντά" },
  "fac.item.conc": { en: "Concierge for Spinalonga boat tickets", el: "Εξυπηρέτηση για εισιτήρια στη Σπιναλόγκα" },
  "fac.item.walk": { en: "Tavern, market & bus stop within walking distance", el: "Ταβέρνα, μαρκετ και στάση λεωφορείου σε απόσταση περπατήματος" },
  "fac.item.clean": { en: "Cleaning products & hand sanitiser", el: "Προϊόντα καθαρισμού & αντισηπτικό" },
  "fac.item.high": { en: "Children's high chair on request", el: "Παιδικό καρεκλάκι κατόπιν αιτήματος" },
  "fac.item.nosmoke": { en: "Non-smoking throughout", el: "Απαγορεύεται το κάπνισμα σε όλους τους χώρους" },

  "fac.house.kicker": { en: "House notes", el: "Σημειώσεις φιλοξενίας" },
  "fac.house.title": { en: "Quiet, simple, <em>generous</em>.", el: "Ήσυχα, απλά, <em>γενναιόδωρα</em>." },
  "fac.house.checkin": { en: "Check-in", el: "Άφιξη" },
  "fac.house.checkinV": { en: "From 14:00", el: "Από τις 14:00" },
  "fac.house.checkout": { en: "Check-out", el: "Αναχώρηση" },
  "fac.house.checkoutV": { en: "By 11:00", el: "Έως τις 11:00" },
  "fac.house.children": { en: "Children", el: "Παιδιά" },
  "fac.house.childrenV": { en: "Welcome at all ages", el: "Καλωσορίζονται σε όλες τις ηλικίες" },
  "fac.house.pets": { en: "Pets", el: "Κατοικίδια" },
  "fac.house.petsV": { en: "Not permitted", el: "Δεν επιτρέπονται" },
  "fac.house.smoke": { en: "Smoking", el: "Κάπνισμα" },
  "fac.house.smokeV": { en: "Outdoor terraces only", el: "Μόνο στις εξωτερικές βεράντες" },
  "fac.house.pay": { en: "Payment", el: "Πληρωμή" },
  "fac.house.payV": { en: "Cash or card on arrival", el: "Μετρητά ή κάρτα κατά την άφιξη" },
  "fac.house.lang": { en: "Languages", el: "Γλώσσες" },
  "fac.house.langV": { en: "Greek · English · German", el: "Ελληνικά · Αγγλικά · Γερμανικά" },
  "fac.house.cancel": { en: "Cancellation", el: "Ακύρωση" },
  "fac.house.cancelV": { en: "Free up to 7 days prior", el: "Δωρεάν έως 7 ημέρες πριν την άφιξη" },

  "fac.cta.kicker": { en: "Ready when you are", el: "Έτοιμοι όταν είστε" },
  "fac.cta.title": { en: "Choose a room — we'll handle the rest.", el: "Διαλέξτε δωμάτιο — αναλαμβάνουμε τα υπόλοιπα." },
  "fac.cta.browse": { en: "Browse rooms", el: "Δείτε τα δωμάτια" },
  "fac.cta.book": { en: "Book your stay", el: "Κάντε κράτηση" },

  // ---------- Location page ----------
  "locp.discover": { en: "Discover", el: "Ανακαλύψτε" },
  "locp.title": { en: "Location", el: "Τοποθεσία" },
  "locp.hero": {
    en: "Plaka, Lassithi — a fishing village on Mirabello Bay, opposite the legendary Spinalonga.",
    el: "Πλάκα, Λασίθι — ένα ψαροχώρι στον κόλπο του Μιραμπέλλου, απέναντι από τη θρυλική Σπιναλόγκα.",
  },
  "locp.why.kicker": { en: "Why Plaka", el: "Γιατί Πλάκα" },
  "locp.why.title": {
    en: "Where history, nature & Greek <em>hospitality</em> converge.",
    el: "Όπου η ιστορία, η φύση και η ελληνική <em>φιλοξενία</em> συναντιούνται.",
  },

  "locp.r1.t": { en: "Ever-clean beaches", el: "Πάντα καθαρές παραλίες" },
  "locp.r1.d": { en: "Pristine pebbled shores and picturesque coves for slow Cretan days.", el: "Πεντακάθαρες παραλίες με βότσαλο και γραφικοί όρμοι για ήρεμες κρητικές μέρες." },
  "locp.r2.t": { en: "Opposite Spinalonga", el: "Απέναντι από τη Σπιναλόγκα" },
  "locp.r2.d": { en: "Just 2 km across the bay from the historic island and its Venetian fortress.", el: "Μόλις 2 χλμ. απέναντι από το ιστορικό νησί και το βενετσιάνικο κάστρο του." },
  "locp.r3.t": { en: "Minutes from Agios Nikolaos", el: "Λίγα λεπτά από τον Άγιο Νικόλαο" },
  "locp.r3.d": { en: "20 minutes by car to Crete's most charming harbour town and nightlife.", el: "20 λεπτά με το αυτοκίνητο από τη γοητευτικότερη παραλιακή πόλη της Κρήτης και τη νυχτερινή της ζωή." },
  "locp.r4.t": { en: "Traditional taverns", el: "Παραδοσιακές ταβέρνες" },
  "locp.r4.d": { en: "A village of fishermen where the catch of the day arrives at your table.", el: "Ένα ψαροχώρι όπου το ψάρι της ημέρας έρχεται στο τραπέζι σας." },
  "locp.r5.t": { en: "Intimate & authentic", el: "Αυθεντικό και οικείο" },
  "locp.r5.d": { en: "About 300 residents — unspoiled, neighbourly, and reassuringly quiet.", el: "Περίπου 300 κάτοικοι — ανέγγιχτο, φιλικό και απολαυστικά ήσυχο." },
  "locp.r6.t": { en: "Easy connections", el: "Εύκολες μετακινήσεις" },
  "locp.r6.d": { en: "Frequent buses to Elounda, Agios Nikolaos and across the island.", el: "Συχνά δρομολόγια λεωφορείων προς Ελούντα, Άγιο Νικόλαο και όλη την Κρήτη." },

  "locp.dist.kicker": { en: "Distances", el: "Αποστάσεις" },
  "locp.dist.title": { en: "Everything, within easy reach.", el: "Όλα, σε κοντινή απόσταση." },
  "locp.dist.beach": { en: "Plaka Beach", el: "Παραλία Πλάκας" },
  "locp.dist.port": { en: "Spinalonga Port", el: "Λιμάνι Σπιναλόγκας" },
  "locp.dist.elounda": { en: "Elounda", el: "Ελούντα" },
  "locp.dist.agios": { en: "Agios Nikolaos", el: "Άγιος Νικόλαος" },
  "locp.dist.plaka": { en: "Plaka from Ag. Nikolaos", el: "Πλάκα από Άγιο Νικόλαο" },
  "locp.dist.airport": { en: "Heraklion Airport", el: "Αεροδρόμιο Ηρακλείου" },

  "locp.find.body": {
    en: "Plaka, Lassithi 72053, Crete, Greece. Opposite Spinalonga island, on the road from Elounda toward the cape.",
    el: "Πλάκα, Λασίθι 72053, Κρήτη. Απέναντι από τη Σπιναλόγκα, στον δρόμο από την Ελούντα προς το ακρωτήρι.",
  },
  "locp.reserve": { en: "Reserve your stay", el: "Κάντε κράτηση" },

  // ---------- Footer ----------
  "footer.addr": { en: "Plaka, Lassithi, 72053 Crete, Greece. Opposite Spinalonga island.", el: "Πλάκα, Λασίθι 72053, Κρήτη. Απέναντι από τη Σπιναλόγκα." },
  "footer.contact": { en: "Contact", el: "Επικοινωνία" },
  "footer.visit": { en: "Visit", el: "Επισκεφθείτε" },
  "footer.book": { en: "Book a stay", el: "Κάντε κράτηση" },
  "footer.follow": { en: "Follow us", el: "Ακολουθήστε μας" },
  "footer.rights": { en: "All rights reserved.", el: "Με την επιφύλαξη παντός δικαιώματος." },
  "footer.crafted": { en: "Crafted in Crete.", el: "Φτιαγμένο στην Κρήτη." },

  // ---------- Book page ----------
  "book.kicker": { en: "Reservations", el: "Κρατήσεις" },
  "book.title": { en: "Book your <em>stay</em>.", el: "Κάντε την <em>κράτησή</em> σας." },
  "book.intro": {
    en: "Submit your preferred dates and we will confirm availability within 24 hours. This is a request — not a binding reservation.",
    el: "Στείλτε μας τις ημερομηνίες που θέλετε και θα επιβεβαιώσουμε διαθεσιμότητα εντός 24 ωρών. Πρόκειται για αίτημα — όχι για δεσμευτική κράτηση.",
  },
  "book.thanks": { en: "Thank you", el: "Ευχαριστούμε" },
  "book.received": { en: "Your request has been received.", el: "Το αίτημά σας ελήφθη." },
  "book.reply": {
    en: "We'll reply to {email} within 24 hours with availability and a confirmation link.",
    el: "Θα απαντήσουμε στο {email} εντός 24 ωρών με τη διαθεσιμότητα και έναν σύνδεσμο επιβεβαίωσης.",
  },
  "book.replyFallback": { en: "your inbox", el: "το email σας" },
  "book.back": { en: "Back to home →", el: "Επιστροφή στην αρχική →" },

  "book.guest": { en: "Guest information", el: "Στοιχεία επισκέπτη" },
  "book.name": { en: "Full name", el: "Ονοματεπώνυμο" },
  "book.emailL": { en: "Email", el: "Email" },
  "book.phone": { en: "Phone", el: "Τηλέφωνο" },
  "book.stay": { en: "Stay details", el: "Λεπτομέρειες διαμονής" },
  "book.checkin": { en: "Check-in", el: "Άφιξη" },
  "book.checkout": { en: "Check-out", el: "Αναχώρηση" },
  "book.guests": { en: "Guests", el: "Άτομα" },
  "book.guestS": { en: "guest", el: "άτομο" },
  "book.guestsP": { en: "guests", el: "άτομα" },
  "book.room": { en: "Room preference", el: "Προτίμηση δωματίου" },
  "book.selectRoom": { en: "Select a room", el: "Επιλέξτε δωμάτιο" },
  "book.opt.studio": { en: "Studio (30 m², 2 guests)", el: "Στούντιο (30 τ.μ., 2 άτομα)" },
  "book.opt.garden": { en: "Garden View (50 m², 4 guests)", el: "Θέα στον Κήπο (50 τ.μ., 4 άτομα)" },
  "book.opt.sea": { en: "Sea View (90 m², 4–5 guests)", el: "Θέα στη Θάλασσα (90 τ.μ., 4–5 άτομα)" },
  "book.notes": { en: "Special requests", el: "Ειδικές απαιτήσεις" },
  "book.submit": { en: "Request booking", el: "Υποβολή αιτήματος" },
  "book.note": {
    en: "This is a booking request, not a confirmed reservation. We will reply within 24 hours.",
    el: "Αυτό είναι αίτημα κράτησης, όχι επιβεβαιωμένη κράτηση. Θα απαντήσουμε εντός 24 ωρών.",
  },
  "book.browse": { en: "Browse rooms", el: "Δείτε τα δωμάτια" },
  "book.viewRoom": { en: "View room →", el: "Δείτε το δωμάτιο →" },

  // ---------- Room detail (shared) ----------
  "rd.kicker": { en: "Accommodation", el: "Διαμονή" },
  "rd.spec.size": { en: "Size", el: "Έκταση" },
  "rd.spec.cap": { en: "Capacity", el: "Χωρητικότητα" },
  "rd.spec.view": { en: "View", el: "Θέα" },
  "rd.about": { en: "About this room", el: "Σχετικά με το δωμάτιο" },
  "rd.aboutTitle": { en: "A quiet corner of Crete, made for you.", el: "Μια ήσυχη γωνιά της Κρήτης, φτιαγμένη για εσάς." },
  "rd.sleeping": { en: "Sleeping", el: "Ύπνος" },
  "rd.bathroom": { en: "Bathroom", el: "Μπάνιο" },
  "rd.bathroomV": { en: "Private bathroom with towels provided.", el: "Ιδιωτικό μπάνιο με πετσέτες." },
  "rd.parking": { en: "Parking", el: "Πάρκινγκ" },
  "rd.parkingV": { en: "Free public parking nearby.", el: "Δωρεάν δημόσιο πάρκινγκ κοντά." },
  "rd.smoking": { en: "Smoking", el: "Κάπνισμα" },
  "rd.smokingV": { en: "Non-smoking accommodation.", el: "Δεν επιτρέπεται το κάπνισμα." },
  "rd.checkAvail": { en: "Check availability", el: "Δείτε διαθεσιμότητα" },
  "rd.reserve": { en: "Reserve", el: "Κρατήστε" },
  "rd.submitDates": {
    en: "Submit your dates and we'll confirm availability within 24 hours.",
    el: "Στείλτε τις ημερομηνίες σας και θα επιβεβαιώσουμε διαθεσιμότητα εντός 24 ωρών.",
  },
  "rd.bookThis": { en: "Book this room", el: "Κάντε κράτηση" },
  "rd.gallery": { en: "Gallery", el: "Φωτογραφίες" },
  "rd.amenitiesTitle": { en: "Amenities & Facilities", el: "Παροχές & Εξοπλισμός" },
  "rd.amenitiesH": { en: "Everything, considered.", el: "Όλα, με φροντίδα." },
  "rd.other": { en: "Other retreats", el: "Άλλα καταφύγια" },
  "rd.bookNow": { en: "Book now →", el: "Κάντε κράτηση →" },
  "rd.plakaBeyond": { en: "Plaka & beyond", el: "Πλάκα & γύρω" },
  "rd.plakaBeyondMeta": { en: "Discover the village", el: "Γνωρίστε το χωριό" },

  // Room-specific
  "rd.studio.tag": {
    en: "An intimate retreat for two, with a private balcony and a glimpse of the Cretan coastline.",
    el: "Ένα φιλόξενο καταφύγιο για δύο, με ιδιωτικό μπαλκόνι και μια ματιά στις κρητικές ακτές.",
  },
  "rd.studio.view": { en: "Sea / Balcony", el: "Θάλασσα / Μπαλκόνι" },
  "rd.studio.cap": { en: "2 Guests", el: "2 άτομα" },
  "rd.studio.about": {
    en: "This 2-person apartment opens onto a private balcony, with some units offering a patio or sea view. It is finished with air conditioning and a ceiling fan, satellite flat-screen TV, and a kitchenette equipped with a kettle, fridge, electric hobs, coffee maker and full kitchenware.",
    el: "Το διαμέρισμα για δύο ανοίγει σε ιδιωτικό μπαλκόνι — ορισμένες μονάδες διαθέτουν βεράντα ή θέα στη θάλασσα. Διαθέτει κλιματισμό και ανεμιστήρα οροφής, δορυφορική τηλεόραση επίπεδης οθόνης και κουζίνα με βραστήρα, ψυγείο, ηλεκτρικές εστίες, καφετιέρα και πλήρη σκεύη.",
  },
  "rd.studio.sleeping": { en: "1 Double Bed", el: "1 διπλό κρεβάτι" },

  "rd.garden.tag": {
    en: "A spacious 50 m² apartment opening onto lush gardens, with room for up to four guests.",
    el: "Ευρύχωρο διαμέρισμα 50 τ.μ. με θέα στους καταπράσινους κήπους, ιδανικό για έως τέσσερα άτομα.",
  },
  "rd.garden.view": { en: "Garden", el: "Κήπος" },
  "rd.garden.cap": { en: "4 Guests", el: "4 άτομα" },
  "rd.garden.about": {
    en: "This 4-person apartment features a private balcony overlooking the garden, two comfortable sleeping areas, and a full kitchenette. Amenities include air conditioning and a fan, satellite TV, kettle, fridge, hobs, kitchenware and coffee maker — everything you need for a long, slow Cretan stay.",
    el: "Το διαμέρισμα για τέσσερα διαθέτει ιδιωτικό μπαλκόνι με θέα στον κήπο, δύο άνετους χώρους ύπνου και πλήρη κουζίνα. Παρέχονται κλιματισμός και ανεμιστήρας, δορυφορική τηλεόραση, βραστήρας, ψυγείο, εστίες, σκεύη και καφετιέρα — όλα όσα χρειάζεστε για μια χαλαρή κρητική διαμονή.",
  },
  "rd.garden.sleeping": { en: "1 Double Bed · 2 Single Beds", el: "1 διπλό κρεβάτι · 2 μονά κρεβάτια" },

  "rd.sea.tag": {
    en: "Our signature 90 m² apartment — panoramic Spinalonga views, two separate bedrooms, the Cretan Sea at your feet.",
    el: "Το πιο εμβληματικό μας διαμέρισμα 90 τ.μ. — πανοραμική θέα στη Σπιναλόγκα, δύο ξεχωριστά υπνοδωμάτια και το Κρητικό Πέλαγος στα πόδια σας.",
  },
  "rd.sea.view": { en: "Cretan Sea & Spinalonga", el: "Κρητικό Πέλαγος & Σπιναλόγκα" },
  "rd.sea.cap": { en: "4–5 Guests", el: "4–5 άτομα" },
  "rd.sea.about": {
    en: "This 4–5 person apartment opens onto a private balcony with a sweeping view of the Cretan Sea and Spinalonga island. With two separate bedrooms, air conditioning, a flat-screen satellite TV, and a kitchenette with electric kettle, hobs, fridge and full kitchenware, it is our most generous space — designed for families and slow, sun-soaked weeks.",
    el: "Το διαμέρισμα για 4–5 άτομα ανοίγει σε ιδιωτικό μπαλκόνι με πανοραμική θέα στο Κρητικό Πέλαγος και τη Σπιναλόγκα. Με δύο ξεχωριστά υπνοδωμάτια, κλιματισμό, δορυφορική τηλεόραση και πλήρη κουζίνα με βραστήρα, εστίες, ψυγείο και σκεύη, είναι ο πιο ευρύχωρος χώρος μας — ιδανικός για οικογένειες και ήρεμες, ηλιόλουστες εβδομάδες.",
  },
  "rd.sea.sleeping": {
    en: "Bedroom 1: 1 Large Double · Bedroom 2: 1 Large Double or 2 Singles",
    el: "Υπνοδωμάτιο 1: 1 μεγάλο διπλό · Υπνοδωμάτιο 2: 1 μεγάλο διπλό ή 2 μονά",
  },

  // Quote on home location card
  "loc.quote": {
    en: "\"Breakfast at their café tasted of figs, honey and the morning sea.\"",
    el: "«Το πρωινό στο café τους είχε γεύση από σύκα, μέλι και πρωινή θάλασσα.»",
  },
  "loc.quoteAttr": { en: "— Guest, August 2025", el: "— Επισκέπτης, Αύγουστος 2025" },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = (typeof window !== "undefined" && (window.localStorage.getItem("lang") as Lang)) || null;
      if (saved === "en" || saved === "el") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l === "el" ? "el" : "en";
  };

  const t = (key: keyof typeof dict) => {
    const entry = dict[key];
    if (!entry) return String(key);
    return entry[lang] ?? entry.en;
  };

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Fallback (e.g. during SSR before provider mounts)
    return { lang: "en" as Lang, setLang: () => {}, t: (k: keyof typeof dict) => dict[k]?.en ?? String(k) };
  }
  return ctx;
}

/** Render a translation string that may contain inline HTML (em, span, etc.). */
export function THtml({
  k,
  as: As = "span",
  className,
}: {
  k: keyof typeof dict;
  as?: any;
  className?: string;
}) {
  const { t } = useT();
  const Tag: any = As;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}

export function LanguageToggle({ tone = "auto" }: { tone?: "auto" | "light" | "dark" }) {
  const { lang, setLang } = useT();
  const base = "text-[10px] uppercase tracking-[0.25em] px-1 transition";
  const active = "text-accent";
  const inactive = tone === "light" ? "opacity-70 hover:opacity-100" : "opacity-60 hover:opacity-100";
  return (
    <div className="flex items-center gap-1 select-none" aria-label="Language">
      <button type="button" onClick={() => setLang("en")} className={`${base} ${lang === "en" ? active : inactive}`} aria-pressed={lang === "en"}>
        EN
      </button>
      <span className="opacity-40 text-[10px]">/</span>
      <button type="button" onClick={() => setLang("el")} className={`${base} ${lang === "el" ? active : inactive}`} aria-pressed={lang === "el"}>
        ΕΛ
      </button>
    </div>
  );
}

export type DictKey = keyof typeof dict;
