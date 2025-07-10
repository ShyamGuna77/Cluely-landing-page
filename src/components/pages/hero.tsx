import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-navbar-hero min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-medium tracking-tight text-balance text-zinc-900 sm:text-7xl">
          Everything You Need.
          <br />
          Before You Ask.
        </h1>

        <p className="text-lg/6 lg:text-xl/6 mt-6 font-medium text-balance text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Cluely is an undetectable AI that sees your screen,
          <br />
          hears your calls, and feeds you answers — in real time.
        </p>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Link
            href="#"
            className="btn-primary bg-black p-4 w-[220px] rounded-full text-white inline-flex items-center gap-2 no-underline"
          >
            <Image
              src="/apple.svg"
              alt="Apple"
              width={20}
              height={20}
              className="mb-0.5 filter brightness-0 invert"
            />
            Download for Mac
          </Link>

          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 no-underline"
          >
            Download for Windows
          </Link>
        </div>
      </div>
    </section>
  );
}
