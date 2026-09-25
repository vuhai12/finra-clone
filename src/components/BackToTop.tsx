"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-[20px]
        right-[20px]
        z-[9999]
        flex
        h-[44px]
        w-[44px]
        items-center
        justify-center
        rounded-full
        border
        border-[#b65ffc]
        bg-[#b65ffc]
        p-0
        text-white
        transition-all
        duration-300
        ease-in-out

        ${
          isVisible
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-[50px] opacity-0"
        }

        hover:-translate-y-[5px]
        hover:bg-white
        hover:text-[#b65ffc]
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
