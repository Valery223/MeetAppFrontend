import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Navigate } from "react-router-dom";

//pages
import { Search } from "./pages";

//layouts
import { RootLayout } from "./layouts";

//css
import "./index.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
