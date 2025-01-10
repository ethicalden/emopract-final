// eslint-disable-next-line no-unused-vars
import Link from "next/link";
import React from "react";
// import { Link } from "next/link";

const ChooseUs = () => {
  return (
    <>
      <div
        className="mt-[25px] px-[30px]
   
    md:mt-[60px] md:px-[32px]
    
    lg:px-[60px] lg:mt-[60px]
    
    xl:px-[100px] xl:mt-[100px]
   
    2xl:px-[100px] 2xl:mt-[100px] text-center"
      >
        <div className="">
          <div>
            <h3
              className="text-[25px] leading-[35px] pb-[15px]
    md:text-[35px] md:leading-[40px] md:pb-[20px] lg:text-[40px] lg:leading-[36px] lg:pb-[20px]
    xl:text-[45px] xl:leading-[58px] xl:pb-[25px]

    2xl:text-[50px] 2xl:leading-[58px] 2xl:pb-[25px]
    
    font-Ubuntu font-bold text-[#7EA254]"
            >
              emotionally for elders
            </h3>
            <p className="chooseUsParaText">
              Elders are our roots. They envelop us in affection, and motivate
              us to fly high. In turn, we need to be their shade and support,
              ensuring "Wellness" in their advanced years, and providing "Joys
              of Living" when they need them the most
            </p>

            <Link href="/contact">
              <button className="chooseusKnowbtn">Know More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sectionGap">
        <div className="chooseUsParent">
          <div className="chooseUsImgParent">
            <img
              className="h-full w-full object-cover  rounded-[10px]"
              src="https://i.ibb.co/s688C0L/WDW-0772-3.webp"
              alt=""
            />
          </div>
          <div>
            <p className="chooseUsSamll">About Us</p>
            <h3 className="chooseUsTitle">it's all about life, quality life</h3>
            <p className="chooseUsParaText">
              We are a group of enthusiastic, affectionate and trained personnel
              to accompany you in your journey of life. Our team looks forward
              to being with you, by you, like a family member. The greatest
              happiness comes from knowing that there is someone to rely on
            </p>

            <Link href="/about">
              <button className="chooseusKnowbtn">Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
