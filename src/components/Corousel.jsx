import React from 'react';

export default function Carousel() {
  return (
    <div className="w-full h-full bg-slate-400 overflow-hidden">
      {/* Desktop Video */}
      <video
        src="/deskvideo.mp4"
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile Video */}
      <video
        src="/mobvideo.mp4"
        className="block md:hidden w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
