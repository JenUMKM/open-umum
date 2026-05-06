"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: true,    // animasi hanya jalan sekali saat scroll
      easing: "ease-out-cubic",
    });
  }, []);

  return null;
};