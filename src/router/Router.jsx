import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AllTreatments from "../components/AllTreatments";
import MyAppoinments from "../components/MyAppoinments";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRouter from "../components/PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const serviceRes = await fetch("/service.json");
          const serviceData = await serviceRes.json();

          const happyclientsRes = await fetch("happyclients.json");
          const happyclientsData = await happyclientsRes.json();

          return { serviceData, happyclientsData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppoinments",
        element: <MyAppoinments />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRouter>
            <Details />
          </PrivetRouter>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
