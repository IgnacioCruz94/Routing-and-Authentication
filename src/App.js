import "./styles.css";
import PostCards from "./views/PostsCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import PostId from "./views/PostId";
import Login from "./views/Login";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <PostCards />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <PostId />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
