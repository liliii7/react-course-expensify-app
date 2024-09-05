import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "../components/Header";  
import Login from "../components/Login";
import ExpenseDashboardPage from "../components/Dashboard";
import AddExpensePage from "../components/Add";
import EditExpensePage from "../components/Edit";
import HelpPage from "../components/Help";
import NotFoundPage from "../components/404";
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

  const AppRouter = () => (
    <Router >
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/dashboard" element={<PrivateRoute> <ExpenseDashboardPage /> </PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute> <AddExpensePage /> </PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute> <EditExpensePage /> </PrivateRoute>} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
)

export default AppRouter;
  