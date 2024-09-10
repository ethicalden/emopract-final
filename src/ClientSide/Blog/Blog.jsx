// eslint-disable-next-line no-unused-vars
import React from "react";
import BlogHero from "./BlogHero/BlogHero";
import UpcomingBlog from "./UpcomingBlog/UpcomingBlog";
import Footer from "../Shared/Footer/Footer";
import Reels from "../Home/Reels/Reels";

const Blog = () => {
  return (
    <div>
      <BlogHero></BlogHero>
      <UpcomingBlog></UpcomingBlog>
      <Reels></Reels>
      <div className="xl:pt-[200px] lg:pt-[150px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
