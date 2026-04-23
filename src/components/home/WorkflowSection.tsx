import { workflowSteps } from "@/data/home-data";

export default function WorkflowSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            How It Works
          </p>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            A simple workflow for QR attendance
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From company setup to staff attendance actions, the platform keeps
            the process clean and secure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workflowSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-r from-sky-600 to-pink-500 px-4 py-2 text-sm font-bold text-white">
                {item.step}
              </div>

              <h4 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}