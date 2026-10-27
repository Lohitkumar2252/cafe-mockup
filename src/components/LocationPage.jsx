const locationInfo = {
  address: "12 Park Street, Bhubaneswar, Odisha",
  phone: "+91 98765 43210",
  hours: [
    ["Monday – Friday", "12 PM – 10:30 PM"],
    ["Saturday – Sunday", "11 AM – 11 PM"],
  ],
};

export default function LocationPage() {
  const encodedAddress = encodeURIComponent(locationInfo.address);

  return (
    <main className="min-h-screen bg-[#faf9f2] px-5 py-16 text-stone-900 sm:px-10 lg:px-16">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c45e52]">
          Come on over
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl">
          Your table is closer than you think.
        </h1>
        <p className="mt-5 leading-7 text-stone-600">
          Whether it's a quick lunch, a long dinner or coffee with friends, we'd
          love to welcome you.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col justify-center rounded-3xl bg-[#f0eee5] p-7 sm:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs uppercase tracking-widest text-[#c45e52]">
              Find us
            </p>
            <h2 className="font-serif text-2xl">Come say hello.</h2>
            <p className="mt-3 leading-7 text-stone-600">
              {locationInfo.address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-[#c45e52] underline underline-offset-4"
            >
              Get directions ↗
            </a>
          </div>

          <div className="mb-8 border-t border-stone-300 pt-7">
            <p className="mb-3 text-xs uppercase tracking-widest text-[#c45e52]">
              Opening hours
            </p>
            {locationInfo.hours.map(([day, time]) => (
              <div
                key={day}
                className="flex justify-between gap-4 border-b border-stone-300/60 py-3 text-sm"
              >
                <span>{day}</span>
                <span className="text-right text-stone-600">{time}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[#c45e52]">
              Call us
            </p>
            <a
              href={`tel:${locationInfo.phone.replace(/\s/g, "")}`}
              className="text-lg hover:text-[#c45e52]"
            >
              {locationInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <p className="mt-10 text-center text-base text-stone-500 italic">
        Here Your Customers can find your location and contact information, making it easy for them to visit the cafe and get in touch with you.
      </p>
    </main>
  );
}
