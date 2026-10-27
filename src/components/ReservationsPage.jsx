
import { useState } from "react";

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "7:00 PM",
    guests: "2",
    occasion: "",
    notes: "",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const submitBooking = (e) => {
    e.preventDefault();

    const message = [
      "Hello! I'd like to request a table reservation.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
      `Occasion: ${form.occasion || "Not specified"}`,
      `Notes: ${form.notes || "None"}`,
      "",
      "Please confirm availability.",
    ].join("\n");

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d9685c]";

  return (
    <main className="min-h-screen bg-[#faf9f2] px-5 py-16 text-stone-900 sm:px-10 lg:px-16">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c45e52]">
          Save yourself a seat
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl">
          Your table is waiting.
        </h1>
        <p className="mt-5 leading-7 text-stone-600">
          Planning a date night, a family dinner or just a good meal?
          Tell us a little about your visit.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-stone-200 bg-white md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[280px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000"
            alt="Restaurant dining room ready for guests"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/45" />
          <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8 text-white sm:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.25em]">
              Good food, better company
            </p>
            <h2 className="font-serif text-4xl">Make it a moment.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
              Share a meal, celebrate something special or simply
              enjoy an evening away from the everyday.
            </p>
          </div>
        </div>

        <form onSubmit={submitBooking} className="p-6 sm:p-10">
          <div className="mb-7">
            <h2 className="font-serif text-3xl">Request a reservation</h2>
            <p className="mt-2 text-sm text-stone-500">
              We'll help you arrange your visit.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">
              Your name *
              <input
                className={inputClass}
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Full name"
                autoComplete="name"
                required
              />
            </label>

            <label className="text-sm">
              Phone number *
              <input
                className={inputClass}
                name="phone"
                type="tel"
                value={form.phone}
                onChange={update}
                placeholder="Your mobile number"
                autoComplete="tel"
                required
              />
            </label>

            <label className="text-sm">
              Date *
              <input
                className={inputClass}
                name="date"
                type="date"
                min={minDate}
                value={form.date}
                onChange={update}
                required
              />
            </label>

            <label className="text-sm">
              Preferred time *
              <select
                className={inputClass}
                name="time"
                value={form.time}
                onChange={update}
                required
              >
                {[
                  "12:00 PM",
                  "1:00 PM",
                  "2:00 PM",
                  "4:00 PM",
                  "5:00 PM",
                  "6:00 PM",
                  "7:00 PM",
                  "8:00 PM",
                  "9:00 PM",
                  "10:00 PM",
                ].map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              Number of guests *
              <select
                className={inputClass}
                name="guests"
                value={form.guests}
                onChange={update}
              >
                {["1", "2", "3", "4", "5", "6", "7", "8+"].map((count) => (
                  <option key={count} value={count}>
                    {count} {count === "1" ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              Occasion
              <select
                className={inputClass}
                name="occasion"
                value={form.occasion}
                onChange={update}
              >
                <option value="">Just dining</option>
               
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm">
            Special requests
            <textarea
              className={inputClass}
              name="notes"
              value={form.notes}
              onChange={update}
              placeholder="Dietary requirements, seating preferences..."
              rows={3}
            />
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#d9685c] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#bc5147]"
          >
            Request a table via WhatsApp ↗
          </button>

          <p className="mt-4 text-center text-base italic leading-5 text-stone-500">
            Your customers can easily reserve a table without calling or messaging. They just fill out a simple booking form, and the details are sent directly to you. We can also customize the form to collect the information you need.
          </p>
        </form>
      </section>
    </main>
  );
}
