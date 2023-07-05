import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Link from "next/link";

const Faq = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10">
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
            <Accordion allowZeroExpanded></Accordion>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const faqData = [
  {
    question: "This is how it looks when the question is active?",
    answer: (
      <>
        I walked forty-seven miles of barbed wire, I got a cobra snake for a
        necktie, I got a brand new house by the road side, Made out of
        rattlesnake hide. I got me chimney made on top, made from a human skull,
        now come on, take a little walk with me. Now how do you love? Come on
        Arlene, take me by hand, Let me know you understand. Who do you love?
        Ride nine times on the midnight train through the fire and cold rain who
        do you love I’ve got a tombstone hand in a graveyard mine, just twenty
        two and I don’t mind dying. Who do you love? Who do you love?{" "}
      </>
    ),
  },
  {
    question: "This is how it looks when the question is active?",
    answer: (
      <>
        I walked forty-seven miles of barbed wire, I got a cobra snake for a
        necktie, I got a brand new house by the road side, Made out of
        rattlesnake hide. I got me chimney made on top, made from a human skull,
        now come on, take a little walk with me. Now how do you love? Come on
        Arlene, take me by hand, Let me know you understand. Who do you love?
        Ride nine times on the midnight train through the fire and cold rain who
        do you love I’ve got a tombstone hand in a graveyard mine, just twenty
        two and I don’t mind dying. Who do you love? Who do you love?{" "}
      </>
    ),
  },
  {
    question: "This is how it looks when the question is active?",
    answer: (
      <>
        I walked forty-seven miles of barbed wire, I got a cobra snake for a
        necktie, I got a brand new house by the road side, Made out of
        rattlesnake hide. I got me chimney made on top, made from a human skull,
        now come on, take a little walk with me. Now how{" "}
        <Link href="#" className="text-th-gradient-1 underline">
          {" "}
          do you love
        </Link>
        ? Come on Arlene, take me by hand, Let me know you understand. Who do
        you love? Ride nine times on the midnight train through{" "}
        <Link href="#" className="text-th-gradient-1 underline">
          {" "}
          the fire
        </Link>{" "}
        and cold rain who do you love I’ve got a tombstone hand in a graveyard
        mine, just twenty two and I don’t mind dying. Who do you love? Who do
        you love? ,
      </>
    ),
  },
];

export default Faq;
