import React from 'react';

export default function Golden() {
  return (
    <div className="w-full bg-[#2f2b3a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <div className="border-l-2 border-gray-300 pl-4 mb-4">OVERVIEW</div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            The Golden<br />Life
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            You promise yourself and your loved ones brighter opportunities, a prospering tomorrow, and a purer life. Our promise is delivering spaces that help you fulfill yours. A high-street retail project in the heart of an auspicious region, Swarnim is a landmark. And, a worthy investment for the far-sighted. When you own your part of Swarnim, you own more than just <span className="font-semibold text-white">affordable commercial shops in Gurgaon;</span> you own a pure asset, a bright opportunity. It is your step toward the golden life.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/about-golden.webp"
            alt="Golden Life"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
