import css from "./SideBar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={css.container}>
      <img src="./vite.svg" alt="logo" className={css.logo} />
      <div className={css.menu}>
        <NavLink to={"/"} className={css.item} title="Dashboard">
          <MdSpaceDashboard size={30} />
        </NavLink>
        <NavLink to={"board"} className={css.item} title="Trello">
          <FaTasks size={30} />
        </NavLink>
        <NavLink to={"calender"} className={css.item} title="Calender">
          <AiFillCalendar size={30} />
        </NavLink>
        <NavLink to={"users"} className={css.item} title="users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
