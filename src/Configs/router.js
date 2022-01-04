import { Component } from "react";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/movie-detail/:maPhim",
    exact: true,
    Component: DetailMovie,
  },
  {
    path: "/booking",
    exact: true,
    Component: Booking,
  },
  {
    path: "/login",
    exact: true,
    Component: Login,
  },
];
/**
 * Admin Router
 * - Dashboard: localhost:3000/admin/dashboard
 * - User: localhost:3000/admin/user
 * - Movie: localhost:3000/admin/movie
 */
export const adminRouter = [
  {
    path: "/admin/dashboard",
    exact: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user",
    exact: false,
    Component: adminUser,
  },
  {
    path: "/admin/movie",
    exact: false,
    Component: adminMovie,
  },
];
