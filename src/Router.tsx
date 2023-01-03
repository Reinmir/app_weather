import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "./components/App/App";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./pages/MainPage";

const Router: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/weather-forecast" element={<MainPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
