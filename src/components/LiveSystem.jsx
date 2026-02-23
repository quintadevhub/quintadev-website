import { motion } from "framer-motion";

function LiveSystem() {
  return (
    <div className="relative w-full h-[420px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">

      {/* Pulsing Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-64 h-64 rounded-full bg-lime-400/10 blur-3xl"
      />

      {/* Rotating Ecosystem */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="relative w-[300px] h-[300px]"
      >
        {/* AI Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-lime-400/20 border border-lime-400 flex items-center justify-center text-sm font-semibold shadow-[0_0_30px_rgba(132,204,22,0.6)]">
            AI Core
          </div>
        </div>

        {[
          { label: "CRM", top: "0%", left: "50%" },
          { label: "Chatbot", top: "25%", left: "90%" },
          { label: "Web Apps", top: "75%", left: "90%" },
          { label: "Dashboards", top: "100%", left: "50%" },
          { label: "Automation", top: "75%", left: "0%" },
          { label: "Analytics", top: "25%", left: "0%" },
        ].map((item, index) => (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: item.top, left: item.left }}
          >
            <div className="px-4 py-2 text-xs rounded-full bg-black border border-lime-400/40 shadow-[0_0_15px_rgba(132,204,22,0.4)]">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LiveSystem;