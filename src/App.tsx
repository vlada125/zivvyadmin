// Dependencies
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import SignInPage from './pages/SignIn';
import ResetPasswordPage from './pages/ResetPassword';
import PasswordRecoveryPage from './pages/PasswordRecovery';
import LogoutSuccessPage from './pages/LogoutSuccess';
import UnlockPage from './pages/Unlock';
import ErrorPage from './pages/Error';

// Routes
import * as ROUTES from './constants/routes';

// Export App
const App = () => {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.SIGNIN_PAGE} element={<SignInPage />} />
          <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route path={ROUTES.PASSWORD_RECOVERY} element={<PasswordRecoveryPage />} />
          <Route path={ROUTES.LOGOUT_SUCCESS} element={<LogoutSuccessPage />} />
          <Route path={ROUTES.UNLOCK} element={<UnlockPage />} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
          {/* <Route path={'/*'} element={<Navigate to={ROUTES.SIGNIN_PAGE} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
