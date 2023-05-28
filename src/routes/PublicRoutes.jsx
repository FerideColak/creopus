import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//COMPONENTS
import Login from "../apps/auth/components/Login";
import Register from "../apps/auth/components/Register";

const PublicRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to="login" />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
    )
}

export default PublicRoutes