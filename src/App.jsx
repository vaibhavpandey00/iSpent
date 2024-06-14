import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from './Components/Auth/ProtectRoute';

const Login = lazy(() => import('./Pages/Login'));
const Home = lazy(() => import('./Pages/Home'));
const NotFound = lazy(() => import('./Pages/NotFound'));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />} >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App