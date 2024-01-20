import './App.css';
import React from 'react';

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { Box } from '@mui/material';

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <Box dir="rtl" className="App">
      <CacheProvider value={cacheRtl}>
        123
      </CacheProvider>
    </Box>
  );
}

export default App;
