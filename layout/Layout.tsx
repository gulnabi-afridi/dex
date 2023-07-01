import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
