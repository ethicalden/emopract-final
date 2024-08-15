// eslint-disable-next-line no-unused-vars
import React from "react";

const Reels = () => {
  return (
    <div className="pt-[60px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px]">
      <div
        className="
        2xl:h-[900px] xl:h-[770px] lg:h-[600px] md:h-[600px] overflow-hidden
         "
      >
        {/* <video
          className="h-full w-full object-cover rounded-[10px]"
          src={showReel}
          controls
        >
          Your browser does not support the video tag.
        </video> */}

        <iframe
          className="h-full w-full object-cover rounded-[10px]"
          src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Reels;
