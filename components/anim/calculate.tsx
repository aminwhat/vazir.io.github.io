"use client";

import animationData from "@/public/calculate.json";
import { Anim } from "./anim";

export function CalculateAnimation(props: any) {
  return (
    <div {...props}>
      <Anim animationData={animationData} />
    </div>
  );
}
