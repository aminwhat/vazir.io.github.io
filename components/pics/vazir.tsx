import Image from "next/image";

export default function VazirPic({ ...props }) {
  return (
    <div>
      <Image priority src="vazir.svg" alt="Vazir logo" {...props} />
    </div>
  );
}
