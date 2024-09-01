import { useEffect } from "react";
import HeroSecGallery from "./HeroSecGallery/HeroSecGallery";
import Footer from "../Shared/Footer/Footer";
import GallerySwiper from "./GallerySwiper/GallerySwiper";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSecGallery></HeroSecGallery>
      <GallerySwiper></GallerySwiper>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
