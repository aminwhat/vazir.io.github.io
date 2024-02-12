"use client";
import { Anim } from "./anim";
import animationData from "@/public/person.json";

export function PersonAnimation(props: any) {
  return (
    <div {...props}>
      <Anim animationData={animationData} />
    </div>
  );
}
