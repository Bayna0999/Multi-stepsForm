"use client";
import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import Image from "next/image";
import { useState } from "react";

const UserData = {
  Firstname: "",
  Lastname: "",
  Username: "",
  Email: "",
  Phonenumber: "",
  Password: "",
  Dateofbirth: "",
};

export default function Home() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const Stepcount = [Step1, Step2, Step3][count];

  const [handleOnChange, setHandleOnChange] = useState("");

  return (
    <Stepcount
      onchange={setHandleOnChange}
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
