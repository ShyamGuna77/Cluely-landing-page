/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div className="relative h-[300vh] py-[10vh] px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto sticky top-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sticky Image Container */}
          <div className="h-[500px] lg:block">
            <div
              className={cn(
                "h-full w-full overflow-hidden rounded-lg border border-black/10 bg-white",
                contentClassName
              )}
            >
              {content[activeCard].content ?? null}
            </div>
          </div>

          {/* Content Container */}
          <div className="relative overflow-hidden">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                className="w-full h-full absolute top-0 left-0 flex flex-col justify-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  y: activeCard === index ? 0 : (index < activeCard ? -100 : 100),
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed p-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
