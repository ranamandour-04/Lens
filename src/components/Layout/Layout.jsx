import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function RootLayout({ social }) {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer social={social} />
    </>
  );
}
