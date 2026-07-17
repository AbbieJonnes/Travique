import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { FavoritesProvider } from './context/FavouritesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BookingProvider>
      <FavoritesProvider/>
      <App />
      </BookingProvider>
    </AuthProvider>
  </StrictMode>,
);