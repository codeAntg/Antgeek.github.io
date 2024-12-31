import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';
import HomePage from './pages/HomePage';
import AboutMe from "./pages/AboutMe";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
    );
};

export default AppRouter;