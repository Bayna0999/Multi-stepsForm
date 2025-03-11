export const Body = ({ text, value, className }) => {
  return (
    <div className="flex flex-col gap-[12px] w-full h-[20px] ">
      <p>{text}</p>
      <input
        onChange={value}
        type="text"
        className={`border-[1px] border-solid border-[#0CA5E9] flex items-center p-3 rounded-[8px] ${className}`}
      />
      <p></p>
    </div>
  );
};
