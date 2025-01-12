"use client";
import Footer from "@/components/common/Footer";
import GalleryDemo from "@/components/gallery/GalleryDemo";
import GalleryReel from "@/components/gallery/GalleryReel";
import HeroSecGallery from "@/components/gallery/HeroSecGallery";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSecGallery />
      <GalleryDemo />
      <GalleryReel />
      <Footer />
    </div>
  );
};

export default Gallery;
