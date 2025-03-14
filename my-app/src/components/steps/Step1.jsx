import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const Step1 = ({ count, backclick, onclick, onchange }) => {
  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center">
      <div className=" bg-white rounded-xs w-[480px] h-[655px] flex flex-col px-[32px] py-[32px] justify-between">
        <Header></Header>
        <Body
          text={"First name "}
          type={"text"}
          value={onchange}
          name="Firstname"
        />
        <Body text={"Last name "} value={onchange} name="Lastname" />
        <Body text={"Username"} value={onchange} name="Username" />
        <Footer count={count} backclick={backclick} onclick={onclick} />
      </div>
    </div>
  );
};
