import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoates, privatRoutes } from "../router/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route
          key={route.path}
          element={<route.element />}
          exact={route.exact}
          path={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoates.map((route) => (
        <Route
          key={route.path}
          element={<route.element />}
          exact={route.exact}
          path={route.path}
        />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
