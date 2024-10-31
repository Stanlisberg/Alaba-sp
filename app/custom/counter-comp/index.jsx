import Image from "next/image";
import React from "react";

export const PinkCounter = ({ icon, count, text, subText, width = true }) => {
  return (
    <div className="h-[160px] w-[200px] overflow-hidden rounded-[12px] ">
      <div className="Background-pink">
        <div className="flex flex-col gap-1 px-6 py-6">
          <Image src={icon} width="35" height="20" />
          <h1 className="text-[#151D48] text-[1.5rem] font-[600]">{count}</h1>
          <h3 className="text-[#425166] text-[0.9rem] font-[500]">{text}</h3>
          <h4 className="text-[#4079ED] text-[0.7rem] font-[500]">{subText}</h4>
        </div>
      </div>
    </div>
  );
};

export const GreyCounter = ({ icon, count, text, subText, width = true }) => {
  return (
    <div className="h-[160px] w-[200px] overflow-hidden rounded-[12px] ">
      <div className="Background-grey">
        <div className="flex flex-col gap-1 px-6 py-6">
          <Image src={icon} width="35" height="20" />
          <h1 className="text-[#151D48] text-[1.5rem] font-[600]">{count}</h1>
          <h3 className="text-[#425166] text-[0.9rem] font-[500]">{text}</h3>
          <h4 className="text-[#4079ED] text-[0.7rem] font-[500]">{subText}</h4>
        </div>
      </div>
    </div>
  );
};

export const BlueCounter = ({ icon, count, text, subText, width = true }) => {
  return (
    <div className="h-[160px] w-[200px] overflow-hidden rounded-[12px] ">
      <div className="Background-blue">
        <div className="flex flex-col gap-1 px-6 py-6">
          <Image src={icon} width="35" height="20" />
          <h1 className="text-[#fff] text-[1.5rem] font-[600]">{count}</h1>
          <h3 className="text-[#efeefe] text-[0.9rem] font-[500]">{text}</h3>
          <h4 className="text-[#4079ED] text-[0.7rem] font-[500]">{subText}</h4>
        </div>
      </div>
    </div>
  );
};

export const GreenCounter = ({ icon, count, text, subText, width = true }) => {
  return (
    <div className="h-[160px] w-[200px] overflow-hidden rounded-[12px] ">
      <div className="Background-green">
        <div className="flex flex-col gap-1 px-6 py-6">
          <Image src={icon} width="35" height="20" />
          <h1 className="text-[#151D48] text-[1.5rem] font-[600]">{count}</h1>
          <h3 className="text-[#425166] text-[0.9rem] font-[500]">{text}</h3>
          <h4 className="text-[#4079ED] text-[0.7rem] font-[500]">{subText}</h4>
        </div>
      </div>
    </div>
  );
};

export const PurpleCounter = ({ icon, count, text, subText, width = true }) => {
  return (
    <div className="h-[160px] w-[200px] overflow-hidden rounded-[12px] ">
      <div className="Background-purple">
        <div className="flex flex-col gap-1 px-6 py-6">
          <Image src={icon} width="35" height="20" />
          <h1 className="text-[#151D48] text-[1.5rem] font-[600]">{count}</h1>
          <h3 className="text-[#425166] text-[0.9rem] font-[500]">{text}</h3>
          <h4 className="text-[#4079ED] text-[0.7rem] font-[500]">{subText}</h4>
        </div>
      </div>
    </div>
  );
};
