const workshops = [
  {
    date: "08",
    month: "NOV",
    title: "Create Your Own piece",
    time: "4:00 PM – 6:00 PM",
    price: "₹799",
    description:
      "Explore creativity and paint somthing beatuiful with our guided painting workshop",
    image: "/workshop.png",
  },
];

export default function WorkshopsPage() {
 

  return (
    <main className="min-h-screen bg-[#faf9f2] px-5 py-16 text-stone-900 sm:px-10 lg:px-16">
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c45e52]">
          Gather, learn, savour
        </p>
        <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
          Good food brings us together.
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-stone-600">
          Get hands-on, learn something delicious and share the experience. Our
          workshops are made for curious minds and hungry hearts.
        </p>
      </header>

      <section className="mx-auto max-w-6xl space-y-8">
        {workshops.map((event) => (
          <article
            key={event.title}
            className="grid overflow-hidden rounded-3xl border border-stone-200 bg-white md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="img md:h-full md:min-h-[330px]">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover "
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#f4e8df]">
                  <span className="font-serif text-2xl">{event.date}</span>
                  <span className="text-xs tracking-widest">{event.month}</span>
                </div>
                <div>
                  <p className="text-sm text-stone-500">{event.time}</p>
                  
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl">{event.title}</h2>
              <p className="mt-4 leading-7 text-stone-600">
                {event.description}
              </p>

              <a
               
                className="mt-7 inline-flex w-fit rounded-full bg-[#d9685c] px-6 py-3 text-sm text-white transition hover:bg-[#bc5147]"
              >
                Enquire & reserve a spot ↗
              </a>
            </div>
          </article>
        ))}
      </section>

      <p className="mt-12 text-center text-base text-stone-500 italic">
        I noticed you host different kinds of workshops at your café, so I added
        a dedicated workshops page where people can easily check the venue,
        timings, location, and contact details.
      </p>
    </main>
  );
}
