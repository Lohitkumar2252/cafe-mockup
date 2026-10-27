
const testimonials = [
  {
    name: "Ananya S.",
    detail: "A lovely evening out",
    text: "Beautiful ambience, thoughtful presentation and food that feels made with care. A lovely place to spend an evening.",
  },
  {
    name: "Rahul M.",
    detail: "Food worth returning for",
    text: "The flavours were excellent, the staff were welcoming, and the whole experience felt relaxed and special.",
  },
  {
    name: "Priya R.",
    detail: "Little details, big difference",
    text: "Loved the attention to detail. From the first dish to dessert, everything felt well considered.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f2] px-5 py-16 text-stone-900 sm:px-10 lg:px-16">
      <header className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c45e52]">
          Kind words, shared moments
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl">
          Don't just take our word for it.
        </h1>
        <p className="mt-5 leading-7 text-stone-600">
          The best part of what we do is seeing people leave happy.
          Here's a little of the love we'd like to celebrate.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((review) => (
          <article
            key={review.name}
            className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7 sm:p-8"
          >
            <p className="mb-5 tracking-[0.2em] text-[#c45e52]">
              ★ ★ ★ ★ ★
            </p>
            <span className="mb-3 font-serif text-xl">“</span>
            <p className="flex-1 leading-7 text-stone-600">{review.text}</p>
            <div className="mt-7 border-t border-stone-100 pt-5">
              <p className="font-medium">{review.name}</p>
              <p className="mt-1 text-sm text-stone-500">{review.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-[#f0eee5] px-6 py-12 text-center sm:px-12">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c45e52]">
          Been here before?
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl">
          Your experience matters to us.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-stone-600">
          Enjoyed your visit? Share your experience and help someone
          discover their next favourite place.
        </p>
        <a
          href="https://www.google.com/maps/place/Cafe+Serial+Chiller/@20.2771875,85.8360625,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a7003181bb7b:0x30e1de73ffc3fef0!8m2!3d20.2771875!4d85.8360625!16s%2Fg%2F11vxjrf12l?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D "
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex rounded-full bg-[#d9685c] px-7 py-3 text-sm text-white hover:bg-[#bc5147]"
        >
          Read or leave a review ↗
        </a>
      </section>

      <p className="mx-auto mt-8 max-w-2xl text-center text-base italic leading-5 text-stone-400">
        I added a dedicated reviews page where your café can showcase customer feedback. Customers can also submit their own reviews, which you can review and add to the website.
      </p>
    </main>
  );
}
