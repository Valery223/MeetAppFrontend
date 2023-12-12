import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import { ChangePass } from "./pages/ChangePass/ChangePass";
import { Chats } from "./pages/Chats/Chats";
import LoginTest from "./pages/Login/LoginTest";
import Registration from "./pages/Registration/Registration";
import { Search } from "./pages/Search";
import { SetApp } from "./pages/SetApp/SetApp";
import { SetProfile } from "./pages/SetProfile/SetProfile";

/*
import {
  ChangePass,
  Chats,
  Login,
  Registration,
  Search,
  SetApp,
  SetProfile,
} from "./pages";
*/

//layouts
import { RootLayout } from "./layouts";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chats" element={<Chats />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
