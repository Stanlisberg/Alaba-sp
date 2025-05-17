import React from "react";
import { CSVLink } from "react-csv";
import { BiExport } from "react-icons/bi";

export const ExportButton = ({ csvData, headers, fileName }) => {
  return (
    <CSVLink data={csvData} headers={headers} filename={`${fileName}.csv`}>
      <button className="ExportButton">
        <BiExport />
        Export
      </button>
    </CSVLink>
  );
};

export const CustomButton = ({ style, name, icon, onClick }) => {
  return (
    <div className="flex gap2" onClick={onClick}>
      <button
        style={style}
        className=" text-[#fff] text-[13px] rounded-md flex justify-center gap-2 items-center py-1 px-3"
      >
        {icon}
        {name}
      </button>
    </div>
  );
};
