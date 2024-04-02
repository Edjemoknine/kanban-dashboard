import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import moment from "moment";
import { BiSearch } from "react-icons/bi";
import SideBar from "../components/SideBar/SideBar";
const Layout = () => {
  return (
    <div id="dashboard">
      <div className={css.container}>
        <SideBar />
        <div className={css.dashboard}>
          <div className={css.topBaseGradients}>
            <div className="gradient-red"></div>
            <div className="gradient-orange"></div>
            <div className="gradient-blue"></div>
          </div>
          <div className={css.header}>
            <span>{moment().format("dddd, Do MMM YYYY")}</span>

            <div className={css.searchBar}>
              <BiSearch />
              <input type="text" placeholder="Search" />
            </div>
            <div className={css.profile}>
              <img src="./vite.svg" alt="profile" />
              <div className={css.details}>
                <span>Denis Steven</span>
                <span>devissteven@gmail.com</span>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
