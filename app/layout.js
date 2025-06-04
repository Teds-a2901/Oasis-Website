import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-poppins",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  desscription:
    "luxurious cabins hotel located in the heart of the Philippines Bohol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        {/* <div>
          <footer className="max-w-7xl bg-red-500 mx-auto">FOOTER</footer>
        </div> */}
      </body>
    </html>
  );
}
