import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GeneralProvider } from "./context/GeneralContext"

import App from "./components/App";
import List from "./components/List";
import Hymn from './components/Hymn';

const AppRoutes = () => (
  <GeneralProvider>
    <App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:hymnId" element={<Hymn />} />
        </Routes>
      </BrowserRouter>
    </App>
  </GeneralProvider>
);

export default AppRoutes;
