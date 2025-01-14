"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer"
    >
      <Image
        className="hidden md:block "
        src="/images/logo-removebg-preview.svg"
        height="50"
        width="50"
        alt="Logo"
      />
      <span className="travella">Sweet Hotel</span>
    </div>
  );
};

export default Logo;