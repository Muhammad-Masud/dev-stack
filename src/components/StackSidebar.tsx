import type { Technology } from "../types.ts";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => (
  <aside className="stack-shadow h-fit rounded-[24px] border border-slate-200 bg-white p-6 lg:sticky lg:top-28">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h2 className="text-xl font-extrabold text-slate-950">Your Stack</h2>
        <p className="mt-1 text-sm text-slate-500">
          {stack.length} Technology{" "}
          {stack.length === 1 ? "Selected" : "Selected"}
        </p>
      </div>
      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="text-xs font-bold text-rose-500 hover:text-rose-600"
        >
          Remove All
        </button>
      )}
    </div>

    {stack.length === 0 ? (
      <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
          +
        </div>
        <h3 className="mt-4 font-bold text-slate-800">Your stack is empty</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Add technologies from the list to start building your stack.
        </p>
      </div>
    ) : (
      <div className="mt-6 space-y-3">
        {stack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-2">
              <img
                src={technology.icon}
                alt=""
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900">
                {technology.name}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {technology.category}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRemove(technology)}
              aria-label={`Remove ${technology.name}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-white hover:text-rose-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    )}
  </aside>
);

export default StackSidebar;
