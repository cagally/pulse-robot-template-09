
import React from "react";
import kalybrateLogo from "@/assets/kalybrate-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 border-t border-gray-100">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          <img src={kalybrateLogo} alt="Kalybrate AI" className="h-8 w-auto" />
          <p className="text-center text-gray-600 text-base max-w-md">
            The ground truth for AI model performance.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#features" className="hover:text-pulse-500 transition-colors">Services</a>
            <a href="#details" className="hover:text-pulse-500 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-pulse-500 transition-colors">Case Studies</a>
            <a href="#get-access" className="hover:text-pulse-500 transition-colors">Contact</a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Kalybrate AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
