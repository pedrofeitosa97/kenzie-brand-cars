import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import {
  RecoveryChangePasswordFormPage,
  RecoveryConfirmFormPage,
} from "../pages/passwordRecovery";

export default function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/recovery-confirm/:token"
          element={<RecoveryChangePasswordFormPage />}
        />
        <Route path="/recovery" element={<RecoveryConfirmFormPage />} />
      </Routes>
    </>
  );
}
