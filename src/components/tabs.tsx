"use client";

import img1 from "../../public/img1.svg";
import img2 from "../../public/img2.svg";
import img3 from "../../public/analytics.svg";
import img4 from "../../public/img4.svg";
import img5 from "../../public/img5.svg";
import { useState } from "react";
import TabContent from "./TabContent";

export function TabComponent() {
  const [activeTab, setActiveTab] = useState("Market Prediction");

  const handleActiveTab = (item: string) => {
    setActiveTab(item);
  };

  const tabs = [
    { id: "1", label: "Market Prediction" },
    { id: "2", label: "Finance" },
    { id: "3", label: "Analytics" },
    { id: "4", label: "Content Generation" },
    { id: "5", label: "Customer Support" },
  ];

  return (
    <div className="md:w-full w-[90%] mx-auto flex md:my-20 flex-col gap-8 my-10">
      <div className="flex flex-col gap-2 w-full  mx-auto items-center my0">
        <h1 className="text-[#22263F] w-[80%] md:w-[40%] text-center font-semibold text-4xl md:text-[40px]">
          AI Models tailored for your business needs
        </h1>
        <p className="text-[#828282] w-[70%] text-center md:w-[45%]">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </p>
      </div>
      <div className="md:overflow-x-auto">
        <div className="flex md:w-[50%] md:overflow-hidden w-full overflow-scroll border border-solid border-[#E4E4E7] mt-0 md:mx-auto items-center rounded-lg bg-white p-1 shadow-sm">
          {tabs.map(({ label, id }) => {
            return (
              <div
                key={id}
                onClick={() => handleActiveTab(label)}
                className={`cursor-pointer ${
                  activeTab === label
                    ? "bg-[#03217F] text-white"
                    : "bg-white text-[#AAAAAA]"
                } rounded-[6px] text-[12px] md:text-[15px] md:px-3 px-2 whitespace-nowrap py-1 w-1/2 text-center`}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      {activeTab === "Market Prediction" && (
        <TabContent
          title="Market Prediction"
          content="Use AI insights for smarter business decisions and stay competitive."
          button="Learn More"
          image={img1}
        />
      )}
      {activeTab === "Finance" && (
        <TabContent
          title="Finance"
          content="Our AI models analyze financial data for confident investments."
          button="Learn More"
          image={img2}
          style="w-[350px]"
        />
      )}
      {activeTab === "Analytics" && (
        <TabContent
          title="Data Analytics"
          content="Transform data into insights with AI analytics that enhance decisions."
          button="Learn More"
          image={img3}
          style="w-[360px]"
        />
      )}
      {activeTab === "Content Generation" && (
        <TabContent
          title="Content Generation"
          content="Create quality content easily with AI that knows your brand and audience."
          button="Learn More"
          image={img4}
          style="w-[380px]"
        />
      )}
      {activeTab === "Customer Support" && (
        <TabContent
          title="Market Prediction"
          content="Use AI chatbots for instant, personalized customer support."
          button="Learn More"
          image={img5}
        />
      )}
    </div>
  );
}
