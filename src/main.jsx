// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import MainLayout from "./layouts/MainLayout.jsx";
// import Home from "./components/Home.jsx";
// import AddCoffee from "./components/AddCoffee.jsx";
// import UpdateCoffee from "./components/UpdateCoffee.jsx";
// import CoffeeDetails from "./components/CoffeeDetails.jsx";
// import Signin from "./authentication/Signin.jsx";
// import Signup from "./authentication/Signup.jsx";
// import AuthProvider from "./context/AuthProvider.jsx";
// import Users from "./components/Users.jsx";

// //

// import { useQueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { getTodos, postTodo } from "../my-api";
// import Users2 from "./components/Users2.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     children: [
//       {
//         index: true,
//         loader: () => fetch("https://coffee-management-server.vercel.app/coffees"),
//         Component: Home,
//       },
//       {
//         path: "addcoffee",
//         Component: AddCoffee,
//       },
//       {
//         path: "coffee/:id",
//         loader: ({ params }) =>
//           fetch(`https://coffee-management-server.vercel.app/coffees/${params.id}`),
//         Component: CoffeeDetails,
//       },

//       {
//         path: "updateCoffee/:id",
//         loader: ({ params }) =>
//           fetch(`https://coffee-management-server.vercel.app/coffees/${params.id}`),
//         Component: UpdateCoffee,
//       },
//       {
//         path: "signin",
//         Component: Signin,
//       },
//       {
//         path: "signup",
//         Component: Signup,
//       },
//       {
//         path: "users",
//         loader: () => fetch("https://coffee-management-server.vercel.app/users"),
//         Component: Users,
//       },
//       {
//         path: "users2",

//         Component: Users2,
//       },
//     ],
//   },
// ]);

// const queryClient = new QueryClient();

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <RouterProvider router={router} />
//       </AuthProvider>
//     </QueryClientProvider>
//   </StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import Signin from "./authentication/Signin.jsx";
import Signup from "./authentication/Signup.jsx";
import Users from "./components/Users.jsx";
import Users2 from "./components/Users2.jsx";

import AuthProvider from "./context/AuthProvider.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-management-server.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "addcoffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-management-server.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-management-server.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "users",
        loader: () => fetch("https://coffee-management-server.vercel.app/users"),
        Component: Users,
      },
      {
        path: "users2",
        Component: Users2,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);