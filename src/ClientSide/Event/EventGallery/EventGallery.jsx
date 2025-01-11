// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const EventGallery = () => {
//   return (
//     <div className="sectionGap ">
//       {/* mobile screen */}
//       <div className="block md:hidden">
//         <p className="eventGallarySmall">Events</p>
//         <h2 className="eventGarlleryTitle">Celebration</h2>

//         <div className="flex justify-between gap-x-[15px] ">
//           <div>
//             {/* indep */}
//             <div className="relative">
//               <div className="img1">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/B6K7DH0/independence-day-fusion-celebration-66c3b0bf15c6b.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">15 August 2025</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Independence Day</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>our pride ... our glory</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>

//             {/* story */}
//             <div className="relative">
//               <div className="img2">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/T8hQJJj/story-telling-session-2-66c3b11556f09.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">21 Sep'24</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Story Telling Session</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>Contrary to popular belief, is not</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* durga puja */}

//           <div>
//             <div className="relative">
//               <div className="img3">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/WFvGbqR/durga-puja-preview-66c3b1a2dc41b.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent"> Date : 30 Sep - 4 Oct'24 </p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Durga Puja Preview</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>experience excellence </p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* diwali */}
//         <div className="relative">
//           <div className="img4">
//             <img
//               className="h-full w-full object-fill rounded-[10px]"
//               src="https://i.ibb.co/Qf5n47b/emo-2-66c3b1ed6718e.webp"
//               alt=""
//             />
//           </div>
//           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//             <div className="text-white">
//               <p className="dateEvent">26 Oct'24</p>
//             </div>
//             <div className="text-white">
//               <h4 className="hoverTitleGallery">Diwali On</h4>
//               <div className="flex items-center locationTextGallelry">
//                 <FaLocationDot className="mr-2" />
//                 <p>moments of sparkle</p>
//               </div>
//               <button className="ParticipateBtn">Participate</button>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center gap-x-[15px]">
//           <div>
//             {/* childrens day */}
//             <div className="relative">
//               <div className="img5">
//                 <img
//                   className="h-full w-full object-fill rounded-[10px] "
//                   src="https://i.ibb.co/HDtWV10/Children-s-Day-Elders-Way.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">14 Nov'24</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery"> Children's Day</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>elders' way</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>

//             {/* Laugh */}
//             <div className="relative">
//               <div className="img6">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/HPSgFdd/laugh-all-the-way-1-66c3b2f98195f.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">14 Dec'24</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Laugh all the Way</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>fun together</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Xmas to New Year Party */}
//           <div>
//             <div className="relative">
//               <div className="right5">
//                 <img
//                   className="h-full w-full object-fill rounded-[10px]"
//                   src="https://i.ibb.co/L9dDfL4/xmas-to-new-year-party-copy-1-66c3b33cdfbf6.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">28 Dec'24</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Xmas to New Year</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>lets celebrate</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//             {/* elders */}
//             <div className="relative">
//               <div className="right6">
//                 <img
//                   className="h-full w-full  rounded-[10px] object-cover"
//                   src={
//                     "https://i.ibb.co/86tND6V/elders-day-out-picnic-66c3b400ed2a6.webp"
//                   }
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">25 Jan'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Day Out</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>picnic funfare</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= four row ================ */}
//         {/* movie */}
//         <div className="flex justify-between gap-x-[15px] ">
//           <div className="relative">
//             <div className="img3">
//               <img
//                 className="h-full w-full  rounded-[10px]"
//                 src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
//                 alt=""
//               />
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//               <div className="text-white">
//                 <p className="dateEvent">Feb, 14,15,16th</p>
//               </div>
//               <div className="text-white">
//                 <h4 className="hoverTitleGallery">Film Festival</h4>
//                 <div className="flex items-center locationTextGallelry">
//                   <FaLocationDot className="mr-2" />
//                   <p>a feast of films</p>
//                 </div>
//                 <button className="ParticipateBtn">Participate</button>
//               </div>
//             </div>
//           </div>
//           {/* holi */}
//           <div>
//             <div className="relative">
//               <div className="img1">
//                 <img
//                   className="h-full w-full rounded-[10px]"
//                   src="https://i.ibb.co/8KpwVPG/holi-hai-1-66c416852b55b.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">15 Mar'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Holi</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>embrace with color</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//             {/* Spiritual Session */}
//             <div className="relative">
//               <div className="img2">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/rMNbL1c/spiritual-session-1-66c416d52bd17.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">29 Mar'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Meditation</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>in search of difference</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Baishaki  */}
//         <div className="flex justify-between gap-x-[15px] pt-[15px]">
//           <div>
//             <div className="relative">
//               <div className="img1">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">19 Apr'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Baishaki </h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>welcomng the season</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>

//             {/* Rabindra Sandha */}
//             <div className="relative">
//               <div className="img2">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/RSJQFr5/an-evening-with-literature-66c4176782195.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">17 May'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Literary Evening</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>cultural discourse</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="relative">
//               <div className="img3">
//                 <img
//                   className="h-full w-full object-fill rounded-[10px]"
//                   src="https://i.ibb.co/FxfdFhY/live-musical-show-1-66c4181fcd4cb.webp"
//                   alt=""
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                 <div className="text-white">
//                   <p className="dateEvent">28 Jun'25</p>
//                 </div>
//                 <div className="text-white">
//                   <h4 className="hoverTitleGallery">Cultural Show</h4>
//                   <div className="flex items-center locationTextGallelry">
//                     <FaLocationDot className="mr-2" />
//                     <p>musical evening</p>
//                   </div>
//                   <button className="ParticipateBtn">Participate</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Link to="/membership">
//           <button className="exploreMemberShip">Explore Membership </button>
//         </Link>
//       </div>

//       {/* big screen */}
//       <div className="hidden md:block ">
//         <p className="eventGallarySmall text-center">Events</p>
//         <h2 className="eventGarlleryTitle text-center">Trending events</h2>

//         <div
//           className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
//             lg:gap-x-[15px] md:gap-x-[15px] "
//         >
//           {/*1,2,3 pic */}
//           <div
//             className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between
//         xl:grid-cols-2 xl:justify-between
//         md:grid-cols-2 md:justify-between
//         lg:grid-cols-2 lg:justify-between
//       justify-between gap-x-[15px]  2xl:gap-x-[30px]
//        xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
//           >
//             <div className=" ">
//               <div>
//                 <div className="relative img1 w-full ">
//                   <img
//                     className="h-full w-full object-cover rounded-[10px]"
//                     src="https://i.ibb.co/m523GZw/independence-day-fusion-celebration-66c418e04b0dd.webp"
//                     alt=""
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                     <div className="text-white">
//                       <p className="DeskdateEvent">15 August 2025</p>
//                     </div>
//                     <div className="text-white">
//                       <h4 className="DeskhoverTitleGallery">
//                         Independence Day
//                       </h4>
//                       <div className="flex items-center locationTextGallelry">
//                         <FaLocationDot className="mr-2" />
//                         <p className="DeskPara">our pride ... our glory</p>
//                       </div>
//                       <button className="ParticipateBtn">Participate</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative img2 w-full">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/T8hQJJj/story-telling-session-2-66c3b11556f09.webp"
//                   alt=""
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">21 Sep'24</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Story Telling Session</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>Contrary to popular belief, is not</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="relative img3 w-full">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/WFvGbqR/durga-puja-preview-66c3b1a2dc41b.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent"> Date : 30 Sep - 4 Oct'24 </p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Durga Puja Preview</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>experience excellence </p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="flex md:gap-x-[15px] lg:gap-x-[15px] xl:gap-x-[30px]
//           2xl:gap-x-[30px]"
//           >
//             <div>
//               {/* 4,5 */}

//               <div className="relative   2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px]">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/Qf5n47b/emo-2-66c3b1ed6718e.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">26 Oct'24</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Diwali On</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>moments of sparkle</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative md:mt-[15px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[15px]   2xl:h-[478px] xl:h-[478px] lg:h-[300px] md:h-[200px]">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/TLCNByx/childrens-day-elders-way-66c41b87a674b.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">14 Nov'24</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery"> Children's Day</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>elders' way</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 6 , 7 pic */}
//             <div>
//               <div className="relative  2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px] ">
//                 <img
//                   className="h-full w-full object-cover  rounded-[10px]"
//                   src="https://i.ibb.co/HPSgFdd/laugh-all-the-way-1-66c3b2f98195f.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">14 Dec'24</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Laugh all the Way</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>fun together</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="relative md:mt-[15px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[15px]  2xl:h-[478px]
//               xl:h-[478px] lg:h-[300px] md:h-[200px]"
//               >
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/L9dDfL4/xmas-to-new-year-party-copy-1-66c3b33cdfbf6.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">28 Dec'24</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Xmas to New Year</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>lets celebrate</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 8 pic */}
//         <div
//           className="relative 2xl:h-[750px] xl:h-[750px] lg:h-[675px] md:h-[675px] 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px] md:mt-[15px]
//         lg:mt-[15px] xl:mt-[30px] 2xl:mt-[30px]"
//         >
//           <img
//             className="h-full w-full object-cover rounded-[10px]"
//             src="https://i.ibb.co/86tND6V/elders-day-out-picnic-66c3b400ed2a6.webp"
//             alt=""
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//             <div className="text-white">
//               <p className="dateEvent">25 Jan'25</p>
//             </div>
//             <div className="text-white">
//               <h4 className="hoverTitleGallery">Day Out</h4>
//               <div className="flex items-center locationTextGallelry">
//                 <FaLocationDot className="mr-2" />
//                 <p>picnic funfare</p>
//               </div>
//               <button className="ParticipateBtn">Participate</button>
//             </div>
//           </div>
//         </div>

//         <div
//           className=" flex 2xl:gap-x-[30px] xl:gap-x-[30px]
//             lg:gap-x-[15px] md:gap-x-[15px] "
//         >
//           {/*1,2,3 pic */}
//           <div
//             className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between
//         xl:grid-cols-2 xl:justify-between
//         md:grid-cols-2 md:justify-between
//         lg:grid-cols-2 lg:justify-between
//       justify-between gap-x-[15px]  2xl:gap-x-[30px]
//        xl:gap-x-[30px]  lg:gap-x-[15px]  md:gap-x-[15px] "
//           >
//             <div className=" ">
//               <div
//                 className=" relative h-[233px]
//     2xl:h-full
//     xl:h-full
//     md:h-full
//     lg:h-full w-full"
//               >
//                 <img
//                   className="h-full w-full  rounded-[10px]"
//                   src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">Feb, 14,15,16th</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Film Festival</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>a feast of films</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="relative img3 w-full">
//                 <img
//                   className="h-full w-full  rounded-[10px]"
//                   src="https://i.ibb.co/8KpwVPG/holi-hai-1-66c416852b55b.webp"
//                   alt=""
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">19 Apr'25</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Holi </h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>welcomng the season</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="flex md:gap-x-[15px] lg:gap-x-[15px] xl:gap-x-[30px]
//           2xl:gap-x-[30px]"
//           >
//             <div>
//               {/* 4,5 */}

//               <div className="relative   2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px]">
//                 <img
//                   className="h-full w-full object-cover rounded-[10px]"
//                   src="https://i.ibb.co/rMNbL1c/spiritual-session-1-66c416d52bd17.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">29 Mar'25</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Meditation</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>in search of difference</p>
//                     </div>
//                     <button className="text-[8px] leading-[8px] py-[6px] px-[12px] mt-[8px]  font-Ubuntu font-medium text-white bg-[#7EA254] rounded-full">
//                       Participate
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative md:mt-[15px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[15px]   2xl:h-[478px] xl:h-[478px] lg:h-[300px] md:h-[200px]">
//                 <img
//                   className="h-full w-full  rounded-[10px]"
//                   src="https://i.ibb.co/FxfdFhY/live-musical-show-1-66c4181fcd4cb.webp"
//                   alt=""
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">28 Jun'25</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Cultural Show</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-1" />
//                       <p>musical evening</p>
//                     </div>
//                     <button
//                       className="text-[8px] leading-[8px] py-[6px] px-[12px] mt-[8px]

//     font-Ubuntu font-medium text-white bg-[#7EA254] rounded-full"
//                     >
//                       Participate
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 6 , 7 pic */}
//             <div>
//               <div className="relative  2xl:h-[242px] xl:h-[242px] lg:h-[150px] md:h-[100px] ">
//                 <img
//                   className="h-full w-full  rounded-[10px]"
//                   src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">19 Apr'25</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Baishaki </h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>welcomng the season</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="relative md:mt-[15px] xl:mt-[30px] 2xl:mt-[10px] lg:mt-[15px]  2xl:h-[478px]
//               xl:h-[478px] lg:h-[300px] md:h-[200px]"
//               >
//                 <img
//                   className="h-full w-full object-coverrounded-[10px]"
//                   src="https://i.ibb.co/RSJQFr5/an-evening-with-literature-66c4176782195.webp"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
//                   <div className="text-white">
//                     <p className="dateEvent">17 May'25</p>
//                   </div>
//                   <div className="text-white">
//                     <h4 className="hoverTitleGallery">Literary Evening</h4>
//                     <div className="flex items-center locationTextGallelry">
//                       <FaLocationDot className="mr-2" />
//                       <p>cultural discourse</p>
//                     </div>
//                     <button className="ParticipateBtn">Participate</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Link to="/membership">
//           <button className="exploreMemberShip">Explore Membership </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventGallery;

// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EventGallery = () => {
  return (
    <div className="sectionGap ">
      {/* mobile screen */}
      <div className="block md:hidden">
        <p className="eventGallarySmall">Events</p>
        <h2 className="eventGarlleryTitle">Celebration</h2>

        <div className="flex justify-between gap-x-[15px] ">
          <div>
            {/* indep */}
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/B6K7DH0/independence-day-fusion-celebration-66c3b0bf15c6b.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">15 August 2025</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Independence Day</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>our pride ... our glory</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            {/* story */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/T8hQJJj/story-telling-session-2-66c3b11556f09.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">21 Sep'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Story Telling Session</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>Contrary to popular belief, is not</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
          {/* durga puja */}

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/WFvGbqR/durga-puja-preview-66c3b1a2dc41b.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent"> Date : 30 Sep - 4 Oct'24 </p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Durga Puja Preview</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>experience excellence </p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* diwali */}
        <div className="relative">
          <div className="img4">
            <img
              className="h-full w-full object-fill rounded-[10px]"
              src="https://i.ibb.co/Qf5n47b/emo-2-66c3b1ed6718e.webp"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
            <div className="text-white">
              <p className="dateEvent">26 Oct'24</p>
            </div>
            <div className="text-white">
              <h4 className="hoverTitleGallery">Diwali On</h4>
              <div className="flex items-center locationTextGallelry">
                <FaLocationDot className="mr-2" />
                <p>moments of sparkle</p>
              </div>
              <button className="ParticipateBtn">Participate</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-[15px]">
          <div>
            {/* childrens day */}
            <div className="relative">
              <div className="img5">
                <img
                  className="h-full w-full object-fill rounded-[10px] "
                  src="https://i.ibb.co/HDtWV10/Children-s-Day-Elders-Way.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">14 Nov'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery"> Children's Day</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>elders' way</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            {/* Laugh */}
            <div className="relative">
              <div className="img6">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/HPSgFdd/laugh-all-the-way-1-66c3b2f98195f.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">14 Dec'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Laugh all the Way</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>fun together</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
          {/* Xmas to New Year Party */}
          <div>
            <div className="relative">
              <div className="right5">
                <img
                  className="h-full w-full object-fill rounded-[10px]"
                  src="https://i.ibb.co/L9dDfL4/xmas-to-new-year-party-copy-1-66c3b33cdfbf6.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">28 Dec'24</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Xmas to New Year</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>lets celebrate</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            {/* elders */}
            <div className="relative">
              <div className="right6">
                <img
                  className="h-full w-full  rounded-[10px] object-cover"
                  src={
                    "https://i.ibb.co/86tND6V/elders-day-out-picnic-66c3b400ed2a6.webp"
                  }
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">25 Jan'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Day Out</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>picnic funfare</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= four row ================ */}
        {/* movie */}
        <div className="flex justify-between gap-x-[15px] ">
          <div className="relative">
            <div className="img3">
              <img
                className="h-full w-full  rounded-[10px]"
                src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">Feb, 14,15,16th</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Film Festival</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>a feast of films</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
          {/* holi */}
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full rounded-[10px]"
                  src="https://i.ibb.co/8KpwVPG/holi-hai-1-66c416852b55b.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">15 Mar'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Holi</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>embrace with color</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
            {/* Spiritual Session */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/rMNbL1c/spiritual-session-1-66c416d52bd17.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">29 Mar'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Meditation</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>in search of difference</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Baishaki  */}
        <div className="flex justify-between gap-x-[15px] pt-[15px]">
          <div>
            <div className="relative">
              <div className="img1">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">19 Apr'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Baishaki </h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>welcomng the season</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>

            {/* Rabindra Sandha */}
            <div className="relative">
              <div className="img2">
                <img
                  className="h-full w-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/RSJQFr5/an-evening-with-literature-66c4176782195.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">17 May'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Literary Evening</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>cultural discourse</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="img3">
                <img
                  className="h-full w-full object-fill rounded-[10px]"
                  src="https://i.ibb.co/FxfdFhY/live-musical-show-1-66c4181fcd4cb.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
                <div className="text-white">
                  <p className="dateEvent">28 Jun'25</p>
                </div>
                <div className="text-white">
                  <h4 className="hoverTitleGallery">Cultural Show</h4>
                  <div className="flex items-center locationTextGallelry">
                    <FaLocationDot className="mr-2" />
                    <p>musical evening</p>
                  </div>
                  <button className="ParticipateBtn">Participate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/membership">
          <button className="exploreMemberShip">Explore Membership </button>
        </Link>
      </div>

      {/* big screen */}
      <div className="hidden md:block ">
        <p className="eventGallarySmall text-center">Events</p>
        <h2 className="eventGarlleryTitle text-center">Trending events</h2>

        {/*1,2,3 pic */}
        <div
          className="grid grid-cols-3   gap-[15px]  2xl:gap-[30px] 
       xl:gap-[30px]  lg:gap-[15px]  md:gap-[15px] "
        >
          <div className="relative img1 w-full ">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/m523GZw/independence-day-fusion-celebration-66c418e04b0dd.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="DeskdateEvent">15 August 2025</p>
              </div>
              <div className="text-white">
                <h4 className="DeskhoverTitleGallery">Independence Day</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p className="DeskPara">our pride ... our glory</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative img1 w-full">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/T8hQJJj/story-telling-session-2-66c3b11556f09.webp"
              alt=""
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">21 Sep'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Story Telling Session</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>Contrary to popular belief, is not</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative img1 w-full">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/WFvGbqR/durga-puja-preview-66c3b1a2dc41b.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent"> Date : 30 Sep - 4 Oct'24 </p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Durga Puja Preview</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>experience excellence </p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          {/* 4,5 */}

          <div className="relative  img1">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/Qf5n47b/emo-2-66c3b1ed6718e.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">26 Oct'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Diwali On</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>moments of sparkle</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative    img1">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/TLCNByx/childrens-day-elders-way-66c41b87a674b.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">14 Nov'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery"> Children's Day</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>elders' way</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          {/* 6 , 7 pic */}

          <div className="relative  img1">
            <img
              className="h-full w-full object-cover  rounded-[10px]"
              src="https://i.ibb.co/HPSgFdd/laugh-all-the-way-1-66c3b2f98195f.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">14 Dec'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Laugh all the Way</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>fun together</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        {/* 8 pic */}
        <div
          className="grid grid-cols-2 gap-[15px]  2xl:gap-[30px] 
       xl:gap-[30px]  lg:gap-[15px]  md:gap-[15px]"
        >
          <div
            className="relative   img1 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px] md:mt-[15px]
        lg:mt-[15px] xl:mt-[30px] 2xl:mt-[30px]"
          >
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/L9dDfL4/xmas-to-new-year-party-copy-1-66c3b33cdfbf6.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">28 Dec'24</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Xmas to New Year</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>lets celebrate</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
          <div
            className="relative img1 2xl:mb-[30px] xl:mb-[30px] lg:mb-[15px] md:mb-[15px] md:mt-[15px]
        lg:mt-[15px] xl:mt-[30px] 2xl:mt-[30px]"
          >
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/86tND6V/elders-day-out-picnic-66c3b400ed2a6.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">25 Jan'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Day Out</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>picnic funfare</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" grid grid-cols-3 2xl:gap-[30px] xl:gap-[30px]
            lg:gap-[15px] md:gap-[15px] "
        >
          {/*1,2,3 pic */}

          <div className=" relative img1 w-full">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://i.ibb.co/qx1z729/elders-film-festival-1-66c4162c5b3b4.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">Feb, 14,15,16th</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Film Festival</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>a feast of films</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div className="relative img1 w-full">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://i.ibb.co/8KpwVPG/holi-hai-1-66c416852b55b.webp"
              alt=""
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">19 Apr'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Holi </h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>welcomng the season</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          {/* 4,5 */}

          <div className="relative   img1">
            <img
              className="h-full w-full object-cover rounded-[10px]"
              src="https://i.ibb.co/rMNbL1c/spiritual-session-1-66c416d52bd17.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">29 Mar'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Meditation</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>in search of difference</p>
                </div>
                <button className="text-[8px] leading-[8px] py-[6px] px-[12px] mt-[8px]  font-Ubuntu font-medium text-white bg-[#7EA254] rounded-full">
                  Participate
                </button>
              </div>
            </div>
          </div>

          <div className="relative img1">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://i.ibb.co/FxfdFhY/live-musical-show-1-66c4181fcd4cb.webp"
              alt=""
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">28 Jun'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Cultural Show</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-1" />
                  <p>musical evening</p>
                </div>
                <button
                  className="text-[8px] leading-[8px] py-[6px] px-[12px] mt-[8px]
    
    font-Ubuntu font-medium text-white bg-[#7EA254] rounded-full"
                >
                  Participate
                </button>
              </div>
            </div>
          </div>

          {/* 6 , 7 pic */}

          <div className="relative  img1 ">
            <img
              className="h-full w-full  rounded-[10px]"
              src="https://i.ibb.co/RzbkbJ2/baishaki-66c4171e463f5.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">19 Apr'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Baishaki </h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>welcomng the season</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>

          <div
            className="relative img1 
              "
          >
            <img
              className="h-full w-full object-coverrounded-[10px]"
              src="https://i.ibb.co/RSJQFr5/an-evening-with-literature-66c4176782195.webp"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between  contentParentGallary rounded-[10px]">
              <div className="text-white">
                <p className="dateEvent">17 May'25</p>
              </div>
              <div className="text-white">
                <h4 className="hoverTitleGallery">Literary Evening</h4>
                <div className="flex items-center locationTextGallelry">
                  <FaLocationDot className="mr-2" />
                  <p>cultural discourse</p>
                </div>
                <button className="ParticipateBtn">Participate</button>
              </div>
            </div>
          </div>
        </div>

        <Link to="/membership">
          <button className="exploreMemberShip">Explore Membership </button>
        </Link>
      </div>
    </div>
  );
};

export default EventGallery;
