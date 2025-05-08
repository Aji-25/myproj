import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HabitTracker from './HabitTracker';
import WeeklyReport from './WeeklyReport';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HabitTracker />} />
        <Route path="/weekly-report" element={<WeeklyReport />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
