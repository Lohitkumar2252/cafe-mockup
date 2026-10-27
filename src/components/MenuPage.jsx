
import { useState } from "react";

const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

const dishes = [
  {
    name: "Smoky Paneer Tikka",
    category: "Starters",
    price: 280,
    description: "Chargrilled paneer, house spices and mint chutney.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700",
  },
  {
    name: "Garden Fresh Salad",
    category: "Starters",
    price: 220,
    description: "Seasonal greens, cherry tomatoes and citrus dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
  },
    
];

export default function MenuPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === active);

  return (
    <main className="min-h-screen bg-[#faf9f2] px-5 py-16 text-stone-900 sm:px-10 lg:px-16">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c45e52]">
          Fresh from our kitchen
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl">
          A menu made with love.
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-stone-600">
          Thoughtful ingredients, comforting flavours and little details
          that make every bite worth remembering.
        </p>
      </header>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-5 py-2.5 text-sm transition ${
              active === category
                ? "border-[#d9685c] bg-[#d9685c] text-white"
                : "border-stone-300 hover:border-[#d9685c]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dish) => (
          <article
            key={dish.name}
            className="overflow-hidden rounded-2xl border border-stone-200/70 bg-white"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="h-60 w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h2 className="font-serif text-2xl">{dish.name}</h2>
                <span className="shrink-0 font-medium text-[#c45e52]">
                  ₹{dish.price}
                </span>
              </div>
              <p className="text-sm leading-6 text-stone-500">
                {dish.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-stone-400">
                {dish.category}
              </p>
            </div>
          </article>
        ))}
      </section>

      <p className="mt-12 text-center text-base italic leading-5 text-stone-500">
        Here, you can showcase your café’s menu with filters that help customers easily find what they’re looking for. You can display dish names, prices, food categories, and descriptions, and customize the page with any additional information you want your customers to see.
      </p>
    </main>
  );
}
