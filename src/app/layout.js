import { Ubuntu, Varela } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const varela = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Emopract",
  description: "Emopract",
  icons: {
    icon: "https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable}  ${varela.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
