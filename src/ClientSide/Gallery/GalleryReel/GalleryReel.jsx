// const GalleryReel = () => {
//   return (
//     <div className="sectionGap mt-10">
//       <div className="discoverimg3 w-full relative">
//         <video
//           className="h-full w-full object-cover rounded-[15px]"
//           src="/Images/GalleryReel.mp4" // Accessing directly from public folder
//           controls
//           autoPlay
//           loop // Optional: To make the video repeat
//           muted // Optional: Mute the video (often needed for autoplay to work without user interaction)
//           height={800}
//           alt="Gallery Reel"
//         />
//       </div>
//     </div>
//   );
// };

// export default GalleryReel;

import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryReel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const sliderRef = useRef(null);

  const images = ["/Images/GalleryReel.mp4"];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const imagesPerSlide = 9;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      sliderRef.current.slickGoTo(currentSlide + 1);
    }
  };

  //   const goToPrevious = () => {
  //     if (currentSlide > 0) {
  //       sliderRef.current.slickGoTo(currentSlide - 1);
  //     }
  //   };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="sectionGap mt-10">
      <h2 className="text-center text-[#7EA254] font-Ubuntu text-[50px] leading-[58px] font-bold mb-[50px]">
        Our Gallery
      </h2>
      <Slider {...settings} ref={sliderRef} slideIndex={currentSlide}>
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <div key={slideIndex}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {images
                .slice(
                  slideIndex * imagesPerSlide,
                  (slideIndex + 1) * imagesPerSlide
                )
                .map((src, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <video
                      src={src}
                      alt={`Gallery Reel ${idx + 1}`}
                      controls
                      autoPlay
                      loop // Optional: To make the video repeat
                      muted // Optional: Mute the video (often needed for autoplay to work without user interaction)
                      height={800}
                      className="w-full h-[300px] object-cover transform transition duration-300 ease-in-out hover:scale-110  cursor-pointer"
                      onClick={() => openModal(src)}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-8 flex justify-center items-center space-x-4">
        {/* <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className={`px-4 py-2 rounded-full border ${
            currentSlide === 0
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-[#7EA254] text-[#7EA254] hover:bg-[#7EA254] hover:text-white transition duration-300"
          }`}
        >
          Previous
        </button> */}
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full ${
              currentSlide === index
                ? "bg-[#7EA254] text-white"
                : "bg-gray-200 text-gray-600 hover:bg-[#7EA254] hover:text-white transition duration-300"
            }`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNext}
          disabled={currentSlide === totalSlides - 1}
          className={`px-4 py-2 rounded-full border ${
            currentSlide === totalSlides - 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-[#7EA254] text-[#7EA254] hover:bg-[#7EA254] hover:text-white transition duration-300"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <video
            src={modalImage}
            alt="Full view"
            controls
            autoPlay
            loop // Optional: To make the video repeat
            muted // Optional: Mute the video (often needed for autoplay to work without user interaction)
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryReel;
