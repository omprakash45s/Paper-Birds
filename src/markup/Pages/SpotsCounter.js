import React, { useState, useEffect, useRef } from 'react';

const  SpotsCounter = () => {
  const [count, setCount] = useState(80);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  // 1. Detect when the element is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If element is visible and animation hasn't run yet
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  // 2. Run the countdown animation only when 'hasStarted' is true
  useEffect(() => {
    if (hasStarted) {
      let start = 80;
      const end = 50;
      
      const timer = setInterval(() => {
        if (start > end) {
          start -= 1;
          setCount(start);
        } else {
          clearInterval(timer);
        }
      }, 50); // Speed of animation

      return () => clearInterval(timer);
    }
  }, [hasStarted]);

  return (
    <div 
      ref={elementRef}
      style={{
        background: "linear-gradient(135deg, #48af53 0%, #3a8f42 100%)",
        display: "inline-block",
        padding: "15px 40px",
        borderRadius: "50px",
        boxShadow: "0 8px 25px rgba(72,175,83,0.3)",
        animation: "pulse 2s infinite"
      }}
    >
      <p style={{ 
        color: "white", 
        margin: "0",
        fontSize: "18px",
        fontWeight: "600",
        letterSpacing: "0.5px"
      }}>
        <i className="fa fa-clock-o" style={{ marginRight: "10px" }}></i>
        Only 
        <span style={{ 
          fontSize: "24px", 
          fontWeight: "700",
          padding: "0 8px",
          display: "inline-block",
          minWidth: "40px",
          textAlign: "center"
        }}>
          {count}
        </span> 
        Spots Available!
      </p>
    </div>
  );
};

export default SpotsCounter;