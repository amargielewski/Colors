import { Footer } from "components/Footer/Footer";
import { ReactChild } from "react";
import "./MainLayout.scss";

type MainLayoutProps = {
  children: ReactChild | ReactChild[];
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-content-container">{children}</div>
      <Footer />
    </div>
  );
};
