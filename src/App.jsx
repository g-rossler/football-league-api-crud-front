import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import WelcomeLayout from "./pages/WelcomeLayout";
import NewTeamLayout from "./pages/NewTeamLayout";
import "./index.css";
import TeamLayout from "./pages/LeagueTableLayout";

// TODO: ADD PARENT ERROR ELEMENT

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <WelcomeLayout /> }],
  },
  {
    path: "add-team",
    element: <RootLayout />,
    children: [{ index: true, element: <NewTeamLayout /> }],
  },
  {
    path: "teams",
    element: <RootLayout />,
    children: [{ index: true, element: <TeamLayout /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
