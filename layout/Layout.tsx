import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
