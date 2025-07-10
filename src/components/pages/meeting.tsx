import Image from "next/image";

export default function MeetingFeatures() {
  return (
    <section className="bg-[#181B20] py-[120px] px-6">
      <div className="max-w-[1200px] mx-auto">
      
        <div className="grid lg:grid-cols-2 gap-[64px] items-center mb-24">
     
          <div className="space-y-6">
            <h2 className="text-[48px] font-bold leading-[1.2] text-white">
              Doesn&apos;t join meetings
            </h2>
            <p className="text-[18px] leading-[1.6] text-gray-400">
              Cluely never shows up in shared screens, recordings, or external
              meeting tools. It&apos;s fully hidden from everyone but you.
            </p>
          </div>
   
          <div className="relative">
            <Image
              src="/bentos/meeting.webp"
              alt="Doesn't join meetings screenshot"
              width={600}
              height={700}
              className="w-full h-auto rounded-[12px] border border-[#1D2025] bg-[#1D2025] shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
      
        <div className="grid lg:grid-cols-2 gap-[64px] items-center mb-24 lg:flex-row-reverse">
         
          <div className="relative order-1 lg:order-none">
            <Image
              src="/bentos/you.webp"
              alt="Doesn't join meetings screenshot"
              width={600}
              height={700}
              className="w-full h-auto rounded-[12px] border border-[#1D2025] bg-[#1D2025] shadow-lg"
            />
          </div>
        
          <div className="space-y-6 order-2 lg:order-none">
            <h2 className="text-[48px] font-bold leading-[1.2] text-white">
            Invisible to camera
            </h2>
            <p className="text-[18px] leading-[1.6] text-gray-400">
              Cluely never shows up in shared screens, recordings, or external
              meeting tools. It&apos;s fully hidden from everyone but you.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
       
        <div className="grid lg:grid-cols-2 gap-[64px] items-center">
      
          <div className="space-y-6">
            <h2 className="text-[48px] font-bold leading-[1.2] text-white">
              Follow your Eyes
            </h2>
            <p className="text-[18px] leading-[1.6] text-gray-400">
              Cluely never shows up in shared screens, recordings, or external
              meeting tools. It&apos;s fully hidden from everyone but you.
            </p>
          </div>
   
          <div className="relative">
            <Image
              src="/bentos/time.webp"
              alt="Doesn't join meetings screenshot"
              width={600}
              height={700}
              className="w-full h-auto rounded-[12px] border border-[#1D2025] bg-[#1D2025] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
