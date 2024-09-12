"use client";
import VazirPic from "@/components/pics/vazir";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col w-full h-full items-center justify-center pt-4">
      <VazirPic width={85} height={85} />
      <EmojiPage />
      <h1 className="pt-10 text-xl font-bold text-gray-500">
        It's Building Right now...
      </h1>
    </div>
  );
}

function EmojiPage() {
  const [emoji, setEmoji] = useState<string>("...");

  useEffect(() => {
    setEmoji(Emoji());
  }, []);

  return (
    <div className="pt-28 pb-9 md:text-9xl max-[760px]:text-5xl text-gray-500">
      {emoji}
    </div>
  );
}

function Emoji(): string {
  const emojis = [
    "(>_<)",
    "(˚Δ˚)b",
    "(·_·)",
    "(;-;)",
    "(^-^*)",
    "(≥o≤)",
    "(^_^)b",
    "(o^^)o",
    "\\(^Д^)/",
    "\\(o_o)/",
    "(·.·)",
    "(ㆆ_ㆆ)",
    "¯\\_(ツ)_/¯",
    "ಠ_ಠ",
    "◉_◉",
    "(ʘᗩʘ')",
    "¯\\(°_o)/¯",
    "(¬_¬)",
    "(='X'=)",
  ];
  var emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return emoji;
}
