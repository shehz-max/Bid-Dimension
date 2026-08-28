'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '17472237815',
  defaultMessage = 'Hello Bid Dimensions, I would like to inquire about an engineering & design quote.',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Popup pill on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-bd-navy px-4 py-2 rounded-2xl shadow-xl border border-gray-200 text-xs font-body transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-4'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="font-semibold text-bd-navy">Chat with an Engineer</span>
        <span className="text-gray-400">|</span>
        <span className="text-bd-blue font-mono text-[11px] font-bold">(747) 223-7815</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp with Bid Dimensions engineering team"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Online Green Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full z-10" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.497-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.526.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.926-2.232-.244-.586-.492-.507-.676-.516-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.507 0 1.479 1.077 2.908 1.228 3.108.15.2 2.119 3.235 5.132 4.538.717.31 1.277.495 1.713.633.72.229 1.375.197 1.893.12.577-.087 1.78-.727 2.03-1.429.251-.702.251-1.303.176-1.429-.076-.126-.276-.201-.577-.351zM12.004 21.996h-.002c-1.796 0-3.559-.483-5.101-1.397l-.366-.217-3.791.994 1.012-3.696-.239-.379a9.948 9.948 0 0 1-1.523-5.307c0-5.514 4.486-10 10.005-10 2.671 0 5.182 1.04 7.07 2.929a9.942 9.942 0 0 1 2.934 7.071c0 5.514-4.486 10-10.005 10zm0-18.005c-4.412 0-8.004 3.592-8.004 8.005 0 1.572.457 3.093 1.321 4.4l.205.31-.603 2.202 2.257-.592.3.179a7.973 7.973 0 0 0 4.524 1.506c4.412 0 8.004-3.592 8.004-8.005 0-2.138-.832-4.148-2.345-5.66a7.947 7.947 0 0 0-5.66-2.345z" />
        </svg>
      </a>
    </div>
  );
};
