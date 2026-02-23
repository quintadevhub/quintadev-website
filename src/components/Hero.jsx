import GlobeBg from "./GlobeBg";
import { useNavigate } from "react-router-dom";

function Hero({ openDemo }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 3D Globe Background */}
      <GlobeBg />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto text-white">

        {/* Badge */}
        <p className="inline-block mb-8 px-6 py-3 bg-white/10 rounded-full text-sm md:text-base backdrop-blur-md">
          ● Introducing AI-Driven Automation
        </p>

        {/* Main Heading */}
        <h1
          className="font-semibold leading-[1.08] tracking-tight
                     text-[34px]
                     sm:text-[44px]
                     md:text-[58px]
                     lg:text-[72px]"
        >
          <span className="block">Automation problem solvers</span>
          <span className="block">for growing businesses</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-sm sm:text-base md:text-lg
                     text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Reduce manual work, automate lead handling, and fix broken workflows
          with AI-driven systems that scale with your business.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

          {/* Get Demo Button */}
          <button
            onClick={openDemo}
            className="px-8 py-3 md:px-10 md:py-4
                       bg-lime-400 text-black
                       font-semibold rounded-full
                       text-sm md:text-base
                       hover:scale-105 transition duration-300"
          >
            Get a demo
          </button>

          {/* Explore Solutions Button */}
          <button
            onClick={() => navigate("/solutions")}
            className="px-8 py-3 md:px-10 md:py-4
                       bg-gray-200 text-black
                       font-semibold rounded-full
                       text-sm md:text-base
                       hover:scale-105 transition duration-300"
          >
            Explore solutions
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;