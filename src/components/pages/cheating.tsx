import { ArrowRight } from "lucide-react";

export default function CheatingSection() {
  return (
    <section className="bg-red-500">
      <div className="mx-auto max-w-7xl sm:text-center py-24 px-6 md:py-36 border-x border-zinc-200">
        <p className="text-center mt-2 text-3xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance px-4">
          “This feels like cheating.”
        </p>
        <a className="w-40 mx-auto mt-8 flex group items-center gap-x-2 rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90">
          We agree.
          <ArrowRight className="ml-1 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
