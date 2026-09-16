import banner from "../assets/banner-stack.png";

const Hero = () => (
  <section id="home" className="hero-glow overflow-hidden">
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-2 lg:px-10 lg:pb-24 lg:pt-20">
      <div className="max-w-2xl">
        <span className="mb-5 inline-flex rounded-full bg-violet-50 px-4 py-2 text-xs font-bold tracking-wide text-violet-600">
          BUILD • LEARN • SHIP
        </span>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <span className="block brand-gradient">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
          Discover the technologies that power modern products. Explore tools,
          compare skills, and create a stack that matches the way you build.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#technologies"
            className="gradient-bg rounded-xl px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-pink-100 transition hover:-translate-y-0.5"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={banner}
          alt="Colorful layered technology stack illustration"
          className="w-full max-w-[520px] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
