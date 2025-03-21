import React from "react";
import Logomark from "../../public/Logomark.svg";
import circloss from "../../public/circloss.svg";
import catalog from "../../public/catalog.svg";
import quotient from "../../public/quotient.svg";
import layers from "../../public/layers.svg";

const ClientLogos: React.FC = () => {
  return (
    <section className=" py-6 overflow-hidden">
      <div className="flex flex-col gap-6 px-6">
        <div className="text-center">
          <p className="text-navy-700 text-[#667085] md:text-lg">
            Join 4,000+ companies already growing
          </p>
        </div>

        <div className="flex moving-element flex-nowrap justify-between w-full items-center gap-x-12">
          <div className="flex items-center">
            <img src={layers} alt="Layers Logo" className="" />
            <span className="text-2xl font-semibold text-navy-700 ">
              Layers
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img src={Logomark} alt="Sisyphus Logo" className="" />
            <span className="text-2xl font-semibold text-navy-700">
              Sisyphus
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img src={circloss} />
            <span className="text-2xl font-semibold text-navy-700">
              Circooles
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img src={catalog} />
            <span className="text-2xl font-semibold text-navy-700">
              Catalog
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img src={quotient} />
            <span className="text-2xl font-semibold text-navy-700">
              Quotient
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
