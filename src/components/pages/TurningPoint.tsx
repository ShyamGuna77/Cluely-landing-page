import Image from "next/image";
import Link from "next/link";

export default function TurningPoint() {
  return (
    <section className="py-16 px-4 max-w-[1200px] mx-auto border-x border-zinc-200 bg-[#F6F8FF] md:py-[120px] md:px-6">
      <div className="mx-auto max-w-7xl sm:text-center py-16 md:py-36 ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center mb-4 md:mb-6">
            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
              Welcome to
            </p>
            <h2 className="mt-2 text-4xl font-medium tracking-tight text-balance text-zinc-900 sm:text-6xl">
              The turning point of thought
            </h2>
          </div>
          <Link
            href="#"
            className="btn-primary bg-black p-3 w-[200px] rounded-full text-white inline-flex items-center  no-underline"
          >
            <Image
              src="/apple.svg"
              alt="Apple"
              width={20}
              height={20}
              className="mb-0.5 filter brightness-0 invert "
            />
            <span className="text-white p-2">Download for Mac</span>
          </Link>

          <Link
            href="#"
            className="text-gray-600 text-sm md:text-base transition-colors duration-200 underline hover:text-blue-400 "
          >
            Download for Windows
          </Link>
        </div>
      </div>
    </section>
  );
}
