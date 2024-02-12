"use client";
import animationData from "@/public/circle.json";
import { Anim } from "./anim";

export function CircleAnimation(props: any) {
  return (
    <div {...props}>
      <Anim animationData={animationData} />
    </div>
  );
}
