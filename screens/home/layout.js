import React from "react";
import Footer from "./footer";
import Show1 from "./show1";
import DesktopContainer from "./responsive.desktop";
import MobileContainer from "./responsive.mobile";

const ResponseContainer = ({ children }) => (
  <div>
    <DesktopContainer> {children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

const Layout = () => (
  <ResponseContainer>
    <Show1 />
    <Footer />
  </ResponseContainer>
);
export default Layout;
