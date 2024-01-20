import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { Box } from '@mui/material';

import MainPage from './components/pages/main.page';
import LayoutPage from './components/pages/layout.page';
import RegisterPage from './components/pages/register.page';
import LoginPage from './components/pages/login.page';
import NotFoundPage from './components/pages/not-found.page';

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <Box dir="rtl" className="App">
      <CacheProvider value={cacheRtl}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<MainPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CacheProvider>
    </Box>
  );
}

export default App;
