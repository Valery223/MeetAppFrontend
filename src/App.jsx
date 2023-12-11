import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Test1 from "./pages/Test1";
import Login from "./pages/Login";
import LoginTest from "./pages/LoginTest";
import Registration from "./pages/Registration";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/test1" element={<Test1 />} />
      </Route>
      <Route path="/login" element={<LoginTest />} />
      <Route path="/registration" element={<Registration />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
