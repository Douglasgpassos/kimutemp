"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";


function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
    <div className="w-full lg:container lg:mx-auto">
      <Image
        width={1024}
        height={400}
        src="/image/blog-background.png"
        alt="credit cards"
        className="h-96 w-full object-cover lg:h-[21rem]"
      />
    </div>
  </header>
  );
}
export default Hero;
