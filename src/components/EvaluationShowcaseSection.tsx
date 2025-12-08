import React, { useRef, useEffect } from "react";
import evaluationHero from "@/assets/evaluation-hero.jpg";

const EvaluationShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-gray-100" id="evaluation-engine">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000">
          <div className="mb-12 text-center">
            <div className="pulse-chip mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Under The Hood</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Rigorous Testing Meets <span className="text-[#FC4D0A]">Actionable Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our evaluation engine stress-tests AI systems against thousands of edge cases, 
              surfacing the failure modes that matter before they reach production.
            </p>
          </div>
          
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={evaluationHero}
              alt="AI evaluation dashboard showing performance metrics and failure detection heatmaps" 
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white text-xl font-semibold">See It In Action</h3>
                  <p className="text-white/80">Quantified insights for your AI systems</p>
                </div>
                <a 
                  href="#details" 
                  className="px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                >
                  View Sample Report
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Edge Case Detection</h4>
              <p className="text-gray-600">Automatically discovers failure modes across thousands of adversarial inputs and stress scenarios.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Performance Benchmarking</h4>
              <p className="text-gray-600">Quantified metrics comparing your agent against industry baselines and competitor performance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#FC4D0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Continuous Monitoring</h4>
              <p className="text-gray-600">Track reliability over time with real-time drift detection and regression alerts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationShowcaseSection;
