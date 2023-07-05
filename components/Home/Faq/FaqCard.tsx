import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { HiOutlineChevronDown } from "react-icons/hi";

interface Props {
  question: string;
  answer: ReactNode;
}

const FaqCard = ({ question, answer }: Props) => {
  return (
    <div>
      <AccordionItem>
        <AccordionItemHeading className="w-full question my-3">
          <AccordionItemButton className="bg-[#121616] w-full px-4 h-[64px] flex justify-between items-center text-th-brand text-[20px] font-medium font-inter rounded-t-[10px]">
            {question}
            <HiOutlineChevronDown className="text-th-brand text-[28px] mr-1 " />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="text-[16px] font-inter font-normal text-th-brand bg-[#121616] p-4 rounded-b-[10px] leading-7">
          {answer}
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
};

export default FaqCard;
