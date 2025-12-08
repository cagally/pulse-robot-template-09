
import React from "react";
import logoBlack from "@/assets/logo-black.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4">
          <img src={logoBlack} alt="Kalybrate AI" className="h-8 w-auto" />
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Kalybrate AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
