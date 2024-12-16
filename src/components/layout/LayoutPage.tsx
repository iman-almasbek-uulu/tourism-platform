"use client"
import { FC, ReactNode } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  
  return (
    <Provider store={store}>
      <div className={scss.LayoutPage}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
};

export default LayoutPage;
