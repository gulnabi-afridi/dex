import React, { ReactNode } from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useRouter } from "next/router";

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  const Router = useRouter();
  console.log(Router.pathname);

  return (
    <React.Fragment>
      {Router.pathname === "/tokenomics" ? <Header2 /> : <Header />}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
