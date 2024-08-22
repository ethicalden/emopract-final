/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

import { TiTick } from "react-icons/ti";
const MembershipCard = () => {
  return (
    <div className="sectionGap">
      <div className="lg:text-center">
        <p className="memberSmall">Membership</p>
        <h2
          className="memberTitle pb-[50px] lg:pb-[50px] md:mb-[100px] xl:pb-[100px] 2xl:pb-[100px]
        justify-center"
        >
          lifestyle package
        </h2>
      </div>
      {/*======== membership cards ========= */}

      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 xl:justify-center  gap-y-[60px] md:gap-x-[15px] lg:gap-x-[25px]  xl:gap-x-[25px] 2xl:gap-x-[25px] lg:gap-y-[60px] 2xl:gap-y-[60px] md:gap-y-[60px] mt-[100px] ">
        {/* ============ card one========== */}

        <div className="relative bg-[#7EA254]  rounded-[10px]">
          <div className="absolute top-[-95px]  right-[130px]  md:top-[-95px]  md:right-[60px] lg:right-[90px] xl:right-[150px] 2xl:right-[60px]">
            <img
              src="https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"
              alt="Logo"
              className="h-24 "
            />
          </div>
          <div className="max-w-md mx-auto  rounded-xl shadow-lg overflow-hidden ">
            <div className="py-6 md:py-6 text-center">
              <h2 className="text-4xl font-bold text-white ">
                ep{""} {""}
                <span className="font-chyali text-[14px]">era</span>{" "}
                {/* Replace with the actual class name */}
              </h2>

              <p className="text-white pt-[10px] md:text-[14px]">
                Validity : 12 months
              </p>

              <p className="text-4xl md:text-2xl font-bold text-white pt-[10px]">
                30,000/- yearly
              </p>
              <p className="text-white pt-[10px] md:text-[14px]">
                (For Couple - Rs 55,000)
              </p>
              <p className="text-white pt-[10px] md:text-[14px]">
                plan rate excluding GST
              </p>
              <button className="mt-[20px]  bg-white text-[#7EA254] font-semibold py-2 px-[100px] md:text-[14px] md:py-2 md:px-[50px] lg:py-4 lg:px-[80px] lg:text-[18px] rounded-full ">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-[#7EA254] p-6 text-white md:text-2xl ">
            <h3 className="text-[16px] lg:text-[20px] font-semibold mb-4">
              "JOYS OF LIVING" visit - 12 (180 mins. per visit)
            </h3>
            <div>
              <p className="flex  justify-between items-center  text-[14px] md:leading-[22px] lg:text-[18px] lg:leading-[22px] font-Ubuntu ">
                <TiTick className="h-4 w-5 mr-[20px] md:mr-[20px] md:h-5 md:w-12   text-[#7EA254] bg-white rounded-full" />
                <span>
                  Companion (walk in the park, tea Talk, chat together)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-6 md:mr-[20px] md:h-5 md:w-14  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Outing (accompanying to restaurant, mall, café with friend)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-7 md:mr-[20px] md:h-5 md:w-16  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Technology Help (assistance for using apps, gadgets, smart
                  devices)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-10 md:mr-[20px] md:h-5 md:w-[76px]  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Entertainment (accompany to preferred places - theatre,
                  cinema, exhibition, get together)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-7 md:mr-[20px] md:h-5 md:w-14 text-[#7EA254] bg-white rounded-full" />
                <span>
                  Regular Work (bank visit, courier support, grocery shopping
                  support)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-8 md:mr-[20px] md:h-5 md:w-16 text-[#7EA254] bg-white rounded-full" />
                <span>
                  Medical Accompany (assistance for check up, clinic, diagnostic
                  centre visit)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
                <TiTick className="mr-[20px] h-4 w-8 md:mr-[20px] md:h-5 md:w-20 text-[#7EA254] bg-white rounded-full" />
                Entertainment at Home (spend time for reading, nurturing
                hobbies, house parties)
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 mx-2 text-center   font-Ubuntu bg-white  rounded-[15px]">
            <p className="font-bold text-[#7EA254] text-[15px] lg:text-[18px]">
              Join us @ emopract exclusive LIVE EVENT - 5 (free)
            </p>
            <p className="mt-2 text-black font-bold text-[12px] lg:text-[16px]">
              Access to online engagement
            </p>
            <p className="mt-2  font-bold text-[#7EA254] text-[15px] lg:text-[18px]">
              Participate in the "emopract" EVENTS - Live (charges apply)
            </p>
          </div>
          <div className="mt-6 p-6 font-Ubuntu  text-white">
            <h3 className="text-lg font-semibold mb-4 lg:text-[20px]">
              "WELLNESS" visit - 12 (60 mins. per visit)
            </h3>

            <p className="flex   items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
              <TiTick className="mr-[20px] h-5 w-5 md:mr-[20px] md:h-5 md:w-6 text-[#7EA254] bg-white rounded-full" />
              <span>Health Record Maintenance</span>
            </p>
            <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
              {" "}
              <TiTick className="mr-[20px] h-5 w-5 md:mr-[20px] md:h-5 md:w-10 text-[#7EA254] bg-white rounded-full" />
              <span>24/7 Emergency Coordination - For 12 months</span>
            </p>
            <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
              <TiTick className="mr-[20px] h-5 w-6 md:mr-[20px] md:h-5 md:w-10 text-[#7EA254] bg-white rounded-full" />
              <span>Hospital Assist Preferred Patient Collaboration</span>
            </p>
            <p className="flex  justify-between items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px] lg:text-[18px] lg:leading-[22px]">
              <TiTick className="mr-[20px] h-5 w-6 md:mr-[20px] md:h-5 md:w-12 text-[#7EA254] bg-white rounded-full" />
              <span>Hello ep !! Calls Assess & Customised as per Member</span>
            </p>
            <p className="flex   items-center  text-[14px] font-Ubuntu md:leading-[22px] md:pt-[10px]lg:text-[18px] lg:leading-[22px]">
              <TiTick className="mr-[20px] h-5 w-5 md:mr-[20px] md:h-5 md:w-6 text-[#7EA254] bg-white rounded-full" />
              <span>Nutritionist Visit - Eat Healthy</span>
            </p>
          </div>
          {/* Feedback */}
          <div>
            <p className="mt-6 mx-[8px] p-[16px] text-center font-semibold text-[#7EA254] bg-white rounded-[10px] font-Ubuntu lg:text-[18px]">
              "Feedback is important to us" session
            </p>
          </div>
          <p className="mt-6 p-6 text-white font-Ubuntu lg:text-[18px] font-bold md:leading-[22px]">
            Includes: an unique opportunity to contribute to society.{" "}
          </p>
          <p className="text-white   p-6 font-Ubuntu text-[14px] md:text-[12px] md:leading-[22px] lg:text-[16px]">
            We facilitate several social outreach projects for interested
            members to engage with in their spare time. This can range from
            teaching underprivileged children, literacy drives for adults,
            hospital and orphanage visits, and many other worthy activities.
          </p>
        </div>

        {/* ============ card two========== */}
        <div className="relative mt-[80px]    rounded-[10px]">
          <div className="absolute top-[-95px] right-[130px] md:right-[60px] lg:top-[-95px] lg:right-[100px] xl:top-[-95px] xl:right-[150px]">
            <img
              src="https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"
              alt="Logo"
              className="h-24 mx-auto mb-4"
            />
          </div>
          <div className="max-w-md mx-auto border border-8 bg-gray-200  border-[#7EA254] shadow-lg overflow-hidden rounded-[10px]">
            <div className=" py-6 text-center">
              <h2 className="text-4xl font-bold text-[#7EA254]">
                ep
                {""}{" "}
                <span className="text-[#7EA254] font-chyali text-[14px]">
                  pro
                </span>
              </h2>
              <p className="text-[#7EA254] mt-4">Validity : 3 months</p>
              <p className="text-4xl font-bold text-[#7EA254] pt-[10px]">
                9,000/- quarterly
              </p>
              <p className="text-[#7EA254] mt-2">(For Couple - Rs 15,000)</p>
              <p className="text-black mt-2">plan rate excluding GST</p>
              <button className="mt-[20px] md:py-2 text-white bg-[#7EA254] font-semibold py-2 px-[100px] md:px-[40px] rounded-full md:text-[14px] lg:py-4 lg:px-[80px] lg:text-[18px]">
                Apply Now
              </button>
            </div>

            <div className="bg-gray-200 p-6 ">
              <h3 className="text-lg font-bold mb-4 text-[#7EA254]">
                "JOYS OF LIVING" visit - 3 (180 mins. per visit)
              </h3>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-6 lg:mr-[20px] lg:h-6 lg:w-10 lg:text-[18px] lg:leading-[22px] text-[#7EA254] bg-white rounded-full" />
                <span>
                  Companion (walk in the park, tea Talk, chat together)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                {" "}
                <TiTick className="mr-[20px] h-4 w-6 lg:mr-[20px] lg:h-6 lg:w-10 lg:text-[18px] lg:leading-[22px]  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Outing (accompanying to restaurant, mall, café with friend)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-4 w-6 lg:mr-[20px] lg:h-6 lg:w-12 lg:text-[18px] lg:leading-[22px]  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Technology Help (assistance for using apps, gadgets, smart
                  devices)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-4 w-8 lg:mr-[20px] lg:h-6 lg:w-16 lg:text-[18px] lg:leading-[22px]  text-[#7EA254] bg-white rounded-full" />
                <span>
                  Entertainment (accompany to preferred places - theatre,
                  cinema, exhibition, get together)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-4 w-8 lg:mr-[20px] lg:h-6 lg:w-16 lg:text-[18px] lg:leading-[22px] text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Regular Work (bank visit, courier support, grocery shopping
                  support)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-4 w-8 lg:mr-[20px] lg:h-6 lg:w-16 lg:text-[18px] lg:leading-[22px] text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Medical Accompany (assistance for check up, clinic, diagnostic
                  centre visit)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-4 w-8 lg:mr-[20px] lg:h-6 lg:w-16 lg:text-[18px] lg:leading-[22px] text-[#7EA254] bg-white rounded-full" />
                <span>
                  Entertainment at Home (spend time for reading, nurturing
                  hobbies, house parties)
                </span>
              </p>
            </div>
            <div className="mt-6 mx-[8px] text-center p-8  text-white bg-[#7EA254] rounded-[10px]">
              <p className="lg:text-[18px]">
                Join us @ emopract exclusive LIVE EVENT - 1 (free)
              </p>
              <p className="mt-2 lg:py-2 text-black  lg:text-[14px]">
                Access to online engagement
              </p>
              <p className=" font-semibold text-white lg:text-[18px]">
                Participate in the "emopract" EVENTS - Live (charges apply)
              </p>
            </div>
            <div className="mt-6 p-6 ">
              <h3 className="text-lg font-semibold mb-4">
                "WELLNESS" visit - 3 (60 mins. per visit)
              </h3>

              <p className="flex   items-center  text-[14px] lg:text-[16px] font-Ubuntu ">
                <TiTick className="mr-[20px] h-5 w-5 lg:mr-[20px] lg:h-5 lg:w-5 text-[#7EA254] bg-white rounded-full" />
                <span>Health Record Maintenance</span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-5 w-5 lg:mr-[20px] lg:h-5 lg:w-8 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>24/7 Emergency Coordination - For 3 months</span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-5 w-6 lg:mr-[20px] lg:h-5 lg:w-8 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>Hospital Assist Preferred Patient Collaboration</span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu lg:pt-[15px]">
                <TiTick className="mr-[20px] h-5 w-6 lg:mr-[20px] lg:h-5 lg:w-8 text-[#7EA254] bg-white rounded-full" />
                <span>Hello ep !! Calls Assess & Customised as per Member</span>
              </p>
            </div>
            <div className="bg-[#7EA254] text-white mb-10 rounded-[10px] mx-[8px]">
              <p className="mt-6 p-6  text-center font-semibold ">
                "Feedback is important to us" session
              </p>
            </div>
          </div>
        </div>

        {/* ============ card three========== */}
        <div className="relative mt-[80px]">
          <div className="absolute top-[-95px] right-[130px]  md:top-[-95px] md:right-[60px] lg:right-[90px] xl:right-[150px] 2xl:right-[60px]">
            <img
              src="https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"
              alt="Logo"
              className="h-24 mx-auto mb-4"
            />
          </div>
          <div className="max-w-sm mx-auto text-white bg-[#7EA254] rounded-xl shadow-lg overflow-hidden">
            <div className="  py-6 text-center">
              <h2 className="text-4xl font-bold text-white">
                ep{""} {""}{" "}
                <span className="font-chyali text-[14px]"> easy</span>
              </h2>
              <p className=" mt-4">Validity : 1 months</p>
              <p className="text-4xl font-bold text-white mt-2">10,000/-</p>
              <p className="text-white pt-[10px]">plan rate excluding GST</p>
              <button className="mt-[20px]  bg-white text-[#7EA254] font-semibold py-2 px-[100px] md:text-[14px] md:py-2 md:px-[50px] lg:py-4 lg:px-[80px] lg:text-[18px] rounded-full ">
                Apply Now
              </button>
            </div>
            <div className=" p-6">
              <h3 className="text-lg font-semibold mb-4">
                "JOYS OF LIVING" visit - 5 (360 mins. per visit)
              </h3>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-5 text-[#7EA254] bg-white rounded-full" />
                <span>
                  Companion (walk in the park, tea Talk, chat together)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-6 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Outing (accompanying to restaurant, mall, café with friend)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-6 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Technology Help (assistance for using apps, gadgets, smart
                  devices)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-8 text-[#7EA254] bg-white rounded-full" />
                <span>
                  Entertainment (accompany to preferred places - theatre,
                  cinema, exhibition, get together)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-6 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Regular Work (bank visit, courier support, grocery shopping
                  support)
                </span>
              </p>

              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-8 text-[#7EA254] bg-white rounded-full" />{" "}
                <span>
                  Entertainment at Home (spend time for reading, nurturing
                  hobbies, house parties)
                </span>
              </p>
              <p className="flex  justify-between items-center  text-[14px] font-Ubuntu">
                <TiTick className="mr-[20px] h-4 w-8 text-[#7EA254] bg-white rounded-full" />
                <span>
                  You Ask We Listen (assist for celebration, mega event at home,
                  day companion)
                </span>
              </p>
            </div>
            <div className="mt-6 text-center p-2 mx-[8px] bg-white text-[#7EA254] rounded-[10px]">
              <p>Join us @ emopract exclusive LIVE EVENT - charges apply</p>
              <p className="text-black">Access to online engagement</p>
              <p className="mt-4 font-semibold ">
                Participate in the "emopract" EVENTS - Live (charges apply)
              </p>
            </div>
            <div className="pt-4 pb-8">
              <p className="mt-6 text-center font-bold">
                "Feedback is important to us" session
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
