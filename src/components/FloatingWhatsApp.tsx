import React from 'react';
import whatsappIcon from "@/assets/whatsapp-icon.png";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in Simba Cement products. Please provide more information.";
    const whatsappUrl = `https://wa.me/254738276457?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
    >
      <div className="relative flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 shadow-lg hover:bg-green-600 transition-all duration-300 transform group-hover:scale-110">
        <img src={whatsappIcon} alt="WhatsApp Icon" className="w-8 h-8" />
        <div className="absolute -top-2 -right-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
        </div>
      </div>
      <div className="absolute right-0 bottom-16 mb-2 w-40 bg-background border border-border p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-2 pointer-events-none">
        <p className="text-sm font-semibold text-foreground">Talk to us</p>
        <p className="text-xs text-muted-foreground">We're online!</p>
        <div className="absolute right-4 bottom-[-8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-background"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
