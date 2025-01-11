// eslint-disable-next-line no-unused-vars
import React from "react";

const Reels = () => {
  return (
    <div
      className="flex justify-center items-center pt-[60px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px]
"
    >
      {/* <div className="w-full 2xl:h-[900px] xl:h-[770px] lg:h-[600px] md:h-[600px] h-[400px] aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/nYVLmQ0rTtY?si=AZtf4tP-C38tBGF5&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Reels;
