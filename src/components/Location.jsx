// import React from 'react';
// import { FaUsers, FaMapMarkedAlt, FaRoad } from 'react-icons/fa';

// export default function Location() {
//   return (
//     <div className="bg-white text-[#333] py-12">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
//       <div>
//           <div className="border-l-2 border-gray-300 pl-4 mb-4">OVERVIEW</div>
//           <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
//             The Golden<br />Life
//           </h2>
//           <p className="text-gray-300 text-base leading-relaxed">
//             You promise yourself and your loved ones brighter opportunities, a prospering tomorrow, and a purer life. Our promise is delivering spaces that help you fulfill yours. A high-street retail project in the heart of an auspicious region, Swarnim is a landmark. And, a worthy investment for the far-sighted. When you own your part of Swarnim, you own more than just <span className="font-semibold text-white">affordable commercial shops in Gurgaon;</span> you own a pure asset, a bright opportunity. It is your step toward the golden life.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div>
//           <img
//             src="/Location-Map.webp"
//             alt="Location"
//             className="w-full h-auto object-cover rounded"
//           />
//         </div>
//         {/* Left Section - Icons and Text */}
//         <div>
//           <div className="space-y-8">
//             {/* Icons List */}
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
//                   <FaUsers className="text-xl" />
//                 </div>
//                 <p className="text-base">
//                   Located in a bustling community of <strong>25,000 families</strong>
//                 </p>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
//                   <FaMapMarkedAlt className="text-xl" />
//                 </div>
//                 <p className="text-base">
//                   Proximity and easy access to Gurugram’s city center and Delhi
//                 </p>
//               </div>
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
//                   <FaRoad className="text-xl" />
//                 </div>
//                 <p className="text-base">Well-connected to all major roads</p>
//               </div>
//             </div>

//             {/* Paragraph */}
//             <div className="text-sm text-gray-600 space-y-4">
//               <p>
//                 Swarnim is a dream come true for investors looking for{' '}
//                 <strong className="text-gray-800">retail space in Gurgaon</strong> because here every opportunity is
//                 golden. Swarnim offers thoughtfully designed shops that promise high growth potential.
//               </p>
//               <p>Welcome to a space where golden opportunities await.</p>
//             </div>

//             {/* Highlights List */}
//             <div className="space-y-4 pt-6">
//               {[
//                 ['Delhi Mumbai Industrial Corridor', '5 minutes'],
//                 ['IGI Airport', '30 minutes'],
//                 ['G.D. Goenka School', '5 minutes'],
//                 ['K.R. Mangalam University', '5 minutes'],
//                 ['Medanta - The Medicity', '15 minutes'],
//                 ['Proposed Metro', '10 minutes'],
//                 ['Gurugram Railway Station', '20 minutes'],
//               ].map(([place, time], i) => (
//                 <div key={i} className="flex items-start gap-2 border-b pb-2">
//                   <span className="mt-1 w-3 h-3 border-2 border-yellow-500 rounded-full"></span>
//                   <div>
//                     <p className="font-medium text-sm text-gray-900">{place}</p>
//                     <p className="text-sm text-gray-600">{time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { FaUsers, FaMapMarkedAlt, FaRoad } from 'react-icons/fa';

export default function Location() {
  const highlights = [
    ['Delhi Mumbai Industrial Corridor', '5 minutes'],
    ['IGI Airport', '30 minutes'],
    ['G.D. Goenka School', '5 minutes'],
    ['K.R. Mangalam University', '5 minutes'],
    ['Medanta - The Medicity', '15 minutes'],
    ['Proposed Metro', '10 minutes'],
    ['Gurugram Railway Station', '20 minutes'],
  ];

  return (
    <div className="bg-white text-[#333] py-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Overview Text */}
        <div>
          <div className="border-l-2 border-gray-300 pl-4 mb-4">OVERVIEW</div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            The Golden<br />Life
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            You promise yourself and your loved ones brighter opportunities, a prospering tomorrow, and a purer life.
            Our promise is delivering spaces that help you fulfill yours. A high-street retail project in the heart of an
            auspicious region, Swarnim is a landmark. And, a worthy investment for the far-sighted. When you own your part
            of Swarnim, you own more than just <span className="font-semibold text-white">affordable commercial shops in Gurgaon;</span> you own a pure asset, a bright opportunity. It is your step toward the golden life.
          </p>
        </div>

        {/* Location Map */}
        <div>
          <img
            src="/Location-Map.webp"
            alt="Location"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="max-w-4xl mx-auto mt-16 space-y-6 px-4">
        {[
          ['Located in a bustling community of 25,000 families', <FaUsers />],
          ['Proximity and easy access to Gurugram’s city center and Delhi', <FaMapMarkedAlt />],
          ['Well-connected to all major roads', <FaRoad />],
        ].map(([text, icon], i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">{icon}</div>
            <p className="text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* Paragraph Section */}
      <div className="max-w-4xl mx-auto mt-10 px-4 text-sm text-gray-600 space-y-4">
        <p>
          Swarnim is a dream come true for investors looking for{' '}
          <strong className="text-gray-800">retail space in Gurgaon</strong> because here every opportunity is golden.
          Swarnim offers thoughtfully designed shops that promise high growth potential.
        </p>
        <p>Welcome to a space where golden opportunities await.</p>
      </div>

      {/* Desktop Timeline */}
      <div className="max-w-6xl mx-auto mt-20 px-4 hidden md:block">
        <div className="relative flex justify-between items-center w-full">
          <div className="absolute top-2 left-0 w-full h-px bg-yellow-500 z-0"></div>
          {highlights.map(([place, time], index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center w-[12%] min-w-[70px]">
              <div className="w-3 h-3 rounded-full bg-white border border-yellow-500"></div>
              <div className="mt-6 text-xs sm:text-sm text-gray-800 font-semibold leading-tight">{place}</div>
              <div className="text-xs text-gray-500">{time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile List */}
      <div className="md:hidden mt-12 px-4 space-y-4">
        {highlights.map(([place, time], index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-3 h-3 mt-1 rounded-full bg-yellow-500 flex-shrink-0"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">{place}</p>
              <p className="text-sm text-gray-500">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
