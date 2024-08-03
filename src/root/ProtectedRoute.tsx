import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";





function ProtectedRoute(props: any): JSX.Element {
  const { ui } = useAppSelector((state) => state);

  const isLoggedIn: boolean = ui.isAuth === true;
  const isLoginPage: boolean =(window.location.pathname === "/login") ? true : false;


  const dispatch = useDispatch();

  const { page: Component, layout: Layout } = props;






  return isLoginPage && isLoggedIn ? (
    <Navigate
      to={"/home"}
      state={{ from: `${window.location.pathname}${window.location.search}` }}
      replace
    />
  ) : isLoggedIn === false ? (
    <Navigate
      to="/login"
      state={{ from: `${window.location.pathname}${window.location.search}` }}
      replace
    />
  ) : (
    <>
      <Layout>

        <Component />

      </Layout>
    </>
  );
}

export default ProtectedRoute;
