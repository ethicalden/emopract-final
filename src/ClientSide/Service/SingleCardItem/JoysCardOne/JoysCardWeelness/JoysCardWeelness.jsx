/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoysCardWeelness = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='sectionGap'>
            <div>
                <h3 className='joysTitle'>Weelness</h3>

                <p className='joysPara'>taying healthy is certainly the major component of a happy life. But it is certainly not the only one....Know More </p>
            </div>

            {/* ======== slider cards ========= */}

            <div className="slider-container">
                <Slider {...settings}>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Regular work</h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Medical Support</h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>IVR Support </h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Emergency Assist</h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Medical Record</h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Wellness</h3>
                            {/* <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default JoysCardWeelness;