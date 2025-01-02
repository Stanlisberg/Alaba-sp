import Image from "next/image";

const Marquee = () => {
  return (
    <marquee className=" bg-[#4256a6] text-white py-4 mt-16">
      <div className="flex flex-row gap-4 justify-center items-center">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
          width={27}
          height={27}
          alt="Dash"
          className="object-cover"
        />
        <p>Seamless sale with efficient inventory management</p>
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081471/Ellipse_141_jo5bcz.svg"
          width={25}
          height={25}
          alt="Dash"
          className="object-cover"
        />
        <p>Extreme power to the business owners</p>
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
          width={27}
          height={27}
          alt="Dash"
          className="object-cover"
        />
        <p>
          Get a quick snapshot of your current stock levels, recent orders, and
          inventory alerts
        </p>
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081471/Ellipse_141_jo5bcz.svg"
          width={25}
          height={25}
          alt="Dash"
          className="object-cover"
        />
        <p>Analyze sales trends and performance over time.</p>
      </div>
    </marquee>
  );
};

export default Marquee;
