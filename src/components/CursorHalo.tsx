"use client"; // Si usas Next.js app router
import { useEffect, useState } from "react";

export default function CursorHalo() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-blue-400/5 blur-3xl"></div>
    </div>
  );
}
