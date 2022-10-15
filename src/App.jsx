import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcom';

// TODO: ADD PARENT ERROR ELEMENT

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      {}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
