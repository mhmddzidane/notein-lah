import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import LayoutPage from "./pages/LayoutPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const token = sessionStorage.getItem("token");

  interface RouteProps {
    user: any;
    children: any;
  }

  const Layout = () => {
    return (
      <div className="flex">
        <LayoutPage />
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ user, children }: RouteProps) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: token ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: token ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute user={token}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
