import TicketPage from "./TicketPage/TicketPage";
import Footer from "../Shared/Footer/Footer";
import TicketEvent from "./TicketEvent/TicketEvent";

const Ticket = () => {
  return (
    <div>
      <TicketPage></TicketPage>
      <TicketEvent></TicketEvent>
      <Footer></Footer>
    </div>
  );
};

export default Ticket;
