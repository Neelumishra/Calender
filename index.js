import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from './demo';
import * as ReactDOM from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
    <StyledEngineProvider injectFirst>
    <Demo />
    </StyledEngineProvider>
 
);
