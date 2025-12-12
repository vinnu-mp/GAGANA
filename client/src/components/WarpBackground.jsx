// src/components/WarpBackground.jsx
import React, { useEffect, useRef } from "react";
import "./WarpBackground.css"; // minimal styles (see below)

export default function WarpBackground() {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    // create canvas element if not present (we'll attach to a ref)
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ensure script is loaded only once
    const existing = document.querySelector('script[data-warp="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "/animations/warpspeed.min.js";
      script.async = true;
      script.dataset.warp = "true";
      script.onload = () => {
        // Warpspeed constructor may return an instance or attach to window.
        try {
          const Warp = window.WarpSpeed || window.WarpSpeed || window.Warp; // defensive
          // Try to create instance with canvas id first, else with element
          if (typeof window.WarpSpeed === "function") {
            instanceRef.current = new window.WarpSpeed(canvas.id || canvas);
          } else if (typeof window.Warp !== "undefined") {
            instanceRef.current = new window.Warp(canvas.id || canvas);
          } else if (typeof window.createWarp === "function") {
            instanceRef.current = window.createWarp(canvas.id || canvas);
          }
        } catch (e) {
          // If constructor throws, try calling a fallback init function that the script might provide
          console.warn("Warp init error (may still work):", e);
        }
      };
      document.body.appendChild(script);
    } else {
      // script already present: just initialize
      try {
        if (window.WarpSpeed) {
          instanceRef.current = new window.WarpSpeed(canvas.id || canvas);
        }
      } catch (e) {
        console.warn("Warp init error:", e);
      }
    }

    // return cleanup
    return () => {
      // call stop/destroy if available
      const inst = instanceRef.current;
      if (inst) {
        if (typeof inst.destroy === "function") inst.destroy();
        else if (typeof inst.stop === "function") inst.stop();
      }
      // optionally remove canvas contents
      if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <canvas
      id="warp-slide"
      ref={canvasRef}
      className="warp-canvas"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
