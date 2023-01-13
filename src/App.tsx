import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const token = sessionStorage.getItem("token");

  interface RouteProps {
    user: any;
    children: any;
  }

  const ProtectedRoute = ({ user, children }: RouteProps) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute user={token}>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
