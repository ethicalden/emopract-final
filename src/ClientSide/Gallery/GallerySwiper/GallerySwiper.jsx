import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const images = [
    "https://i.ibb.co/WcM6dNf/whatsapp-image-2-66c2e63151f0f.webp",
    "https://i.ibb.co/Mn3hh8g/img-20240727-011328-66c2e48663bb5.webp",
    "https://i.ibb.co/NtyL9bn/a7406096-66c2e41eb3423.webp",
    "https://i.ibb.co/n0RR8hw/a7405850-66c2e3f298574.webp",
    "https://i.ibb.co/PYCww6Q/a7406383-66c2e6c8eac64.webp",
    "https://i.ibb.co/fDZTC6q/wdw-1142-66c25b7e935d6.webp",
    "https://i.ibb.co/DGsB8p1/sservice-66c374265161f.webp",
    "https://i.ibb.co/WW042Wx/aboutourteam-66c2ea4a36efa.webp",
    "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
  ];

  const settings = {
    dots: false, // Disable default dots
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Track the slide change
  };

  const totalSlides = Math.ceil(images.length / 9); // Calculate total number of slides

  return (
    <div className="sectionGap mt-10">
      <h2 className="text-center text-green-700 text-xl font-bold mb-6">
        Our Gallery
      </h2>
      <Slider {...settings}>
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <div key={slideIndex}>
            <div className="grid grid-cols-3 gap-[30px]">
              {images
                .slice(slideIndex * 9, (slideIndex + 1) * 9)
                .map((src, idx) => (
                  <div
                    key={idx}
                    className="flex justify-center items-center h-[360px]"
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        {/* Numbered Navigation */}
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`mx-2 cursor-pointer ${
              currentSlide === index
                ? "text-green-700 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider;
