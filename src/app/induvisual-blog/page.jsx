// eslint-disable-next-line no-unused-vars
import Footer from "@/components/common/Footer";
import CaringBlog from "@/components/InduvisualBlog/CaringBlog";
import InduvisulBlogHero from "@/components/InduvisualBlog/IndivisulaBlogHero";
import React from "react";

const InduvisulBlog = () => {
  return (
    <div>
      <InduvisulBlogHero />
      <CaringBlog />
      <div className="xl:pt-[200px] lg:pt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default InduvisulBlog;
