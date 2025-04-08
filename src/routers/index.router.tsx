import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const OrderCreatePage = lazy(() => import("@pages/order-create"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "",
          element: <OrderCreatePage />,
          index: true,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASENAME },
);
