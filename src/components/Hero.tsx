import React from "react";

const Hero: React.FC = () => {

  return (
    <section className="hero-gradient py-28 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[14px] text-[#7191FF]"> Leverage on Automation</p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-center mb-6">
          AI Models for
          <br />
          Business Solutions
        </h1>
        <p className="text-lg md:text-md text-white/80 mb-8 w-[60%] md:max-w-7xl mx-auto text-center">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </p>
        <a
          href="/get-started"
          className="text-[#03061D] bg-white rounded-[10px] px-10 py-2 font-semibold"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
