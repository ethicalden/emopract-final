
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };


    return (
        <div className='sectionGap'>
            <div>
                <p className='ourServiceSmall'>Our Team</p>
                <h3 className='ourServiceTitle' >most expert people</h3>
                <p className='ourServicePara'>Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you.</p>
            </div>

            {/* ======== slider cards ========= */}

            <div className="slider-container pt-[35px] ">
                <Slider {...settings}>
                    <div className='grid grid-cols-1 justify-between items-center pb-[10px]' >
                        <div className='joysSliderImgParent relative '>
                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg" alt="" />
                        </div>
                        <div className=' absolute bottom-0  '>
                            <div className='teamContentParent' >
                                <h3 className='joysFirstSliderTitle'>Kyle Macdonald</h3>
                                <p className='aboutTeamSubtitle'>Medical Specialist</p>
                            </div>

                        </div>
                    </div>
                    <div  className='grid grid-cols-1 justify-between items-center' >
                        <div className='joysSliderImgParent relative'>
                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg" alt="" />
                        </div>
                        <div className=' absolute bottom-0   '>
                            <div className='teamContentParent'>
                                <h3 className='joysFirstSliderTitle'>Kyle Macdonald</h3>
                                <p className='aboutTeamSubtitle'>Medical Specialist</p>
                            </div>

                        </div>
                    </div>
                    <div  className='grid grid-cols-1 justify-between items-center' >
                        <div className='joysSliderImgParent relative'>
                            <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719474791/Emopract/doctorOne_g8kwet.jpg" alt="" />
                        </div>
                        <div className=' absolute bottom-0  '>
                            <div className='teamContentParent' >
                                <h3 className='joysFirstSliderTitle'>Kyle Macdonald</h3>
                                <p className='aboutTeamSubtitle'>Medical Specialist</p>
                            </div>

                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default OurTeam;
