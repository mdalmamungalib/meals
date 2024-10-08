import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "./services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"], // Note the use of explicit string literals
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "Meals",
    tamPlate: "%s | Meals",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={roboto.className}>
          <Navbar />
          <div className="min-h-screen bg-gray-100">{children}</div>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
