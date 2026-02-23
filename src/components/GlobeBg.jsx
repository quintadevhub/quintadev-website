import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

function GlobeBg() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    if (!vantaEffect) {
      vantaEffect = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        backgroundColor: 0x000000,
        color: 0x84cc16,   // lime glow
        color2: 0xffffff,
        size: 0.9,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -top-20"></div>;
}

export default GlobeBg;
