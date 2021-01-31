import React from 'react';
import ProfitList from '../profitList/ProfitList';
import ExpenseList from '../expenseList/expenseList';
import Header from '../header';
import { Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={ProfitList} />
        <Route path="/expenseList" component={ExpenseList} />
      </Switch>
    </div>
  );
};

export default Root;
