import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Main = () => {
  return (
    <section className="bg-gradient-navbar-hero min-h-[100vh] md:min-h-[120vh] flex items-center justify-center px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto text-center p-6 md:p-10">
        <h1 className="text-3xl font-medium tracking-tight text-balance text-zinc-900 sm:text-5xl md:text-7xl">
          Everything You Need.
          <br />
          Before You Ask.
        </h1>

        <p className="text-base md:text-lg/6 lg:text-xl/6 mt-4 md:mt-6 font-medium text-balance text-zinc-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Cluely is an undetectable AI that sees your screen,
          <br />
          hears your calls, and feeds you answers — in real time.
        </p>

        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
          <Link
            href="#"
            className="btn-primary bg-black p-3 md:p-4 w-[200px] md:w-[220px] rounded-full text-white inline-flex items-center gap-2 no-underline text-sm md:text-base"
          >
            <Image
              src="/apple.svg"
              alt="Apple"
              width={18}
              height={18}
              className="mb-0.5 filter brightness-0 invert md:w-5 md:h-5"
            />
            Download for Mac
          </Link>

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 no-underline text-sm md:text-base"
          >
            Download for Windows
          </Link>
        </div>
      </div>
    </section>
  );
};

const BentoFeatures = () => {
  return (
    <section className="bg-white relative py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="-mt-48 md:-mt-72">
          <Image
            src="/bentos/one.webp"
            alt="Hero Features"
            width={550}
            height={400}
            className="w-full max-w-3xl mx-auto h-auto object-cover"
          />
        </div>

        <div className="text-center my-10 md:my-16">
          <p className="text-xs md:text-sm font-medium text-gray-600 mb-3 md:mb-4 tracking-wide uppercase">
            THE TURNING POINT OF THOUGHT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Cluely helps with
            <br />
            anything it sees or hears.
          </h2>
        </div>

        {/* Two-column grid for first two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
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
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Sees what you see
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Hears what you hear
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
          <div className="mx-auto max-w-7xl sm:text-center py-16 px-4 border-x border-zinc-200 md:py-36 md:px-6">
            <p className="text-center mt-2 text-2xl font-medium tracking-tight text-pretty text-black sm:text-4xl md:text-5xl sm:text-balance">
              &ldquo;This feels like cheating.&rdquo;
            </p>
            <a className="w-[150px] md:w-[170px] mx-auto mt-6 md:mt-8 flex group items-center gap-x-2 rounded-full bg-black px-4 md:px-6 py-2 md:py-2.5 text-base md:text-lg font-semibold text-white shadow-xs outline-none hover:-translate-y-0.5 transition hover:scale-[100.5%] hover:bg-black/90">
              We agree.
              <ArrowRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Hero() {
  return (
    <div className="relative">
      <Main />
      <BentoFeatures />
    </div>
  );
}
