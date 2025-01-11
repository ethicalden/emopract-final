import TicketPage from "./TicketPage/TicketPage";
import Footer from "../Shared/Footer/Footer";
import TicketEvent from "./TicketEvent/TicketEvent";
import { useEffect } from "react";

const Ticket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TicketPage></TicketPage>
      <TicketEvent></TicketEvent>
      <Footer></Footer>
    </div>
  );
};

export default Ticket;
