import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { CourseDetails } from './pages/courseDetails/courseDetails';
import { CoursesPage } from './pages/coursesPage/coursesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
