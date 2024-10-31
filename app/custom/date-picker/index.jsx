import React from "react";
import { DatePicker } from "antd";

export const DatePickerComp = ({
  onChange,
  value,
  placeHolder,
  size,
  className,
  defaultValue,
  style,
}) => {
  return (
    <DatePicker
      format="YYYY-MM-DD"
      onChange={onChange}
      value={value}
      placeholder={placeHolder}
      size={size}
      className={className}
      defaultValue={defaultValue}
      style={style}
    />
  );
};
