import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
// import emoIcon from "../../../../public/Images/icon.png";

const Chatbot = () => {
  const steps = [
    {
      id: "0",
      message: "Welcome to emopract family!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please tell us your name",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue},",
      trigger: "4",
    },
    {
      id: "4",
      message: "Please enter your email ID",
      trigger: "5",
    },
    {
      id: "5",
      user: true,
      trigger: "6",
    },
    {
      id: "6",
      message: "Please enter your mobile number",
      trigger: "7",
    },
    {
      id: "7",
      user: true,
      trigger: "8",
    },
    {
      id: "8",
      options: [
        { value: 1, label: "View Services", trigger: "9" },
        { value: 2, label: "Read Membership", trigger: "9" },
      ],
    },
    {
      id: "9",
      message: "Thank you for your input!",
      end: true,
    },
  ];

  const theme = {
    background:
      "url('https://i.ibb.co/p4dDp1j/chatbot.jpg') no-repeat center center / cover",
    headerBgColor: "#8bd833",
    headerFontSize: "20px",
    botBubbleColor: "#7EA254",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  const config = {
    botAvatar: "https://i.ibb.co/tzt19m8/icon.png",
    floating: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="Let's Chat" steps={steps} {...config} />
    </ThemeProvider>
  );
};

export default Chatbot;
