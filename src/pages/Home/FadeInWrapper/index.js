import React, { useEffect, useRef } from "react";
import "./styles.css";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

export const FadeInWrapper = ({ children }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          return entry.target.classList.add("isVisible");
      });
    }, options);
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="fadeInContainer" ref={domRef}>
      {children}
    </div>
  );
};
