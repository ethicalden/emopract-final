"use client";
import { useEffect } from "react";
import Footer from "@/components/common/Footer";
import TicketPage from "@/components/Ticket/TicketPage";
import TicketEvent from "@/components/Ticket/TicketEvent";

const Ticket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TicketPage />
      <TicketEvent />
      <Footer />
    </div>
  );
};

export default Ticket;
