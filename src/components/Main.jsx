import React, { useState } from "react";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Routes, Navigate } from "react-router-native";
import SingIn from "./SingIn";

const Main = () => {

  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <>
      <AppBar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SingIn setIsSignedIn={setIsSignedIn} />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Main;
