
const foodImages = {
  one: "/img1.svg",
  two: "/img2.svg",
  three: "/img3.svg",
  four: "/img4.svg",
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-82px)] overflow-hidden bg-[#F8F7ED] px-4 py-8 sm:px-8 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:min-h-[460px] lg:grid-cols-2 lg:gap-8">

        {/* Left: Hero Content */}
        <div className="flex flex-col items-start justify-center">
          <p className="mb-1 text-sm font-medium tracking-wide text-[#FF6666]">
            Come Hungry. Leave Happy.
          </p>

          <h1 className="text-3xl font-bold leading-[1.18] tracking-tight text-[#202020] sm:text-4xl lg:text-[34px] xl:text-[40px]">
            Delicious Bites,
            <br />
            Refreshing Drinks,
            <br />
            <span className="text-[#076638]">
              Good Vibes All Around.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#reserve"
              className="rounded-full bg-[#B77900] px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#966200] hover:shadow-md"
            >
              Reserve a Table
            </a>

            <a
              href="#menu"
              className="rounded-full border border-[#C5C78B] px-8 py-3 text-sm font-semibold text-[#202020] transition duration-200 hover:bg-[#ECEBDD]"
            >
              Our Menu
            </a>
          </div>

          <p className="mt-3 text-sm text-[#555555] sm:text-base">
            We don't make customers, We make Homies
          </p>

          {/* Rating */}
          <div className="mt-12 flex items-center gap-2">
            <span className="text-[29px] leading-none text-[#FFC52F]">
              <img src="/reviewStar.png" alt="4.9stars" />
            </span>

            <span className="text-[28px] font-bold leading-none text-[#202020]">
              4.9
            </span>

            <span className="pt-1 text-xs text-[#666666] sm:text-sm">
              Trusted By Locals
            </span>
          </div>
        </div>

        {/* Right: Asymmetric Food Image Collage */}
        <div className="mx-auto grid h-[405px] w-full max-w-[540px] grid-cols-[0.72fr_1fr] gap-2 sm:gap-3">

          {/* Left Image Column */}
          <div className="flex min-h-0 flex-col gap-2 sm:gap-3">
            <div className="h-[38.5%] min-h-0 overflow-hidden rounded-[28px]">
              <img
                src={foodImages.one}
                alt="Freshly prepared cafe food and coffee"
                className=" w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="min-h-0 flex-1 overflow-hidden rounded-[28px]">
              <img
                src={foodImages.three}
                alt="Chocolate milkshake"
                className=" w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex min-h-0 flex-col gap-2 sm:gap-3">
            <div className="h-[61%] min-h-0 overflow-hidden rounded-[28px]">
              <img
                src={foodImages.two}
                alt="Creamy pasta served at the cafe"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="min-h-0 flex-1 overflow-hidden rounded-[28px]">
              <img
                src={foodImages.four}
                alt="Seasoned crispy french fries"
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
