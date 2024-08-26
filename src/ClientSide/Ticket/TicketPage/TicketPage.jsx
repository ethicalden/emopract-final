import Navbar from "../../Shared/Navbar/Navbar";

const TicketPage = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex flex-col justify-center items-center">
        <div
          className="bg-white rounded-full flex items-center 
        w-full max-w-[calc(100%-480px)] mx-auto shadow-lg px-[63px] py-[40px]"
        >
          <input
            type="text"
            placeholder="Here unicode"
            className="bg-transparent flex-grow ticketInput py-[13px]  focus:outline-none"
          />
          <button className="ticketButton bg-[#7EA254] text-white rounded-full  px-[32px] py-[24px] hover:bg-green-700 transition">
            Open Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
