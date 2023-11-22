import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventLayout from "./pages/EventLayout";
import CreateEvent from "./components/CreateEvent";
import EventDetailPage from "./pages/EventDetailPage";
import ErrorPage from "./pages/ErrorPage";

import { queryClient } from "./util/http";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
        ],
      },
      {
        path: "create-event",
        element: <CreateEvent />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
