interface ProjectVisualProps {
  title: string;
  monogram: string;
  steps?: string[];
}

const ProjectVisual = ({ title, monogram, steps }: ProjectVisualProps) => {
  return (
    <div className="relative h-56 overflow-hidden border-b border-zinc-100 bg-gradient-to-br from-emerald-50 via-white to-zinc-50 flex flex-col items-center justify-center gap-4 p-6">
      <span
        aria-hidden
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-100/60 blur-2xl"
      />
      <span className="font-serif italic text-6xl leading-none text-emerald-600 select-none">
        {monogram}
      </span>
      {steps && (
        <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-700 bg-white border border-emerald-100 rounded-full shadow-sm whitespace-nowrap">
                {step}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden className="text-emerald-300 text-[10px]">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      )}
      <span className="absolute bottom-2.5 right-3 font-mono text-[10px] uppercase tracking-wide text-zinc-500">
        {title}
      </span>
    </div>
  );
};

export default ProjectVisual;
