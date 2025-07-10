import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BentoFeatures() {
  return (
    <section className="py-[120px] px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
          THE TURNING POINT OF THOUGHT
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Cluely helps with
          <br />
          anything it sees or hears.
        </h2>
      </div>

      {/* Two-column grid for first two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* First card */}
        <div className="card p-8">
          <div className="mb-6">
            <Image
              src="/bentos/two.webp"
              alt="Sees what you see"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg border border-black/10"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sees what you see
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cluely sees and understands all the content on your screen — code,
            slides, questions, docs, dashboards.
          </p>
        </div>

        {/* Second card */}
        <div className="card p-8">
          <div className="mb-6">
            <Image
              src="/bentos/three.webp"
              alt="Hears what you hear"
              width={500}
              height={250}
              className="w-full h-auto rounded-lg border border-black/10"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hears what you hear
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cluely listens silently in the background and understands your
            meetings in real time — without ever joining them.
          </p>
        </div>
      </div>

      {/* Third card - full width below the grid */}
      <div className="card p-8 mt-8">
        <div className="mb-6">
          <Image
            src="/bentos/four.webp"
            alt="Answers anything"
            width={500}
            height={250}
            className="w-full h-auto rounded-lg border border-black/10"
          />
        </div>
        <div className="mx-auto max-w-7xl sm:text-center py-36 border-x border-zinc-200 -mb-24">
          <p className="text-center mt-2 text-4xl font-medium tracking-tight text-pretty text-black sm:text-5xl sm:text-balance">
            “This feels like cheating.”
          </p>
          <a className="w-[170px] mx-auto mt-8 flex group items-center gap-x-2 rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90">
            We agree.
            <ArrowRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
