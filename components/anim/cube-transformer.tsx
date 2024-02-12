"use client";
import animationData from "@/public/cube-transformer.json";
import { Anim } from "./anim";

export function CubeTransformerAnimation(props: any) {
  return (
    <div {...props}>
      <Anim animationData={animationData} />
    </div>
  );
}
