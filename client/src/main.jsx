import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Initialize root

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
