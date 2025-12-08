
import React from "react";
import kalybrateLogo from "@/assets/kalybrate-logo.png";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-6 sm:p-10 min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-center" style={{
            backgroundImage: "url('/background-section3.png')"
          }}>
            <div className="flex flex-col items-center gap-6 text-white">
              <img src={kalybrateLogo} alt="Kalybrate AI" className="h-10 w-auto brightness-0 invert" />
              <p className="text-center text-white/80 text-base max-w-md">
                The ground truth for AI model performance.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <a href="#features" className="hover:text-white transition-colors">Services</a>
                <a href="#details" className="hover:text-white transition-colors">Process</a>
                <a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a>
                <a href="#get-access" className="hover:text-white transition-colors">Contact</a>
              </div>
              <p className="text-center text-white/50 text-sm">
                © {new Date().getFullYear()} Kalybrate AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
