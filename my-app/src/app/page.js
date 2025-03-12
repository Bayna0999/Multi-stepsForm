"use client";
import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const Stepcount = [Step1, Step2, Step3][count];
  return (
    // <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
    //   <div className=" bg-white rounded-xs w-[480px] h-[655px] flex flex-col px-[32px] py-[32px] justify-between">
    //     <Header></Header>
    //     <Body
    //       text={"First name "}
    //       value={setInputValue}
    //       className={error}
    //       type={"tel"}
    //     />
    //     <Body text={"Last name "} />
    //     <Body text={"Username"} />
    //     <Footer
    //       count={count}
    //       onclick={() => {
    //         inputValue.target.value.length < 4 && setError("border-red-500");
    //         setCount(count + 1);
    //       }}
    //       backclick={() => {
    //         setCount(count - 1);
    //       }}
    //     ></Footer>
    //   </div>
    // </div>
    <Stepcount
      count={count + 1}
      onclick={() => {
        setCount(count + 1);
      }}
      backclick={() => {
        setCount(count - 1);
      }}
    />
  );
}
