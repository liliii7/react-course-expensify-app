import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import Header from "../components/Header";  
import ExpenseDashboardPage from "../components/Dashboard";
import AddExpensePage from "../components/Add";
import EditExpensePage from "../components/Edit";
import HelpPage from "../components/Help";
import NotFoundPage from "../components/404";

  const AppRouter = () => (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ExpenseDashboardPage />} />
              <Route path="/create" element={<AddExpensePage />} />
              <Route path="/edit/:id" element={<EditExpensePage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
)

export default AppRouter;
  