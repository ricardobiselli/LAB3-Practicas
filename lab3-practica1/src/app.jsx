  import React from 'react';
  import './app.css'
  import Table from './assets/components/table/Table';

  const App = () => {
    const netIncomes = [
      { brand: 'McDonalds', income: 1291283 },
      { brand: 'Burger King', income: 1927361 },
      { brand: 'KFC', income: 1098463 }
    ];

    const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return (
      <div>
        <h1>LAB3 práctica 2</h1>
        <h2>Net income table:</h2>

        <Table data={netIncomes} />
        <p>Average net income: {averageIncome.toFixed(1)}</p>
      </div>
    );
  };

  export default App;
