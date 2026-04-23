import { services } from "@/data/home-data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-white/60 bg-white/60 py-16 backdrop-blur-sm sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Platform Services
          </p>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Everything needed for company attendance management
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Built for registration, staff access, QR attendance, reporting,
            company branding, and secure administration.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-white to-pink-100">
                  <Icon className="h-5 w-5 text-sky-700" />
                </div>

                <h4 className="text-base font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}