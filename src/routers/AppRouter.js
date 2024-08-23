import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";  
import ExpenseDashboardPage from "../components/Dashboard";
import addExpensePage from "../components/Add";
import EditExpensePage from "../components/Edit";
import HelpPage from "../components/Help";
import NotFoundPage from "../components/404";
  const AppRouter = () => (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={ExpenseDashboardPage} exact={true} />
              <Route path="/create" component={addExpensePage} />
              <Route path="/edit/:id" component={EditExpensePage} />
              <Route path="/help" component={HelpPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
)

export default AppRouter;
  