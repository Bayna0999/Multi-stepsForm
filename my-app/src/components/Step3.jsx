import { Body } from "./Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const Step3 = ({ count, backclick, onclick }) => {
  return (
    <div>
      <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
        <div className=" bg-white rounded-xs w-[480px] h-[655px] flex flex-col px-[32px] py-[32px] justify-between">
          <Header></Header>
          <Body text={"Date of birth "} type={"date"} />
          <p className="flex flex-col w-full h-[20px] ">Profile image</p>
          <div className="flex flex-col gap-[12px] w-full h-[180px] bg-[#7f7f80] justify-center items-center">
            <div className="rounded-md flex flex-col items-center h-[56px] w-full gap-[8px] justify-center ">
              <p>Add image</p>
            </div>
          </div>
          <Footer
            count={count}
            backclick={backclick}
            onclick={onclick}
          ></Footer>
        </div>
      </div>
    </div>
  );
};
