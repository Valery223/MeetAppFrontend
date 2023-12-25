import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

export function AuthLayout() {
  return (
    <div className={s.mainWrapper}>
      <SideBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
