
import React, { useState } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Diagnostic request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };

  return (
    <section id="details" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - Our Process */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div 
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" 
              style={{
                backgroundImage: "url('/background-section3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                From Chaos to Calibration
              </h2>
            </div>
            
            <div 
              className="bg-white p-4 sm:p-8" 
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC"
              }}
            >
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                A proven 3-step methodology
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pulse-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base block mb-1">Diagnostic Stress Test</span>
                      <span className="text-sm text-gray-600">Initial Failure Rate: 12.4%</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pulse-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base block mb-1">Root Cause Analysis</span>
                      <span className="text-sm text-gray-600">Identifying Edge Cases & Weak Points</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pulse-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="p-4 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-base block mb-1">Synthetic Data Injection</span>
                      <span className="text-sm text-green-600 font-medium">Final Failure Rate: 0.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div 
              className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" 
              style={{
                backgroundImage: "url('/background-section1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Get Started
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Book Your Free Diagnostic
              </h2>
            </div>
            
            <div 
              className="bg-white p-4 sm:p-8" 
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC"
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Company (optional)" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Start Free Diagnostic
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
