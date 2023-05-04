import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import App from "../../App";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ChefDetails from "../Pages/Home/Chefs/chef/ChefDetails";
import Error from "../Pages/Home/Error";
import PrivateRoute from "../Routes/PrivateRoute";
import Blogs from "../shared/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
