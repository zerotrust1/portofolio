"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "auto" | "none";
  blur?: boolean;
  scale?: boolean;
};

export default function Reveal({
  children,
  className = "",
  threshold = 0.08,
  rootMargin = "0px 0px -30px 0px",
  delay = 0,
  duration = 650,
  once = false,
  direction = "auto",
  blur = true,
  scale = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's accessibility preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if element entered from above or below
            if (entry.boundingClientRect.top < 0) {
              setScrollDirection("up");
            } else {
              setScrollDirection("down");
            }
            setVisible(true);
            if (once) {
              obs.unobserve(entry.target);
            }
          } else {
            if (!once) {
              if (entry.boundingClientRect.top < 0) {
                setScrollDirection("up");
              } else {
                setScrollDirection("down");
              }
              setVisible(false);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  const getTransform = () => {
    if (visible) return "translate3d(0, 0, 0)" + (scale ? " scale(1)" : "");

    let activeDir = direction;
    if (direction === "auto") {
      activeDir = scrollDirection === "up" ? "down" : "up";
    }

    const scaleTransform = scale ? " scale(0.98)" : "";

    switch (activeDir) {
      case "up":
        return `translate3d(0, 24px, 0)${scaleTransform}`;
      case "down":
        return `translate3d(0, -24px, 0)${scaleTransform}`;
      case "left":
        return `translate3d(24px, 0, 0)${scaleTransform}`;
      case "right":
        return `translate3d(-24px, 0, 0)${scaleTransform}`;
      case "none":
        return `translate3d(0, 0, 0)${scaleTransform}`;
      default:
        return `translate3d(0, 24px, 0)${scaleTransform}`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: visible ? 1 : 0,
        filter: blur ? (visible ? "blur(0px)" : "blur(4px)") : undefined,
        transformOrigin: "center center",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: visible && delay ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
