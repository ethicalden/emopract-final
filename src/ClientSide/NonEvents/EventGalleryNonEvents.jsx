// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EventGalleryNonEvents = () => {
  return (
    <div className="sectionGap ">
      <div className="md:hidden block ">
        <p className="eventGallarySmall">Events</p>
        <h2 className="eventGarlleryTitle">Trending events</h2>

        <div className="flex justify-between gap-x-[15px]">
          <div>
            <div className="relative ">
              <div className="NonEventimg1">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/B6K7DH0/independence-day-fusion-celebration-66c3b0bf15c6b.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">15th August 2024</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Independence Day</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>our pride ... our glory</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="NonEventimg2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/8Dks2SK/story-telling-session-3-66c421fa65cc6.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">21 Sep'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Story Telling Session</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>sharing treasure …</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/7KcJxyh/durga-puja-preview-66c42230c0e5a.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">26 Oct'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Diwali On</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p> moments of sparkle</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="NonEventimg4">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://i.ibb.co/MnNPYXf/childrens-day-elders-way-3-66c422741e15d.webp"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
            <div className="text-white">
              <p className="dateEvent">14 Nov'24</p>
            </div>
            <div className="text-white">
              <h4 className="hoverTitleGallery">Children's Day</h4>
              <div className="flex items-center locationTextGallelry">
                <FaLocationDot className="mr-2" />
                <p>elders' way</p>
              </div>
              <button className="ParticipateBtn">Participate</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[15px] mb-[15px]">
          <div className="relative">
            <div className="NonEventimg5">
              <img
                className="h-full w-full  rounded-[10px] object-cover"
                src="https://i.ibb.co/tHRnXs3/laugh-all-the-way-66c5a3c5a8e00.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">14 Dec'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Laugh all the way</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>fun together</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="NonEventright5">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">Feb, 14,15,16th</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Film Festival</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>a feast of films</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2  gap-x-[15px] mb-[15px]">
          <div className="relative">
            <div className="NonEventimg6">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src="https://i.ibb.co/TMYBndt/xmas-to-new-year-party-66c4236d56b2c.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">28 Dec'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Xmas to New Year</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>lets' celebrate</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="NonEventright6">
              <img
                className="h-full w-full  rounded-[10px] object-cover"
                src="https://i.ibb.co/q5zK8xS/spiritual-session-66c423b13c465.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">29 Mar'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Meditation</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p> in search of difference</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= four row ================ */}

        <div className="grid grid-cols-2 gap-x-[15px] ">
          <div className="relative">
            <div className="Baisakhimg">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">19 Apr'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Baishaki</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>welcomng the season</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="Rabindroimg4">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src="https://i.ibb.co/RSJQFr5/an-evening-with-literature-66c4176782195.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent"></p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Literary Evening</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p> cultural discourse</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <button className="exploreMemberShip">Explore Membership </button>
      </div>

      {/* large screen */}

      <div className="hidden md:block ">
        <p className="eventGallarySmall text-center">Events</p>
        <h2 className="eventGarlleryTitle text-center">Trending events</h2>

        <div
          className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
            lg:gap-x-[15px] md:gap-x-[15px] "
        >
          {/*1,2,3 pic */}
          <div
            className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
          >
            {/* inde */}
            <div className=" ">
              <div className="relative ">
                <div className="img1 w-full">
                  <img
                    className="h-full w-full object-cover rounded-[20px]"
                    src="https://i.ibb.co/B6K7DH0/independence-day-fusion-celebration-66c3b0bf15c6b.webp"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">15th August 2024</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Independence Day</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>our pride ... our glory</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>

              {/* story */}
              <div className="relative">
                <div className="img2 w-full">
                  <img
                    className="h-full w-full object-cover  rounded-[20px]"
                    src="https://i.ibb.co/ysz4YPQ/story-telling-session-1-66c42592551ac.webp"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">21 Sep'24</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Story Telling Session</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>sharing treasure …</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>
            </div>

            {/* puja */}
            <div className="relative">
              <div className="img3 w-full">
                <img
                  className="h-full w-full object-cover  rounded-[20px]"
                  src="https://i.ibb.co/7KcJxyh/durga-puja-preview-66c42230c0e5a.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">26 Oct'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Diwali On</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p> moments of sparkle</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex md:gap-x-[10px] lg:gap-x-[10px] xl:gap-x-[30px]
          2xl:gap-x-[30px]"
          >
            <div>
              {/* 4,5 */}

              {/* children */}
              <div className="relative">
                <div className="   2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px]">
                  <img
                    className="h-full w-full object-cover  rounded-[20px]"
                    src="https://i.ibb.co/jTmkj1W/childrens-day-elders-way-2-66c425fbd59b4.webp"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">14 Nov'24</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Children's Day</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>elders' way</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>

              {/* laugh */}
              <div className="relative">
                <div className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[30px] lg:mt-[10px]   2xl:h-[478px] xl:h-[478px] lg:h-[300px] md:h-[200px]">
                  <img
                    className="h-full w-full object-cover rounded-[20px]"
                    src="https://i.ibb.co/zPppMR9/laugh-all-the-way-2-66c5a75467f7c.webp"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">14 Dec'24</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Laugh all the way</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>fun together</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 , 7 pic */}
            <div>
              {/* elders */}
              <div className="relative">
                <div className="  2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px] ">
                  <img
                    className="h-full w-full object-cover  rounded-[20px]"
                    src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">Feb, 14,15,16th</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Film Festival</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>a feast of films</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>

              {/* xms */}
              <div className="relative">
                <div
                  className=" md:mt-[10px] xl:mt-[30px] 2xl:mt-[30px] lg:mt-[10px]  2xl:h-[478px] 
              xl:h-[478px] lg:h-[300px] md:h-[200px]"
                >
                  <img
                    className="h-full w-full object-cover rounded-[20px]"
                    src="https://i.ibb.co/L9dDfL4/xmas-to-new-year-party-copy-1-66c3b33cdfbf6.webp"
                    alt=""
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                  <div className="text-white">
                    <p className="dateEvent">28 Dec'24</p>
                  </div>
                  <div className="text-white">
                    <h4 className="hoverTitleGallery">Xmas to New Year</h4>
                    <div className="flex items-center locationTextGallelry">
                      <FaLocationDot className="mr-2" />
                      <p>lets' celebrate</p>
                    </div>
                    <button className="ParticipateBtn">Participate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 pic */}
        <div className="relative">
          <div
            className="2xl:h-[750px] xl:h-[600px] lg:h-[675px] md:h-[675px] 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px] md:mt-[15px]
        lg:mt-[15px] xl:mt-[30px] 2xl:mt-[30px]"
          >
            <img
              className="h-full w-full object-cover rounded-[20px]"
              src="https://i.ibb.co/hswtBwp/spiritual-session-66c5a84cb142d.webp"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
            <div className="text-white">
              <p className="dateEvent">29 Mar'24</p>
            </div>
            <div className="text-white">
              <h4 className="hoverTitleGallery">Meditation</h4>
              <div className="flex items-center locationTextGallelry">
                <FaLocationDot className="mr-2" />
                <p> in search of difference</p>
              </div>
              <button className="ParticipateBtn">Participate</button>
            </div>
          </div>
        </div>

        {/*1,2 pic */}
        <div
          className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
        >
          <div className="relative">
            <div className="h-[233px] 2xl:h-full xl:h-full md:h-full lg:h-full w-full">
              <img
                className="h-full w-full object-cover rounded-[20px]"
                src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">19 Apr'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Baishaki</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>welcomng the season</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="DeskNonimg3 w-full">
              <img
                className="h-full w-full object-cover  rounded-[20px]"
                src="https://i.ibb.co/YyQymFv/an-evening-with-literature-66c429255c20a.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent"></p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Literary Evening</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p> cultural discourse</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <button className="exploreMemberShip">Explore Membership </button>
      </div>
    </div>
  );
};

export default EventGalleryNonEvents;
