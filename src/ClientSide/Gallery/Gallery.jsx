import { useEffect } from "react";
import HeroSecGallery from "./HeroSecGallery/HeroSecGallery";
import Footer from "../Shared/Footer/Footer";
import GallerySwiper from "./GallerySwiper/GallerySwiper";
import GalleryReel from "./GalleryReel/GalleryReel";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSecGallery></HeroSecGallery>
      <GallerySwiper></GallerySwiper>
      <GalleryReel></GalleryReel>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
