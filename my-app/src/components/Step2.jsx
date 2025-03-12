import { Body } from "./Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const Step2 = ({ count, backclick, onclick }) => {
  return (
    <div>
      <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
        <div className=" bg-white rounded-xs w-[480px] h-[655px] flex flex-col px-[32px] py-[32px] justify-between">
          <Header></Header>
          <Body text={"Email "} type={"email"} />
          <Body text={"Phone number "} type={"tel"} />
          <Body text={"Password "} type={"password"} />
          <Body text={"Confirm password "} />
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
