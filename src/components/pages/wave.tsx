import React from "react";

export default function Wave() {
  return (
    <div className="relative w-full h-32 bg-black overflow-hidden flex flex-col justify-center">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`absolute left-0 w-full h-2 ${
            i % 2 === 0
              ? "animate-horizontal-wave"
              : "animate-horizontal-wave-reverse"
          }`}
          style={{
            animationDelay: `${i * 0.2}s`,
            top: 0,
          }}
        />
      ))}
    </div>
  );
}
