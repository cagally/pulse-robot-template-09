
import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import kalybrateLogo from "@/assets/kalybrate-logo-blue.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button onClick={scrollToTop} className="mb-4">
              <img 
                src={kalybrateLogo} 
                alt="Kalybrate AI" 
                className="h-8 brightness-0 invert" 
              />
            </button>
            <p className="text-gray-400 max-w-sm mb-4">
              The leading destination for evaluating real-world AI performance. We ensure agents and models function reliably.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:hello@kalybrate.ai" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@kalybrate.ai" className="text-gray-400 hover:text-white transition-colors">
                  hello@kalybrate.ai
                </a>
              </li>
              <li>
                <a href="#details" className="text-gray-400 hover:text-white transition-colors">
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kalybrate AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 sm:mt-0">
            Built with care in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
