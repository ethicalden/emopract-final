// eslint-disable-next-line no-unused-vars
"use client";
import BlogHero from "@/components/Blog/BlogHero";
import UpcomingBlog from "@/components/Blog/UpcomingBlog";
import Footer from "@/components/common/Footer";
import Reels from "@/components/common/Reels";
import React from "react";

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <UpcomingBlog />
      <Reels />
      <Footer />
    </div>
  );
};

export default Blog;
