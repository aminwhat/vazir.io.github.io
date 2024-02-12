"use client";

export default function NotFound() {
  const emoji = Emoji();
  return (
    <center className="pt-40 pb-36">
      <div className="pb-9 md:text-9xl max-[760px]:text-5xl text-gray-500">
        {emoji}
      </div>
      <div className="md:text-4xl max-[760px]:text-3xl">
        <h1 className="pt-9">صفحه مورد نظر یافت نشد</h1>
        <h1 className="pt-9 text-red-500">404</h1>
      </div>
    </center>
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
