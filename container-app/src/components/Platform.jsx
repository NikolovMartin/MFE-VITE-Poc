import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Auth from "./Auth";
import apps from "../apps";
import Shell from "./Shell";
import ProtectedRoute from "./ProtectedRoute";

const Platform = () => {
  const fallback = <Navigate to={apps[0].id} />;

  const appRoutes = (
    <>
      {apps.map(({ id, Component }) => {
        return (
          <Route key={id} path={id} element={<App component={Component} />} />
        );
      })}

      <Route index element={fallback} />
      <Route path="*" element={fallback} />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoute />}>
          <>
            <Route path="/" element={<Shell />}>
              {appRoutes}
            </Route>

            <Route path="/standalone">{appRoutes}</Route>
          </>
        </Route>
        <Route path="/auth" element={<Auth />} />
      </>
    )
  );

  return (
    <div className="m-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default Platform;
