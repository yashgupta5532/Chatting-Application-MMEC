import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import NotFound from "./pages/NotFound";
import {Backdrop} from "@mui/material"

const Home = lazy(() => import("./pages/Home"));
const Group = lazy(() => import("./pages/Group"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const LayoutLoader = lazy(()=>import ("./components/layout/Loaders"))

const user = true;
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Backdrop open />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
