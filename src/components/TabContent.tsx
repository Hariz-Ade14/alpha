import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type props = {
  title: string;
  content: string;
  button: string;
  image: string;
  style?: string;
};
const TabContent = ({ title, content, button, image, style }: props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease",
      anchorPlacement: "top-bottom",
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });
  });
  return (
    <div data-aos="flip-right" className="flex md:flex-row flex-col rounded-[10px] bg-[#F6FAF3] py-0 md:items-center px-0 gap-10 md:w-[80%] mx-auto">
      <div className="flex flex-col ms-10 md:pt-0 pt-10 md:w-1/2 w-[70%] gap-4">
        <h1 className={` text-[#828282] md:mt-0 font-semibold text-[20px]`}>{title}</h1>
        <p
          className={`md:${style} text-[#22263F] font-semibold leading-tight text-[20px] md:text-[35px]`}
        >
          {content}
        </p>
        <button className="bg-[#03217F] text-white rounded-[6px] text-[12px] px-5 whitespace-nowrap py-2.5 md:w-[35%] w-[55%] text-center">
          {button}
        </button>
      </div>
      <img src={image} alt="" className="md:mt-10" />
    </div>
  );
};

export default TabContent;
