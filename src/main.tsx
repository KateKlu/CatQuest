import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import './styles/index.css';
import { CatQualitiesProvider } from './components/CatQualitiesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <CatQualitiesProvider>
         <App />
      </CatQualitiesProvider>
   </React.StrictMode>
);
