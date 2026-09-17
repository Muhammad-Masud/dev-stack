import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types.ts";
import TechnologyCard from "./TechnologyCard.tsx";

const TechnologiesSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        if (!response.ok) {
          throw new Error("Unable to load technology data.");
        }
        const data = (await response.json()) as Technology[];
        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Could not load the technology list.");
      } finally {
        setLoading(false);
      }
    };

    void loadTechnologies();
  }, []);

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  return (
    <section id="technologies" className="scroll-mt-20 bg-slate-50/60 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-violet-600">
            Explore Technologies
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Choose the tools that fit your workflow.
          </h2>
          <p className="mt-4 leading-7 text-slate-500">
            Browse the collection, then add your picks to create a personalized
            development stack.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-80 items-center justify-center rounded-[24px] border border-slate-200 bg-white">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
              <span className="loading loading-spinner loading-md text-violet-500" />
              Loading technologies...
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some((item) => item.id === technology.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologiesSection;
