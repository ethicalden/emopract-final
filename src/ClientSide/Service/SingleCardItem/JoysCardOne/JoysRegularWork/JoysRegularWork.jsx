/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoysRegularWork = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='sectionGap'>
            <div>
                <div className='joysRegularWorkImgParent'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                </div>
                <h3 className='joysTitle'>Regular Work</h3>

                <p className='joysPara'>The mundane matters of everyday life take up a lot of time and energy Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years.

                    <br /> <br />
                    Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. Geriatric care is about giving medical care to older people. It helps diagnose and treat their health problems. As more people live longer, this care is getting more important. By 2050, there will be many more people over 65 than there were in 2020. So, healthcare needs to change to help older people better. Families also need to know what care options they have for their elderly loved ones. This kind of care does more than just treat sickness. It looks at the whole health of older adults. A team of healthcare workers like doctors, nurses, and others come together. They make a care plan that fits each person’s needs. These plans help with not just medical issues but also the emotional and social parts of getting oldeIn this blog, we’ll talk about the benefits of geriatric care. It includes checking the overall health, managing long-term illnesses, supporting mental health, and helping with medicines. By learning about geriatric care, families can make sure their older loved ones get the best care in their later years. </p>
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
                            <p className='joysFirstSliderSubtitle'>The mundane matters of everyday life take up a lot of time and energy</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Outings</h3>
                            <p className='joysFirstSliderSubtitle'>Every senior citizen you talk to will have a common grouse. They yearn to go out at times but hesitate because they lack the confidence to leave home alone. Our team members will be available on call for visits, long and short. Be it shopping malls, restaurants, religious places…the choice is with our members. Sometimes all that stands between an elder and an invigorating cup of coffee at a trending café is someone to take them there. The wish to have a relaxing drink at a favorite bar is qualified by the concern of getting back safely. Now the worries can depart and the desires rule; now our elders can sit back, drink in life and relish every sip.</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Companionship</h3>
                            <p className='joysFirstSliderSubtitle'>Sometimes we just want someone to sit with us and make us feel cocooned in companionship. A simple chat, maybe over a cup of tea, the quintessential 'adda' that Bengalis have patented and all Indians cherish. At other times, when even words feel like too much work, we might just want another person to share a companionable silence over a favorite television program. Or match steps with one on a walk through the nearby park. Simple demands? Yes, but often difficult to meet in our present day circumstances. Let our team members bring to you the greatest gift of all- the gift of time! Leave the worry to us and have a wonderful time of companionship.</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Entertainment</h3>
                            <p className='joysFirstSliderSubtitle'>People forego so many temptations because they have work, obligations, responsibilities, duties. ‘We’ll do it later, when we retire”, that’s the common consolation to offer oneself. But when finally one has the much-awaited leisure, too many years have passed. Even going out to a multiplex for a film or the theatre for a play seems daunting. But what if there was someone always at hand to accompany a senior citizen to an event or an occasion? Suddenly the social gathering at a friend’s place or a garden sale at the nursery doesn’t seem an impossible venture. Team Emopract ensures cherished smiles.</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Home - But not Alone</h3>
                            <p className='joysFirstSliderSubtitle'>Even within their home, challenges often flummox the elderly. If people are coming over for a meal or a gathering, the once competent host now finds herself unsure. All such worries can be taken care of with a single phone call. A hobby that was once a passion can now fill retirement hours with pure pleasure, thanks to our team. Even if it is something as simple as having someone to play a board game with, watch a film, or read out a favourite book, our Joys of Living stars are always ready to bring you the little Joys of Life. </p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                    <div >
                        <div className='joysSliderImgParent'>
                            <img className='h-full w-full object-cover rounded-t-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                        </div>
                        <div className='border-[2px] border-l-[#7EA254] border-r-[#7EA254] border-b-[#7EA254] rounded-b-[10px] text-center'>
                            <h3 className='joysFirstSliderTitle'>Technical Support</h3>
                            <p className='joysFirstSliderSubtitle'>Today’s world runs on Wi-Fi, and apps rule our world. The gap between yesterday’s people and the world today can be bridged by our team. Be it wrestling with new age devices or figuring out social media, nothing needs to be too difficult. Help is at hand to set up OTT services. Necessary apps for delivery and other important services will be downloaded and customised for members. Technology comes with its glitches, and elders need regular assistance to deal with them – from Wi-Fi fix to network issues. And almost every member will use video calls to connect with children and grandchildren abroad. For all such logistical support, our young tech-savvy team is at hand to help.</p>
                            <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default JoysRegularWork;