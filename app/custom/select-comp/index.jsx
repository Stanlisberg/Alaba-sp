import React from "react";
import { Select } from "antd";

export const CustomSelect = ({
  options,
  onChange,
  labelText,
  defaultValue,
  errorMessage,
  value,
  style,
  size,
  className,
}) => {
  return (
    <div className={className}>
      {labelText && <label className="">{labelText}</label>}
      <Select
        placeholder="Please select"
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        value={value}
        style={style}
        size={size}
        className={className}
      />
      {errorMessage && <p className="">{errorMessage}</p>}
    </div>
  );
};
