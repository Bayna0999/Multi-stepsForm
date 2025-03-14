"use client";
import { Step1 } from "@/components/steps/Step1";
import { Step2 } from "@/components/steps/Step2";
import { Step3 } from "@/components/steps/Step3";
import { Step4 } from "@/components/steps/Step4";
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
  const [inputValue, setInputValue] = useState(UserData);
  const [error, setError] = useState("");
  const Stepcount = [Step1, Step2, Step3, Step4][count];
  const [data, setData] = useState("");

  const [handleOnChange, setHandleOnChange] = useState("");

  const test = (event) => {
    setHandleOnChange(event.target.value);
  };
  console.log(handleOnChange);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Stepcount
      onchange={handleInputChange}
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
