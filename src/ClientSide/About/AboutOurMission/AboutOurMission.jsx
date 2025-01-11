import "./AboutOurMission.css";
// import serviceWellness from "../../../../public/Images/servicesWellness2.png";

const AboutOurMission = () => {
  return (
    <div className=" rounded-[10px] sectionGap">
      <div className="relative h-[400] md:h-[450px] xl:h-[500px] 2xl:h-[700px] group">
        <img
          className="h-full w-full  object-cover rounded-[10px]"
          src={"https://i.ibb.co/FKtYyVT/serviceswellness2-66c2ea02f0a39.webp"}
          alt=""
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-5 rounded-b-[10px] opacity-0 transform translate-y-5 transition-opacity  duration-300 ease-in-out group-hover:opacity-80 group-hover:translate-y-0">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="mt-2 storyDoctorDes">
            We provide the services needed to ensure the very best quality of
            life for seniors. Our aim is to help elders be active and carefree,
            reassured by our constant assistance. We promise to offer
            trustworthy and reliable support and peace of mind for seniors and
            their family members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutOurMission;
