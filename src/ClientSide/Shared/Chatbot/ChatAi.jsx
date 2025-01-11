import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// This function sends a request to the Generative Language API
import axios from "axios";

const postResponseToAPI = async (responseContent) => {
  try {
    const payload = {
      contents: [
        {
          parts: [
            {
              text: responseContent,
            },
          ],
        },
      ],
    };

    const response = await axios({
      url:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCGDp2cMVHsFuUb-nXX1fS2uls3v7hDIVo",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });

    // Log the full API response to inspect its structure
    console.log("Full API Response:", response.data);
  } catch (error) {
    console.error("Error posting response to API:", error);
  }
};

const ChatAi = () => {
  // Define the steps for the chatbot
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
      message: "Thank you for your input! How can I assist you today?",
      trigger: "10",
    },
    {
      id: "10",
      user: true,
      trigger: async ({ value }) => {
        await postResponseToAPI(value); // Call the function to post the response
        return "11"; // Proceed to the next step
      },
    },
    {
      id: "11",
      message: ({ previousValue }) => `${previousValue}`, // Show the previous response
      trigger: "10",
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

export default ChatAi;
