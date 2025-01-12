/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutOurTeam = () => {
  return (
    <div className="sectionGap">
      <div>
        <p className="ourServiceSmall">our Team</p>
        <h3 className="ourServiceTitle">human asset</h3>
        <div className="ourServieParaTextParent">
          <p className="ourServicePara">
            They are young individuals who are friendly, courteous and
            compassionate. They are handpicked and trained to get the job done
            efficiently and fast, upholding Emopract’s high levels of
            professionalism.They subscribe to the company's vision of quality
            care delivered with complete responsibility.
          </p>
        </div>
      </div>

      {/* ======== slider cards mobile ========= */}

      <div className="h-[300px] md:h-[500px] lg:h-[700px] xl:h-[700px] 2xl:h-[800px] pt-[35px] md:pb-[60px] ">
        <img
          className="h-full w-full object-cover rounded-[10px]"
          src="https://i.ibb.co/WW042Wx/aboutourteam-66c2ea4a36efa.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutOurTeam;
