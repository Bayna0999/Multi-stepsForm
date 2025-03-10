export const Footer = ({ text, className }) => {
  return (
    <div className="w-[100%] h-[10%] flex gap-[20px] ">
      <button className={`${className}`}></button>
      <button className="bg-black w-full h-full rounded-md text-white">
        Continue{text}
      </button>
    </div>
  );
};
