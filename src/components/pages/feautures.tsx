import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BentoFeatures() {
  return (
    <section className="py-16 px-4 max-w-[1200px] mx-auto md:py-[120px] md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase md:text-base">
          THE TURNING POINT OF THOUGHT
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-6xl">
          Cluely helps with
          <br />
          anything it sees or hears.
        </h2>
      </div>

      {/* Two-column grid for first two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First card */}
        <div className="card p-4 md:p-8">
          <div className="mb-4 md:mb-6">
            <Image
              src="/bentos/two.webp"
              alt="Sees what you see"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-black/10"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 md:text-2xl md:mb-4">
            Sees what you see
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed md:text-base">
            Cluely sees and understands all the content on your screen — code,
            slides, questions, docs, dashboards.
          </p>
        </div>

        {/* Second card */}
        <div className="card p-4 md:p-8">
          <div className="mb-4 md:mb-6">
            <Image
              src="/bentos/three.webp"
              alt="Hears what you hear"
              width={500}
              height={250}
              className="w-full h-auto rounded-lg border border-black/10"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 md:text-2xl md:mb-4">
            Hears what you hear
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed md:text-base">
            Cluely listens silently in the background and understands your
            meetings in real time — without ever joining them.
          </p>
        </div>
      </div>

      {/* Third card - full width below the grid */}
      <div className="card p-4 md:p-8 mt-6 md:mt-8">
        <div className="mb-4 md:mb-6">
          <Image
            src="/bentos/four.webp"
            alt="Answers anything"
            width={500}
            height={250}
            className="w-full h-auto rounded-lg border border-black/10"
          />
        </div>
        <div className="mx-auto max-w-7xl sm:text-center py-16 px-4 border-x border-zinc-200 -mb-12 md:py-36 md:px-6 md:-mb-24">
          <p className="text-center mt-2 text-2xl font-medium tracking-tight text-pretty text-black sm:text-4xl md:text-5xl sm:text-balance">
            "This feels like cheating."
          </p>
          <a className="w-[150px] md:w-[170px] mx-auto mt-6 md:mt-8 flex group items-center gap-x-2 rounded-full bg-black px-4 md:px-6 py-2 md:py-2.5 text-base md:text-lg font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90">
            We agree.
            <ArrowRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
