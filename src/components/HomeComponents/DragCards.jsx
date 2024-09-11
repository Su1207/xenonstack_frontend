import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        ESTATE<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/image1.jpg"
        alt="Example image 1"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/image2.jpg"
        alt="Example image 2"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/image3.jpg"
        alt="Example image 3"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/image4.jpg"
        alt="Example image 4"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/image5.jpg"
        alt="Example image 5"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/image6.jpg"
        alt="Example image 6"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/image7.jpg"
        alt="Example image 7"
        rotate="10deg"
        top="25%"
        left="50%"
        className="w-44 md:w-68"
      />
      <Card
        containerRef={containerRef}
        src="/image8.jpg"
        alt="Example image 8"
        rotate="-8deg"
        top="55%"
        left="30%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/image9.jpg"
        alt="Example image 9"
        rotate="5deg"
        top="30%"
        left="75%"
        className="w-38 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src="/image10.jpg"
        alt="Example image 10"
        rotate="-4deg"
        top="60%"
        left="50%"
        className="w-32 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/image11.jpg"
        alt="Example image 11"
        rotate="15deg"
        top="10%"
        left="40%"
        className="w-50 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/image12.jpg"
        alt="Example image 12"
        rotate="-5deg"
        top="40%"
        left="65%"
        className="w-44 md:w-68"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
