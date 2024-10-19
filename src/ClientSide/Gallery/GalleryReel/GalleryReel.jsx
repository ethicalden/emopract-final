import React from "react";

const GalleryReel = () => {
  return (
    <div className="sectionGap mt-10">
      <div className="discoverimg3 w-full relative">
        <video
          className="h-full w-full object-cover rounded-[15px]"
          src="../../../../public/Images/GalleryReel (2).mp4" // Accessing directly from public folder
          controls
          height={800}
          alt="Gallery Reel"
        />
      </div>
    </div>
  );
};

export default GalleryReel;
