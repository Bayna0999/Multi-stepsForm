import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
      <div className=" bg-white rounded-xs w-[20%] h-[60%] flex flex-col px-[32px] py-[32px] justify-between">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}
