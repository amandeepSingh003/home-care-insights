// "use server";

// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// const inter = Inter({ subsets: ["latin"] });
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Home Care Insights",
  description:
    "Browse real-time insights and research your next job in the broad Home Health and Elderly Care Industry. The only platform focused only on jobs in Senior Living, Hospice & Palliative Care, Home Care employers.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <Header />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
