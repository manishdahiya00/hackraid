import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import ProtectedRoute from "./Protectedroute";
import { PublicRoute } from "./PublicRoute";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import Overview from "./pages/dashboard/Overview";
import DashboardIndex from "./pages/dashboard";
import TasksPage from "./pages/dashboard/tasks";
import LeaderboardPage from "./pages/dashboard/leaderboard";
import RewardsPage from "./pages/dashboard/rewards";
import AchievementsPage from "./pages/dashboard/achievements";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [{ path: "", element: <HomePage /> }],
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Overview />,
          children: [
            {
              path: "",
              element: <DashboardIndex />,
            },
            {
              path: "overview",
              element: <DashboardIndex />,
            },
            {
              path: "tasks",
              element: <TasksPage />,
            },
            {
              path: "achievements",
              element: <AchievementsPage />,
            },
            {
              path: "leaderboard",
              element: <LeaderboardPage />,
            },
            {
              path: "rewards",
              element: <RewardsPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
