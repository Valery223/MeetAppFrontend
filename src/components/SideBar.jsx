import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css";

function SideBar() {
  return (
    <nav className={s.mainWrapper}>
      <dl className={s.navlist}>
        <dt>
          <NavLink to="/search" className={s.textelem1}>
            Лента
          </NavLink>
        </dt>
        <dt>
          <NavLink to="/chats" className={s.textelem2}>
            Чаты
          </NavLink>
        </dt>
        <dt>
          <NavLink to="/settings" className={s.textelem3}>
            Настройки
          </NavLink>
        </dt>
      </dl>
    </nav>
  );
}

export default SideBar;
