"use client";

import React, { useState, useEffect, useMemo } from "react";
import Landing from "@/app/(component)/dashboard/page";
import { DatePickerComp } from "@/app/custom/date-picker";
import { CustomSelect } from "@/app/custom/select-comp";
import {
  BlueCounter,
  GreenCounter,
  GreyCounter,
  PinkCounter,
  PurpleCounter,
} from "@/app/custom/counter-comp";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ExportButton } from "@/app/custom/export-comp";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useGetAnalyticsQuery } from "@/app/redux/services/auth/index.";
import { GetFromLocalStorage } from "@/app/utils/helpers";

function SalesReport() {
  const [date, setDate] = useState();
  const [totalSales, setTotalSales] = useState();
  const [totalProfit, setTotalProfit] = useState();
  const [counterSales, setCounterSales] = useState();
  const [counterProfit, setCounterProfit] = useState();
  // const { data: getAnalytics } = useGetAnalyticsQuery(
  //   "ezegwukingston@gmail.com"
  // );
  const business_email = GetFromLocalStorage("Email");
  const token = GetFromLocalStorage("Token");

  const todayDate = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear().toString();
  const myDate = `${day}${todayDate(day)} ${month} ${year}`;

  const salesData = [
    { date: myDate, sales: "Sales Report" },
    { date: myDate, sales: "Sales Report" },
    { date: myDate, sales: "Sales Report" },
    { date: myDate, sales: "Sales Report" },
    { date: myDate, sales: "Sales Report" },
    { date: myDate, sales: "Sales Report" },
  ];
  // const { dateData, totalSales, totalProfit } = useMemo(() => {
  //   // if (!getAnalytics?.data || Array.isArray(getAnalytics?.data)) {
  //   //   return { dateData: [], totalSales: [], totalProfit: [] };
  //   // }

  //   const dateData = getAnalytics?.data?.map((item) => item.date);
  //   const totalSales = getAnalytics?.data?.map((item) => item.total_sales);
  //   const totalProfit = getAnalytics?.data?.map((item) => item.total_profit);
  //   return { dateData, totalSales, totalProfit };
  // }, [getAnalytics?.data]);

  // const dateData = getAnalytics?.data?.map((item) => item.date);
  // const totalSales = getAnalytics?.data?.map((item) => item.total_sales);
  // const totalProfit = getAnalytics?.data?.map((item) => item.total_profit);

  // console.log(dateData);
  // console.log(totalSales);
  // console.log(totalProfit);

  // const [state, setState] = useState({
  //   options: {
  //     chart: {
  //       id: "currency-rate-graph",
  //     },
  //     xaxis: {
  //       categories: [],
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series-1",
  //       data: [],
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   setState({
  //     options: {
  //       chart: {
  //         id: "currency-rate-graph",
  //       },
  //       xaxis: {
  //         // categories: [
  //         //   "2020-20-20",
  //         //   "2021-02-04",
  //         //   "2022-10-05",
  //         //   "2023",
  //         //   "2024",
  //         //   "2025",
  //         //   "2026",
  //         //   "2027",
  //         // ],
  //         categories: dateData,
  //       },
  //       stroke: {
  //         curve: "smooth",
  //       },
  //       colors: ["#7041de", "#3CD856", "#EF4444"],
  //     },
  //     series: [
  //       {
  //         name: "Total Sales",
  //         // data: totalSales,
  //         data: [100, 300],
  //       },

  //       {
  //         name: "Total Profit",
  //         // data: totalProfit,
  //         data: [200, 900],
  //       },

  //       {
  //         name: "Customer Satisfaction",
  //         // data: [200, 700, 300, 900],s
  //       },
  //     ],
  //   });
  // }, []);

  // console.log(totalProfit);
  // console.log(totalSales);
  // console.log(dateData);

  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: "api-data-chart",
      toolbar: { show: true },
    },
    xaxis: {
      categories: [],
    },
    stroke: { curve: "smooth" },
    dataLabels: { enabled: false },
    // title: {
    //   text: "API Data Chart",
    //   align: "center",
    //   style: { fontSize: "20px" },
    // },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://alaba-gstm.onrender.com/alabapi/daily_sales_profits/${business_email}/`;
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        };
        const analytics = await fetch(url, {
          method: "GET",
          headers,
        });

        const responseData = await analytics.json();

        const date = responseData?.data.map((item) => item.date);
        const totalSales = responseData?.data.map((item) => item.total_sales);
        const totalProfit = responseData?.data.map((item) => item.total_profit);

        const totalSalesCounter = responseData?.data.reduce(
          (sum, item) => sum + item.total_sales,
          0
        );
        const totalProfitCounter = responseData?.data.reduce(
          (sum, item) => sum + item.total_profit,
          0
        );

        setCounterSales(totalSalesCounter);
        setCounterProfit(totalProfitCounter);

        setSeries([
          { name: "Total Sales", data: totalSales },
          { name: "Total Profit", data: totalProfit },
        ]);
        setOptions((prev) => ({
          ...prev,
          xaxis: { categories: date },
        }));

        console.log(responseData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    }

    fetchData();
  }, []);

  const grossSales = Number(counterSales) + Number(counterProfit);
  const grossPercent = (counterProfit / counterSales) * 100;
  const netProfitPercent = (counterProfit / grossSales) * 100;
  const netSalesPercent = (counterSales / grossSales) * 100;
  const discount = counterProfit - counterSales;
  const discountPercent = (counterProfit - counterSales) / counterProfit;
  const refund = grossSales - counterSales;
  const refundPercent = (refund / grossSales) * 100;

  return (
    <Landing>
      <div className="flex flex-col mt-2 gap-4 md:flex-row lg:justify-between items-center ">
        <DatePickerComp
          value={date}
          onChange={(date) => setDate(date)}
          style={{ fontSize: "16px" }}
          className="w-[320px] lg:w-[400px]"
        />
        <CustomSelect
          labelText=""
          value={"Days"}
          errorMessage=""
          options=""
          className="w-[320px] lg:w-[400px]"
          size="medium"
        />
        <CustomSelect
          labelText=""
          value={"All Employee"}
          errorMessage=""
          options=""
          size="medium"
          className="hidden md:block w-[320px] lg:w-[400px]"
        />
      </div>
      <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8">
        <div className="flex px-10 justify-between items-center pt-5">
          <div>
            <h3 className="text-[1rem] text-[#05004E] font-[600]">
              Today&apos;s Sales
            </h3>
            <p className="text-[0.7rem] text-[#737791]">Sales Summary</p>
          </div>
          <ExportButton fileName={"Staff List"} csvData={""} headers={""} />
        </div>
        <div className="flex w-full gap-3 px-10 pt-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              620: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              1140: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              1200: {
                spaceBetween: 15,
                slidesPerView: 3,
              },

              1400: {
                spaceBetween: 15,
                slidesPerView: 4,
              },
              1600: {
                spaceBetween: 15,
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => {}}
          >
            <SwiperSlide>
              <PinkCounter
                icon={
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1730227287/Icon_e6c3qy.svg"
                }
                count={`₦${Number(grossSales).toLocaleString() ?? 0}`}
                text={"Gross Sales"}
                subText={`${grossPercent?.toFixed(2)}% from yesterday`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GreyCounter
                icon={
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1730236158/Icon_1_fjyhv1.svg"
                }
                count={`₦${Number(refund).toLocaleString() ?? 0}`}
                text={"Refund"}
                subText={`${refundPercent.toFixed(2)}% from yesterday`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GreenCounter
                icon={
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1730236211/Icon_4_bunvun.svg"
                }
                count={`₦${Number(discount)?.toLocaleString() ?? 0}`}
                text={"Discount"}
                subText={`${discountPercent.toFixed(2)}% from yesterday`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PurpleCounter
                icon={
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1730236097/Icon_3_swkeds.svg"
                }
                count={`₦${Number(counterProfit)?.toLocaleString() ?? 0}`}
                text={"Net Profit"}
                subText={`${netProfitPercent.toFixed(2)}% from yesterday`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlueCounter
                icon={
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1730227287/Icon_e6c3qy.svg"
                }
                count={`₦${Number(counterSales)?.toLocaleString() ?? 0}`}
                text={"Net Sales"}
                subText={`${netSalesPercent.toFixed(2)}% from yesterday`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="lg:flex-row flex flex-col w-full mt-5 gap-5">
        <div className="w-full lg:w-[72%] bg-[#F8F9FA] rounded-lg">
          <div className="flex px-10 justify-between items-center pt-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                Today&apos;s Sales
              </h3>
              <p className="text-[0.7rem] text-[#737791]">Sales Summary</p>
            </div>
            <ExportButton fileName={"Staff List"} csvData={""} headers={""} />
          </div>
          <div className="mt-4">
            <Chart options={options} series={series} type="line" height={200} />
          </div>
        </div>
        <div className="w-full lg:w-[28%] bg-[#F8F9FA] px-4 py-6 rounded-lg">
          <h1 className="text-[1rem] text-[#05004E] font-[600]">Exports</h1>
          {salesData.map((item, index) => (
            <div
              key={index}
              className="flex mt-2 flex-row justify-between items-center border-t pt-2 border-[#B6B6B6]"
            >
              <div className="text-[#425166] text-[14px]" key={index}>
                {item.date}
              </div>
              <div className="bg-[#d6eaf2]  text-[#0F1235] text-[13px] rounded-[10px] px-4 py-1">
                {item.sales}
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <button className="bg-[#4256A6] text-[#fff] text-[14px] rounded-[10px] mt-10 px-12 py-1">
              Load more
            </button>
          </div>
        </div>
      </div>
    </Landing>
  );
}

export default SalesReport;
