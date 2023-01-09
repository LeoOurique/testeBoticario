import React from "react";
import { Route, Routes } from "react-router-dom";
import Sacola from "../pages/Sacola/Sacola";
import Pagamento from "../pages/Pagamento";
import Confirmacao from "../pages/Confirmacao";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Sacola />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};
export default Router;