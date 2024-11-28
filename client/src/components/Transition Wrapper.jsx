import React, { useState, useEffect } from "react";

const TransitionWrapper = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Activate the transition effect when the component is mounted
    setIsActive(true);
  }, []);

  return <div className={`page ${isActive ? "active" : ""}`}>{children}</div>;
};

export default TransitionWrapper;
