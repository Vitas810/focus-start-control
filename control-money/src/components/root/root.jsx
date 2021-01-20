import React from 'react';
import ProfitList from '../profitList/ProfitList';
import ExpenseList from '../expenseList/expenseList';

const Root = () => {
  return (
    <div>
      <ProfitList />
      <ExpenseList />
    </div>
  );
};

export default Root;
