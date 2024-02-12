"use client";
import Lottie from "lottie-react";
import animationData from "@/public/features_animation.json";

export function FeaturesAnimation(props: any) {
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
