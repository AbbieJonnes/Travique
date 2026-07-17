import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <BookingProvider>
      <FavoritesProvider>
      <App />
      </FavoritesProvider>
      </BookingProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);