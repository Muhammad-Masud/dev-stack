import type { Technology } from "../types.ts";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => (
  <article className="card-shadow flex min-h-[380px] flex-col rounded-[24px] border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-200">
    <div className="flex items-start justify-between gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-2.5">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-10 w-10 object-contain"
          loading="lazy"
        />
      </div>
      <span className="rounded-full bg-violet-50 px-3.5 py-2 text-xs font-bold text-violet-600">
        {technology.badge}
      </span>
    </div>

    <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">
      {technology.name}
    </h3>
    <p className="mt-3 min-h-[84px] text-[15px] leading-7 text-slate-500">
      {technology.description}
    </p>

    <div className="mt-auto">
      <div className="mt-5 flex flex-wrap items-center gap-2.5 text-sm">
        <span className="rounded-full bg-slate-100 px-3.5 py-2 font-semibold text-slate-700">
          {technology.category}
        </span>
        <span className="text-slate-500">{technology.difficulty}</span>
        <span className="ml-auto inline-flex items-center gap-1 font-bold text-slate-700">
          <span className="text-lg text-amber-500">★</span>
          {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-6 w-full rounded-xl px-5 py-3.5 text-sm font-bold transition ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  </article>
);

export default TechnologyCard;
