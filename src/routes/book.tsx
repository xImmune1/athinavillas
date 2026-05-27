import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import studio from "@/assets/room-studio.jpg";
import garden from "@/assets/room-garden.jpg";
import sea from "@/assets/room-sea.jpg";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book Your Stay · Athina Villas" },
      { name: "description", content: "Request your dates at Athina Villas in Plaka, Crete. We confirm availability within 24 hours." },
    ],
  }),
});

const rooms = [
  { key: "studio", name: "Studio", meta: "30 m² · 2 Guests", img: studio, to: "/rooms/studio" as const },
  { key: "garden-view", name: "Garden View", meta: "50 m² · 4 Guests", img: garden, to: "/rooms/garden-view" as const },
  { key: "sea-view", name: "Sea View", meta: "90 m² · 4–5 Guests", img: sea, to: "/rooms/sea-view" as const },
];

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    checkin: "", checkout: "", guests: "2", room: "",
    notes: "",
  });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <main className="bg-background min-h-screen">
      <SiteNav tone="dark" />

      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent mb-5">Reservations</p>
        <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.05]">
          Book your <em>stay</em>.
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Submit your preferred dates and we will confirm availability within 24 hours. This is a request — not a binding reservation.
        </p>
      </section>

      <section className="px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Form */}
        <div className="lg:col-span-7 border border-border bg-card p-8 md:p-12">
          {submitted ? (
            <div className="py-16 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Thank you</p>
              <h2 className="font-serif text-4xl text-primary">Your request has been received.</h2>
              <p className="mt-6 text-muted-foreground max-w-md mx-auto">
                We'll reply to {form.email || "your inbox"} within 24 hours with availability and a confirmation link.
              </p>
              <Link to="/" className="inline-block mt-10 text-xs uppercase tracking-[0.3em] text-accent border-b border-accent pb-1">
                Back to home →
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-serif text-2xl text-primary mb-6">Guest information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Full name" required>
                    <input required value={form.name} onChange={update("name")} className={inputCls} />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" value={form.email} onChange={update("email")} className={inputCls} />
                  </Field>
                  <Field label="Phone" className="md:col-span-2">
                    <input value={form.phone} onChange={update("phone")} className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-primary mb-6">Stay details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Check-in" required>
                    <input required type="date" value={form.checkin} onChange={update("checkin")} className={inputCls} />
                  </Field>
                  <Field label="Check-out" required>
                    <input required type="date" value={form.checkout} onChange={update("checkout")} className={inputCls} />
                  </Field>
                  <Field label="Guests">
                    <select value={form.guests} onChange={update("guests")} className={inputCls}>
                      {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                    </select>
                  </Field>
                  <Field label="Room preference">
                    <select value={form.room} onChange={update("room")} className={inputCls}>
                      <option value="">Select a room</option>
                      <option value="studio">Studio (30 m², 2 guests)</option>
                      <option value="garden-view">Garden View (50 m², 4 guests)</option>
                      <option value="sea-view">Sea View (90 m², 4–5 guests)</option>
                    </select>
                  </Field>
                  <Field label="Special requests" className="md:col-span-2">
                    <textarea rows={4} value={form.notes} onChange={update("notes")} className={`${inputCls} resize-none`} />
                  </Field>
                </div>
              </div>

              <div>
                <button type="submit" className="w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition">
                  Request booking
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  This is a booking request, not a confirmed reservation. We will reply within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar rooms */}
        <aside className="lg:col-span-5 space-y-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Browse rooms</p>
          {rooms.map((r) => (
            <Link key={r.key} to={r.to} className="group flex gap-5 border border-border bg-card p-4 hover:border-accent transition">
              <div className="w-28 h-28 shrink-0 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-serif text-2xl text-primary">{r.name}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em]">{r.meta}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-accent">View room →</p>
              </div>
            </Link>
          ))}
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}

const inputCls =
  "w-full bg-transparent border-0 border-b border-border focus:border-accent focus:ring-0 focus:outline-none px-0 py-3 text-base text-foreground placeholder:text-muted-foreground transition";

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
