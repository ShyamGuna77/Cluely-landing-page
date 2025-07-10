import Image from "next/image";

export default function UndetectableSection() {
  return (
    <section className="bg-[#181B20] py-[120px] px-6 mt-[-100px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Undetectable by design.
          </h2>
          <p className="mt-4 text-lg lg:text-xl max-w-lg mx-auto font-base tracking-tight text-zinc-400 leading-6">
            No bots in the room. No Zoom guests. No screen-share trails. Works
            on everything.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/bentos/google.png"
            alt="Undetectable by design"
            width={450}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
