import React, { useRef, useEffect } from "react";

const generateRandomBoxShadows = (n) => {
  let shadows = "";
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows += `${x}px ${y}px #FFF, `;
  }
  return shadows.slice(0, -2); // remove the last comma and space
};

const RandomBoxShadows = ({ count, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.boxShadow = generateRandomBoxShadows(count);
    }
  }, [count]);

  return (
    <div
      ref={ref}
      className="stars w-[1px] h-[1px] bg-transparent absolute top-0 left-0 -z-[2] delay-75 duration-1000"
    >
      {children}
    </div>
  );
};

export default RandomBoxShadows;
