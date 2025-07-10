import React from "react";

export default function Wave() {
  return (
    <div className="relative w-full h-32 bg-black overflow-hidden flex flex-col justify-center">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-2 animate-horizontal-wave-yoyo"
          style={{
            animationDelay: `${i * 0.22}s`,
            top: 0,
          }}
        />
      ))}
    </div>
  );
}
