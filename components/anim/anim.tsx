"use client";
import Lottie from "lottie-react";

export function Anim({ animationData }: { animationData: any }) {
  const defaultOptions = {
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie animationData={animationData} loop={true} autoplay={true} />;
}
