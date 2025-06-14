import React, { useEffect, useState } from "react";

const BreakpointChecker = () => {
  const [breakpoint, setBreakpoint] = useState("");

  const breakpoints = [
    { name: "2xl", min: 1536 },
    { name: "xl", min: 1280 },
    { name: "lg", min: 1024 },
    { name: "md", min: 768 },
    { name: "sm", min: 640 },
  ];

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    const matched = breakpoints.find((bp) => width >= bp.min);
    setBreakpoint(matched ? matched.name : "below sm");
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return (
    <div className="p-4 text-xl font-bold">
      Current breakpoint: <span className="text-blue-500">{breakpoint}</span>
    </div>
  );
};

export default BreakpointChecker;
