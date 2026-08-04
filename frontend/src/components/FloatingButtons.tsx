import { Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const phone = '919250995854'; // placeholder
const whatsapp = '919250995854'; // placeholder

export default function FloatingButtons() {
  const [showCallTip, setShowCallTip] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4 items-end">
      {/* Call */}
      <div className="relative flex items-center gap-3">
        {showCallTip && (
          <div className="glass rounded-full px-5 py-2.5 shadow-luxe text-emerald-deep text-sm font-medium flex items-center gap-2.5">
            Call us now
            <button onClick={() => setShowCallTip(false)} aria-label="Dismiss">
              <X size={14} />
            </button>
          </div>
        )}
        <a
          href={`tel:+${phone}`}
          onMouseEnter={() => setShowCallTip(true)}
          aria-label="Call"
          className="w-14 h-14 rounded-full bg-emerald-deep text-white flex items-center justify-center shadow-luxe shadow-emerald-900/30 hover:bg-[#15503d] transition-all duration-500 ease-luxe hover:scale-110 animate-float"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}?text=I'm%20interested%20in%20Kanha%20Estate%20plots`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe shadow-green-900/30 hover:bg-[#1da851] transition-all duration-500 ease-luxe hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
