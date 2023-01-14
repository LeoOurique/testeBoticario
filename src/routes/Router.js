import React from "react";
import { Route, Routes } from "react-router-dom";
import Sacola from "../pages/Sacola/Sacola";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Sacola />} />
      <Route path="/pagamento" element={<Sacola />} />
      <Route path="/confirmacao" element={<Sacola />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};
export default Router;