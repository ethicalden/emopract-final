// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaringBlog = () => {
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className='sectionGap'>
            <p className='caringBlogSmall'>22nd Mar 2024</p>
            <div>
                <div className='h-[284px] md:h-[350px] lg:h-[550px] 2xl:h-[850px]'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719409715/Emopract/joySlider_hp4biv.jpg" alt="" />
                </div>
                <h3 className='caringTitle'>ATTENDING MY FRIEND’S GRANDMOTHER’S BIRTHDAY – JOIS DE VIVRE </h3>
                <p className='caringParaText'>
                    I was fortunate enough to gain a Jois-de-vivre experience in my buddy Monika’s grandma’s 75th birthday party, which reflected the essence of the idea. As I had to travel to the countryside villa for this event, I was greeted with fresh fruit delicacies along with their other relatives. The cozy light had set the theme for a creative ambience, which was accompanied by chattering’s from guests. While being immersed in such an atmosphere, I was interrupted by the aura created by Grandma’s grand entrance, which reflected grace and wisdom. Upon her arrival, she cozily greeted one and all, including our young and gullible group, with her youthful escapades and stories of special moments spent with her near and dear ones. Her story immersed us, towards reflection of profound joy and nostalgic experiences that life had given us. During such a conversation, I went on saying:
                    Myself: “Grandma, you look radiant in your attire as always! Happy Birthday!”  
                    Grandma Mary: “Thank you, sweetheart. It warms me to greet such a young talent today at my place! Enjoy yourself, dear.” 
                    Myself: “Grandma, your stories are always interesting. Please share the one associated with the mountaineering experience of yours. We all are eager to embrace it.” 
                    Grandma Mary: Gleaming with a nostalgic face, she said “how adventurous it was to have not known to pitch a tent but later manage it all by myself.”
                    Engrossed in conversation and interrupted by Monika, Grandma Mary’s granddaughter and my friend
                    Monika: “Hope you are enjoying the conversation, I have heard it so many times, but still do not feel bored.”
                    Myself: “Yes, indeed am enjoying both her conversation and the apple pie, which is too delicious to share. Please share the secret…”
                    Monika: “Am sorry, dude. This is our family secret, as the ingredients have been used traditionally.” 
                    Myself: “Never mind, lets enjoy! Thank you for inviting and making me a part of this beautiful venture. I have felt like stepping in warm embrace.”
                    Monika: “You have been my childhood friend and I have cherished moments with you. We just wanted Granny to feel surrounded by the love and comfort on her special day.” 
                    We all were interrupted by strings of music, which echoed a celebration tone in the pianoforte, symbolising the essence of Mozart. We were surprised to see Granny Mary playing her favourite note with excellence and grace. She too, after the performance shared her experience of, how she used to learn this in her childhood and how fond she was of the music of Mozart. After a wonderful musical evening, we were eventually called for dinner, which was spread over a traditional large table with different kinds of foods, including those of local delights and all-time favourite ones. The drinks were mainly made with local ingredients that managed to reflect both the secrets of the country delight and that of traditional ideas that are deep-rooted within them. With these experiences I later departed from their country villa with innumerable memories and funniest moments to my abode. 
                </p>
            </div>

            <div className="slider-container pt-[60px] md:pt-[80px] lg:pt-[100xp]  xl:pt-[100px] 2xl:pt-[100px] ">
                <Slider {...settings} >
                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1  pb-[30px] '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>JOY OF LIVING AND WELLNESS FOR ALL</h3>
                                    <p className='blogParaText'>The joy of living depicts the path following the practices which lead a person to live a simple life. The joy of living and wellness intertwine beautifully, creating a harmonious symphony that plays a significant role in the enrichment of our day-to-day life experience. The joy of living is about embracing each moment with gratitude and enthusiasm, finding fulfilment in both the significant achievements and the simple pleasures of life. Wellness deals with the broader and comprehensive perspective of health relying on emotional, mental, and physical happiness and pleasures of life. The joy of living and wellness surrounds the aspirations transcending across the backgrounds, ages, and cultures globally. 

In order to attain a joyful life with wellness, a person needs to train in all the three physical, mental, and emotional pleasures of life. Emopract’s main zeal is to focus on the happiness quotient in serving elders and making them feel free to enjoy their lives. They promise to provide a one-stop solution to all through their wellness regime. This will enable them to connect on a happy quotient and make the elders feel more emotionally attached. Providing them with companions is the motto of Emopract which acts with both emotions and a practical mindset. 

Physical wellness establishes a form of living a joyful life and emphasises active engagement in various activities for enhancing and promoting health relying on the absence of illness. Apart from engaging in various sorts of regular physical exercises like yoga, Zumba dance, cycling, jogging, walking, attending the gym, and doing all household chores, they can enhance energy levels and cheerfully boost mood by venturing towards more interesting and creative outfits. 

Emopract focuses on arranging storytelling events and other creative ventures to free the elders from the mundane atmosphere that they are in. This will enable them to enrich their mindset and lead them to focus on open communication in all aspects of work. This will make them feel both mentally and emotionally contended. The competitive nature of sports will also help them to attain a cheerful mood and maintain a joyful life. Furthermore, these activities will act as popular nutrients by keeping them engaged and energised to learn more and enjoy every bit. 

These aspects of physical wellness will lead them to focus on mental wellness and enable them to cope with the stresses and challenges of life. Making friends with unknown people will help them to gain knowledge on innumerable subjects leading towards positive debates and challenges. Along with this, the mental wellness of elders encompasses various aspects, such as intellectual engagement, emotional regulation, and mental health. Therefore, elders need to integrate practices like therapy and meditation to reduce depression, anxiety, stress, and issues affecting the joy of life. Cultivation of a proper mindset by engaging in hobbies like singing, reading books, watching sports, and attending several events with our companion would be the key towards their stimulation of the mind while optimising mental health.  Emotional regulation can be obtained based on encouraging an individual to follow various practices such as talking about feelings, journaling, and others. 

Proper relationship building and maintaining with colleagues, clients, friends, and families fosters a sense of support. This acts as a key to Emopract which intends to spread their supportive hands to the elderly. Providing mutual respect, empathy, and communication would be significantly helpful in fostering healthy relationships. By focusing on these aspects, Emopract will be able to put a smile on their faces and enrich their lives to the fullest.
</p>
                                    {/* <button className='blogBtn'>Read More</button> */}
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]'>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>SPICE UP GRANDPA</h3>
                                    <p className='blogParaText'>Grandpa has always been interested in performing and enjoying varied range of activities to rejuvenate or recuperate. But his work pressure and schedule did not allow him that space to enjoy his life to the fullest that he had always  fancied for. To spice up his life, Grandpa can now add up 5 interesting and entertaining themes into his life.



1.	Art Therapy and Expressions:
This workshop is a cornerstone routine of therapeutic experience for going solace and healing power. It would lead him to journey of exploring inner world in a meaningful way. Focusing on emotional expressions it would restore his interest for creative art and aesthetic related endeavours. <br/>
2.	Interactive story telling sessions: 
Participation in these sessions would lead him to engage in narratives and personal story telling formats resulting connections with different generation thereby enriching social engagements. Mind stimulation and community feeling would be the allied outcome.<br/>
3.	Virtual Reality Experience:
Virtual Reality (VR) towers with 360-degree photography in about getting a comprehensive overview of space. It offers a captivating way to capture and share spaces. Grandpa would enjoy travelling in different places of the world including those under water and are ancient in nature.<br/>
4.	Theatrical and story telling presentation: 
Workshop associated with these would lead him to reassure his confidence in areas of communication skills even during unprecedented situations. This would also focus on his discovering different facets of his personal development and gather a deeper feeling of story telling creativity through various collaborations.<br/>
5.	Adventurous Activities:
Through these activities Grandpa would enable him to regain his creative pursuits and mental vitality. Hiking of scenic landscapes and exploring new games like paragliding and rock climbing would lead him to establish a mental and emotional connection with the world while gaining unforgettable experiences with his family members. <br/>
</p>
                                    {/* <button className='blogBtn'>Read More</button> */}
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>ATTENDING MY FRIEND’S GRANDMOTHER’S BIRTHDAY – JOIS DE VIVRE </h3>
                                    <p className='blogParaText'>I was fortunate enough to gain a Jois-de-vivre experience in my buddy Monika’s grandma’s 75th birthday party, which reflected the essence of the idea. As I had to travel to the countryside villa for this event, I was greeted with fresh fruit delicacies along with their other relatives. The cozy light had set the theme for a creative ambience, which was accompanied by chattering’s from guests. While being immersed in such an atmosphere, I was interrupted by the aura created by Grandma’s grand entrance, which reflected grace and wisdom. Upon her arrival, she cozily greeted one and all, including our young and gullible group, with her youthful escapades and stories of special moments spent with her near and dear ones. Her story immersed us, towards reflection of profound joy and nostalgic experiences that life had given us. During such a conversation, I went on saying:
Myself: “Grandma, you look radiant in your attire as always! Happy Birthday!”  
Grandma Mary: “Thank you, sweetheart. It warms me to greet such a young talent today at my place! Enjoy yourself, dear.” 
Myself: “Grandma, your stories are always interesting. Please share the one associated with the mountaineering experience of yours. We all are eager to embrace it.” 
Grandma Mary: Gleaming with a nostalgic face, she said “how adventurous it was to have not known to pitch a tent but later manage it all by myself.”
Engrossed in conversation and interrupted by Monika, Grandma Mary’s granddaughter and my friend
Monika: “Hope you are enjoying the conversation, I have heard it so many times, but still do not feel bored.”
Myself: “Yes, indeed am enjoying both her conversation and the apple pie, which is too delicious to share. Please share the secret…”
Monika: “Am sorry, dude. This is our family secret, as the ingredients have been used traditionally.” 
Myself: “Never mind, lets enjoy! Thank you for inviting and making me a part of this beautiful venture. I have felt like stepping in warm embrace.”
Monika: “You have been my childhood friend and I have cherished moments with you. We just wanted Granny to feel surrounded by the love and comfort on her special day.” 
We all were interrupted by strings of music, which echoed a celebration tone in the pianoforte, symbolising the essence of Mozart. We were surprised to see Granny Mary playing her favourite note with excellence and grace. She too, after the performance shared her experience of, how she used to learn this in her childhood and how fond she was of the music of Mozart. After a wonderful musical evening, we were eventually called for dinner, which was spread over a traditional large table with different kinds of foods, including those of local delights and all-time favourite ones. The drinks were mainly made with local ingredients that managed to reflect both the secrets of the country delight and that of traditional ideas that are deep-rooted within them. With these experiences I later departed from their country villa with innumerable memories and funniest moments to my abode. 
</p>
                                    {/* <button className='blogBtn'>Read More</button> */}
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/induvisual-blog">
                        <div className='grid grid-cols-1 pl-[10px] '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>ATTENDING MY FRIEND’S GRANDMOTHER’S BIRTHDAY – JOIS DE VIVRE </h3>
                                    <p className='blogParaText'>I was fortunate enough to gain a Jois-de-vivre experience in my buddy Monika’s grandma’s 75th birthday party, which reflected the essence of the idea. As I had to travel to the countryside villa for this event, I was greeted with fresh fruit delicacies along with their other relatives. The cozy light had set the theme for a creative ambience, which was accompanied by chattering’s from guests. While being immersed in such an atmosphere, I was interrupted by the aura created by Grandma’s grand entrance, which reflected grace and wisdom. Upon her arrival, she cozily greeted one and all, including our young and gullible group, with her youthful escapades and stories of special moments spent with her near and dear ones. Her story immersed us, towards reflection of profound joy and nostalgic experiences that life had given us. During such a conversation, I went on saying:
Myself: “Grandma, you look radiant in your attire as always! Happy Birthday!”  
Grandma Mary: “Thank you, sweetheart. It warms me to greet such a young talent today at my place! Enjoy yourself, dear.” 
Myself: “Grandma, your stories are always interesting. Please share the one associated with the mountaineering experience of yours. We all are eager to embrace it.” 
Grandma Mary: Gleaming with a nostalgic face, she said “how adventurous it was to have not known to pitch a tent but later manage it all by myself.”
Engrossed in conversation and interrupted by Monika, Grandma Mary’s granddaughter and my friend
Monika: “Hope you are enjoying the conversation, I have heard it so many times, but still do not feel bored.”
Myself: “Yes, indeed am enjoying both her conversation and the apple pie, which is too delicious to share. Please share the secret…”
Monika: “Am sorry, dude. This is our family secret, as the ingredients have been used traditionally.” 
Myself: “Never mind, lets enjoy! Thank you for inviting and making me a part of this beautiful venture. I have felt like stepping in warm embrace.”
Monika: “You have been my childhood friend and I have cherished moments with you. We just wanted Granny to feel surrounded by the love and comfort on her special day.” 
We all were interrupted by strings of music, which echoed a celebration tone in the pianoforte, symbolising the essence of Mozart. We were surprised to see Granny Mary playing her favourite note with excellence and grace. She too, after the performance shared her experience of, how she used to learn this in her childhood and how fond she was of the music of Mozart. After a wonderful musical evening, we were eventually called for dinner, which was spread over a traditional large table with different kinds of foods, including those of local delights and all-time favourite ones. The drinks were mainly made with local ingredients that managed to reflect both the secrets of the country delight and that of traditional ideas that are deep-rooted within them. With these experiences I later departed from their country villa with innumerable memories and funniest moments to my abode. 
</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Slider>
            </div>

            {/* for mobile devices */}
            <div className='pt-[70px] md:pt-[80px] lg:pt-[100xp]  xl:hidden'>
                <div className='lg:text-center'>
                    <h3 className='ourBlogTitle'>Trending Blog</h3>
                </div>
                <div className="slider-container  ">
                    <Slider {...settings} >
                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1  pb-[30px] '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 pl-[10px] md:pl-[10px] 2xl:px-[30px] xl:px-[10px]'>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of  life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/induvisual-blog">
                            <div className='grid grid-cols-1 pl-[10px] '>
                                <div>
                                    <div className='h-[284px]'>
                                        <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                        <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                        <button className='blogBtn'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Slider>
                </div>
            </div>

            <div className='xl:block xl:pt-[100px] 2xl:pt-[200px] hidden'>
                <div className='lg:text-center'>
                    <h3 className='ourBlogTitle'>Trending Blog</h3>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-x-[20px] lg:gap-y-[30px]'>
                    <Link to="/induvisual-blog">
                        <div className='  '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=''>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className=' '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/induvisual-blog">
                        <div className='  '>
                            <div>
                                <div className='h-[284px]'>
                                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719494528/Emopract/homeSliderImg_s1d8hx.jpg" alt="" />
                                </div>
                                <div>
                                    <h3 className='blogSubtitleText'>Caring for Geriatric Patients</h3>
                                    <p className='blogParaText'>The mundane matters of everyday life take up a lot of time and energy</p>
                                    <button className='blogBtn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* video  */}
            <div className='pt-[60px] md:pt-[80px] xl:pt-[100px] 2xl:pt-[200px] md:h-[450px] 2xl:h-[794px]'>
                <div className='w-full h-[410px] md:pb-[50px] md:h-[450px] lg:h-[600px] 2xl:h-[764px]'>
                    <img className='h-full w-full object-cover rounded-[10px]' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719386257/Emopract/video_zrgrnw.jpg" alt="" />
                </div>
            </div>
        </div >
    );
};

export default CaringBlog;