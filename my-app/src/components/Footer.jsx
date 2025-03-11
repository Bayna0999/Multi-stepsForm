export const Footer = ({ text, className, count, onclick, backclick }) => {
  return (
    <div className="w-[100%] h-[44px] flex gap-[20px] ">
      {count > 1 && (
        <button
          className={` bg-white w-[128px] h-[44px] border-[1px] border-[#CBD5E1] rounded-[6px] ${className}`}
          onClick={backclick}
        >
          Back
        </button>
      )}
      <button
        className="bg-black w-full h-full rounded-md text-white "
        onClick={onclick}
      >
        Continue {count}/3
      </button>
    </div>
  );
};
