"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [imagesPerSlide, setImagesPerSlide] = useState(9); // Default for large screens
  const sliderRef = useRef(null);

  const images = [
    "https://i.ibb.co.com/mTbZPX9/g8-67133cdd2229d.webp",
    "https://i.ibb.co.com/sqS1yFs/g7-67133cd75aaa1.webp",
    "https://i.ibb.co.com/fMrGMrr/g6-67133cd225c6b.webp",
    "https://i.ibb.co.com/xgPp5QW/g9-67133ce1cc1db.webp",
    "https://i.ibb.co.com/xhmtnCY/g5.jpg",
    "https://i.ibb.co.com/2qvYcT7/g4-67133cf9eb2ab.webp",
    "https://i.ibb.co.com/PhBQjXB/g3-67133cf1a6c24.webp",
    "https://i.ibb.co.com/hCcJpzw/g2-67133cebb6b60.webp",
    "https://i.ibb.co.com/Gtzt5F1/g1-67133ce7a7635.webp",
    "https://i.ibb.co/WcM6dNf/whatsapp-image-2-66c2e63151f0f.webp",
    "https://i.ibb.co/Mn3hh8g/img-20240727-011328-66c2e48663bb5.webp",
    "https://i.ibb.co/NtyL9bn/a7406096-66c2e41eb3423.webp",
    "https://i.ibb.co/n0RR8hw/a7405850-66c2e3f298574.webp",
    "https://i.ibb.co/PYCww6Q/a7406383-66c2e6c8eac64.webp",
    "https://i.ibb.co/fDZTC6q/wdw-1142-66c25b7e935d6.webp",
    "https://i.ibb.co/DGsB8p1/sservice-66c374265161f.webp",
    "https://i.ibb.co/WW042Wx/aboutourteam-66c2ea4a36efa.webp",
    "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
    "https://i.ibb.co/XtSvxZh/WDW-0921-1.webp",
    "https://i.ibb.co/g6jTWB4/IMG-2009.webp",
    "https://i.ibb.co/PrnyML3/A7405947.webp",
    "https://i.ibb.co/x6T29PS/slide3-66c249f946393.webp",
    "https://i.ibb.co/sKzZ31F/slide2-66c249a540200.webp",
    "https://i.ibb.co/FKtYyVT/serviceswellness2-66c2ea02f0a39.webp",
    "https://i.ibb.co/dtgKgKd/serviceswellness3-66c3a72eb9fe4.webp",
    "https://i.ibb.co/BGB7T7Y/whatsapp-image-2024-07-30-at-14205-pm-1-66c3ab5c96dfd.webp",
    "https://i.ibb.co/wMSSstn/ambulance-66c3a8fbce8fa.webp",
    "https://i.ibb.co/Gdr75vp/serviceswellness1-66c378bf1e1c8.webp",
    "https://i.ibb.co/xjFQn85/wdw-0942-66c3af200be71.webp",
    "https://i.ibb.co/8dSzJZg/t2-66c42000acf02.webp",
    "https://i.ibb.co/Z1wPh5H/slide1-66c2487c625ee.webp",
    "https://i.ibb.co/s688C0L/WDW-0772-3.webp",
    "https://i.ibb.co/605DMmX/homeourservicesfreecon-66c260b27b8a4.webp",
  ];

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      sliderRef.current.slickGoTo(currentSlide + 1);
    }
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Handle screen size changes dynamically
  useEffect(() => {
    const updateImagesPerSlide = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setImagesPerSlide(9); // For lg, xl, 2xl
      } else {
        setImagesPerSlide(3); // For sm, md
      }
    };

    updateImagesPerSlide(); // Initial check
    window.addEventListener("resize", updateImagesPerSlide); // Listen for window resize

    return () => window.removeEventListener("resize", updateImagesPerSlide); // Cleanup
  }, []);

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
                    <img
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
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
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`md:w-10 md:h-10  h-6 rounded md:rounded-full  ${
              currentSlide === index
                ? "bg-[#7EA254] text-white"
                : "bg-gray-200  text-gray-600 hover:bg-[#7EA254] hover:text-white transition duration-300"
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
          <img
            src={modalImage}
            alt="Full view"
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryDemo;
