import React from "react";

const GalleryReel = () => {
  return (
    <div className="sectionGap mt-10">
      <div className="discoverimg3 w-full relative">
        <video
          className="h-full w-full object-cover rounded-[15px]"
          src="/Images/GalleryReel.mp4" // Accessing directly from public folder
          controls
          autoPlay
          loop // Optional: To make the video repeat
          muted // Optional: Mute the video (often needed for autoplay to work without user interaction)
          height={800}
          alt="Gallery Reel"
        />
      </div>
    </div>
  );
};

export default GalleryReel;
