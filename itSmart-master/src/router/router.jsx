import codePage from "@/pages/codePage";
import LoginPage from "@/pages/auth/login";
import materialDetails from "@/pages/materialDetails";
import option from "@/pages/option";
import RegisterPage from "@/pages/auth/register";
import { createBrowserRouter } from "react-router";
import AuthLayout from "@/components/ui/layout/AuthLayout";
import ClientLayout from "@/components/ui/layout/ClientLayout";
import Home from "@/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "/",
    Component: ClientLayout,
    children: [
      {
        index: true,
        path: "",
        Component: Home,
      },
      {
        path: "code",
        Component: codePage,
      },
      {
        path: "material",
        Component: materialDetails,
      },
      {
        path: "option",
        Component: option,
      },
    ],
  },
]);
export default router;
