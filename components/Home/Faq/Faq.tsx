import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Link from "next/link";
import FaqCard from "./FaqCard";
import { Accordion } from "react-accessible-accordion";
import { Data } from "@/data/JSON";

const Faq = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10 pb-32">
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-[75%] flex flex-col gap-2 justify-center items-center">
          <p className="text-[34px] md:text-[56px] font-bold font-inter text-th-brand">
            Frequently Asked Questions
          </p>
          <p className="text-[#757575] text-center text-[18px] font-normal">
            For more information, please check our{" "}
            <Link href="#" className="text-th-brand-secondary underline">
              {" "}
              Help page.
            </Link>
          </p>
          <div className="w-full mt-6">
            <Accordion allowZeroExpanded>
              {Data.faqData.map((item, index) => {
                return (
                  <FaqCard question={item.question} answer={item.answer} />
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Faq;
