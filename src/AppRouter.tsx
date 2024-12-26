import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';
import HomePage from './pages/HomePage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
    );
};

export default AppRouter;