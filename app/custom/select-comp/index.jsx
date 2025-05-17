import React from "react";
import { Select } from "antd";

export const CustomSelect = ({
  options,
  onChange,
  labelText,
  defaultValue,
  value,
  style,
  size,
  className,
}) => {
  return (
    <div className="flex flex-col text-start gap-2 w-full">
      {labelText && (
        <label className="text-[15px] leading-[20px] font-[500] text-[#161616]">
          {labelText}
        </label>
      )}
      <Select
        placeholder="Please select"
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        value={value}
        style={style}
        className={className}
        size={size}
      />
    </div>
  );
};
