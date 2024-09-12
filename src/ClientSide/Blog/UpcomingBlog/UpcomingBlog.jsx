// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const UpcomingBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="sectionGap">
        <div className="lg:text-center">
          <p className="ourBlogSmall">Our Blog</p>
          <h3 className="ourBlogTitle">trending blog</h3>
        </div>
        <div className="slider-container  ">
          <Slider {...settings}>
            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1  pb-[30px] ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://i.ibb.co.com/mqZt6bR/untitled-2-66e32b9d4d98b.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      ATTENDING MY FRIEND’S GRANDMOTHER’S BIRTHDAY – JOIS DE
                      VIVRE
                    </h3>
                    <p className="blogParaText">
                      was fortunate enough to gain a Jois-de-vivre experience in
                      my buddy Monika’s grandma’s 75th birthday party, which
                      reflected the essence of the idea.
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://i.ibb.co.com/3vg6m1s/2-66e32c48eb974.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      JOY OF LIVING AND WELLNESS FOR ALL
                    </h3>
                    <p className="blogParaText">
                      The joy of living depicts the path following the practices
                      which lead a person to live a simple life.
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://i.ibb.co.com/9VHMBJC/3-66e32c931ea00.webp"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">Spice Up Grandpa</h3>
                    <p className="blogParaText">
                      Grandpa has always been interested in performing and
                      enjoying varied range of activities to rejuvenate or
                      recuperate.
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 pl-[10px] ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      Caring for Geriatric Patients
                    </h3>
                    <p className="blogParaText">
                      The mundane matters of everyday life take up a lot of time
                      and energy
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>

      {/* for mobile devices */}
      {/* <div className="sectionGap xl:hidden">
        <div className="lg:text-center">
          <h3 className="ourBlogTitle">upcoming blog</h3>
        </div>
        <div className="slider-container  ">
          <Slider {...settings}>
            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1  pb-[30px] ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      Caring for Geriatric Patients
                    </h3>
                    <p className="blogParaText">
                      The mundane matters of everyday life take up a lot of time
                      and energy
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      Caring for Geriatric Patients
                    </h3>
                    <p className="blogParaText">
                      The mundane matters of life take up a lot of time and
                      energy
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      Caring for Geriatric Patients
                    </h3>
                    <p className="blogParaText">
                      The mundane matters of everyday life take up a lot of time
                      and energy
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/induvisual-blog">
              <div className="grid grid-cols-1 pl-[10px] ">
                <div>
                  <div className="h-[284px]">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="blogSubtitleText">
                      Caring for Geriatric Patients
                    </h3>
                    <p className="blogParaText">
                      The mundane matters of everyday life take up a lot of time
                      and energy
                    </p>
                    <button className="blogBtn">Read More</button>
                  </div>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div> */}

      {/* <div className="md:block sectionGap hidden">
        <div className="lg:text-center">
          <h3 className="ourBlogTitle">Trending Blog</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-[20px] lg:gap-y-[30px]">
          <Link to="/induvisual-blog">
            <div className="  ">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/induvisual-blog">
            <div className=" ">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/induvisual-blog">
            <div className="">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/induvisual-blog">
            <div className=" ">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/induvisual-blog">
            <div className=" ">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/induvisual-blog">
            <div className="  ">
              <div>
                <div className="h-[284px]">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="blogSubtitleText">
                    Caring for Geriatric Patients
                  </h3>
                  <p className="blogParaText">
                    The mundane matters of everyday life take up a lot of time
                    and energy
                  </p>
                  <button className="blogBtn">Read More</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default UpcomingBlog;
