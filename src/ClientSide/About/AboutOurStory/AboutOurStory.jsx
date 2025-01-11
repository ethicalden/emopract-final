/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import doctorPhotoOne from "../../../../public/Images/Director/GG.jpg";
// import doctorPhotoTwo from "../../../../public/Images/aboutClient3.jpg";
const AboutOurStory = () => {
  return (
    <div>
      <div className="sectionGap">
        <div className="">
          <h1 className="ourStorySmallAbout">our story</h1>

          <p
            className="ourServicePara pb-[15px] 2xl:pb-[25px]
          xl:pb-[25px]  lg:pb-[25px]  md:pb-[25px]"
          >
            In India, senior citizens, i.e. people aged 60 years and above,
            currently comprise a little over 10% of the population, translating
            to about 104 million. The United Nations Population Fund (UNFPA)
            projects that this population, which will make up 158 million people
            by 2025
          </p>

          <div
            className="w-full h-[222px] 2xl:h-[1043px] xl:h-[750px] lg:h-[550px]
          md:h-[420px]"
          >
            <img className=" " src="./graph.png" alt="" />
          </div>

          <p
            className="ourServicePara pt-[15px] 2xl:pb-[25px] 2xl:pt-[30px]
         xl:pt-[30px] xl:pb-[25px]  lg:pb-[25px]  lg:pt-[30px] md:pb-[25px] md:pt-[25px]"
          >
            Emopract family is built specifically to serve elders. It comprises
            a group of gender diverse talented young professionals. These
            handpicked and meticulously trained individuals manage finance,
            human assets, social media, marketing innovations, blogging,
            technology integration, creative event management…a host of factors
            to ensure wellness and joys of living for senior citizens
          </p>

          <h3
            className="ourStoryTitle pt-[60px] 2xl:pt-[200px] xl:pt-[100px]
          lg:pt-[100px] md:pt-[80px]"
          >
            emopract is for you ..{" "}
          </h3>
        </div>
      </div>

      {/* --- doctors card =------ */}
      <div className="bg-[#7EA254] relative mt-[187px] 2xl:mt-[300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className=" flex justify-center w-full absolute top-[-127px] 2xl:top-[-200px] ">
              <div className="flex justify-center  ">
                <div
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/T2M4Mt6/gg-66c2e77e0192c.webp"})`,
                  }}
                  className="bg-no-repeat bg-cover bg-center h-[231px]  w-[274px] lg:w-[300px] lg:h-[250px] 2xl:w-[498px] 2xl:h-[366px] rounded-[10px]"
                >
                  <div className="flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName text-[#7EA254]">
                        Gourab Nath Ghosh
                      </h4>
                      <p className="storyDoctorDes text-white">
                        <i>affectionately - GG</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center hidden md:block md:pl-[20px] 2xl:pl-[40px] ">
                <div
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/f470SgD/about-Client3.webp"})`,
                  }}
                  className="bg-no-repeat bg-cover bg-center h-[231px] w-[274px] rounded-[10px] lg:w-[300px] lg:h-[250px] 2xl:w-[498px] 2xl:h-[366px]"
                >
                  <div className=" relative flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName text-[#7EA254]">
                        Dhrubajyoti Bose
                      </h4>
                      <p className="storyDoctorDes text-white">
                        <i>affectionately - Suvo</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center pt-[135px] md:hidden ">
                <div
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/f470SgD/about-Client3.webp"})`,
                  }}
                  className="bg-no-repeat bg-cover bg-center h-[231px] w-[274px] rounded-[10px] "
                >
                  <div className="flex items-end h-full pl-[15px] pb-[15px]">
                    <div>
                      <h4 className="storyDoctorName text-[#7EA254]">
                        Dhrubajyoti Bose
                      </h4>
                      <p className="storyDoctorDes text-white">
                        <i>affectionately - Suvo</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-[25px] px-[53px] md:pt-[130px] lg:pt-[150px] 2xl:pt-[200px] xl:pt-[150px] 2xl:px-[200px]">
          <p className="ourStoryPara">
            Both GG and Suvo (as they are addressed affectionately) believe in a
            positive and empowered work environment, creating true corporate
            social impact. The fruitful fusion of arts, culture, social causes,
            livelihood opportunities, and a spontaneous joie de vivre brings us
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurStory;
