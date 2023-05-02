import React, { useContext } from "react";
import { DetailAnnouncementPage } from "./pages/detail_announce";
import Login from "./pages/login_page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/register_page";
import { Navbar } from "./components/navbar";
import { AuthContext } from "./context/AuthContext";
import { ProfileViewUserPage } from "./pages/profile_view_user_page";
import { ProtectedRoutes } from "./components/protected_routes";
import HomePage from "./pages/home";
import {
  RecoveryChangePasswordFormPage,
  RecoveryConfirmFormPage,
} from "./pages/passwordRecovery";

function App() {
  const { userAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar userAuthenticated={userAuthenticated} />
      <Routes>
        <Route
          path=""
          element={
            userAuthenticated ? <Navigate to="/announce-detail" /> : <Login />
          }
        />
        <Route
          path="/register"
          element={
            userAuthenticated ? (
              <Navigate to="/announce-detail" />
            ) : (
              <RegisterPage />
            )
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/announce-detail" element={<DetailAnnouncementPage />} />
          <Route path="/profile/:id" element={<ProfileViewUserPage />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/recovery-confirm/:token"
          element={<RecoveryChangePasswordFormPage />}
        />
        <Route path="/recovery" element={<RecoveryConfirmFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
