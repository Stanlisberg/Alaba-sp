import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-full px-32 custom">
      <section className="max-w-[1200px] mx-auto flex flex-col gap-5 justify-center items-center">
        <div data-aos="fade-left">
          <p className="text-center text-[25px] text-[#0f1235]">
            Subscribe to our newsletter
          </p>
        </div>
        <div data-aos="fade-right" className="flex flex-col md:flex-row gap-5">
          <input className="border border-black px-10 py-1 rounded-lg" />
          <button className="bg-[#0f1235] text-white text-[14px] px-8 py-2 md:py-0 rounded-lg">
            Subscribe
          </button>
        </div>
      </section>
      <div className="grid grid-cols-12 w-full md:max-w-[1100px] px-5 mx-auto text-[12px] pb-10 md:20 gap-10 mt-44">
        <div className="col-span-10 md:col-span-4 flex flex-col gap-10 ">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[150px] object-cover"
          />
          <div className="flex flex-col gap-3">
            <button className="px-4 py-2 w-[40%] text-[#4256a6] font-bold border border-[#4256a6] rounded-lg text-center">
              Sign up
            </button>
            <button className="px-4 py-2 w-[40%] text-white font-bold border bg-[#4256a6] rounded-lg text-center">
              My Dashboard
            </button>
          </div>
        </div>
        <div className="hidden col-span-12 md:col-span-4 md:flex flex-col gap-16 md:gap-32">
          <div></div>
          <div>
            <div className="flex flex-row gap-3">
              <div className="border-b border-black w-10"></div>
              <div className="text-[10px]">Copyright 2024</div>
              <div className="border-b border-black w-10"></div>
            </div>
            <div className="flex flex-row gap-4 items-center mt-2 pl-12">
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706952/Vector_xkh3xa.svg"
                width={15}
                height={15}
                alt="Dash"
                className="w-[16px]object-cover "
              />
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
                width={25}
                height={25}
                alt="Dash"
                className="w-[16px] object-cover"
              />
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
                width={25}
                height={25}
                alt="Dash"
                className="w-[16px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-8 md:col-span-2 flex flex-col gap-10 md:gap-20">
          <div className="font-bold text-base">Services</div>
          <ul>
            <li>Sales</li>
            <li>Inventory</li>
            <li>CRP</li>
            <li>Reporting</li>
          </ul>
        </div>
        <div className="col-span-8 md:col-span-2 flex flex-col gap-10 md:gap-20">
          <div className="font-bold text-base">Social</div>
          <ul>
            <li>Privacy policies</li>
            <li>Terms</li>
            <li>Faqs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="pb-5 justify-center items-center md:hidden flex flex-col gap-10 md:gap-32">
        <div>
          <div className="flex flex-row gap-3">
            <div className="border-b border-black w-10"></div>
            <div className="text-[10px]">Copyright 2024</div>
            <div className="border-b border-black w-10"></div>
          </div>
          <div className="flex flex-row gap-4 items-center mt-2 pl-12">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706952/Vector_xkh3xa.svg"
              width={15}
              height={15}
              alt="Dash"
              className="w-[16px] object-cover "
            />
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
              width={25}
              height={25}
              alt="Dash"
              className="w-[16px] object-cover "
            />
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
              width={25}
              height={25}
              alt="Dash"
              className="w-[16px] object-cover "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
