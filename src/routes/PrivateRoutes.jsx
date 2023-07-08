import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//COMPONENTS
import Profile from "../apps/profile/components/Profile";

const PrivateRoutes = () => {
    return (
        <Routes>
          <Route path="/*" element={<Navigate to="/profile-page" />}></Route>
          <Route path='profile-page' element={<Profile />}></Route>
        </Routes>
    )
}

export default PrivateRoutes;