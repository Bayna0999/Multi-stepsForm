"use client";
import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
      <div className=" bg-white rounded-xs w-[480px] h-[655px] flex flex-col px-[32px] py-[32px] justify-between">
        <Header></Header>
        <Body text={"First name "} value={setInputValue} className={error} />
        <Body text={"Last name "} />
        <Body text={"Username"} />
        <Footer
          count={count}
          onclick={() => {
            inputValue.target.value.length < 4 && setError("border-red-500");
            setCount(count + 1);
          }}
          backclick={() => {
            setCount(count - 1);
          }}
        ></Footer>
      </div>
    </div>
  );
}
