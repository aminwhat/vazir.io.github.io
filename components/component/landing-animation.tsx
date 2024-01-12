"use client";

import Lottie from "lottie-react";
import animationData from "@/public/landing_animation.json";

export function LandingAnimation(props: any) {
  const defaultOptions = {
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div {...props}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
