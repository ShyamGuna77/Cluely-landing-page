"use client";
import React from "react";
import { StickyScroll } from "./stckyscroll";
import Image from "next/image";

///Hoorah/////
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/bentos/scroll1.webp"
          width={800}
          height={500}
          className="w-full h-full object-cover"
          alt="Collaborative editing demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/bentos/scroll2.webp"
          width={800}
          height={500}
          className="w-full h-full object-cover"
          alt="Real time changes demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src="/bentos/three.webp"
          width={800}
          height={500}
          className="w-full h-full object-cover"
          alt="Version control demo"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-white">
      <div className="py-12 px-4 text-center max-w-4xl mx-auto md:py-16">
        <h2 className="text-2xl font-bold text-black mb-3 md:text-4xl md:mb-4">
          Three ways Cluely can think
        </h2>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
