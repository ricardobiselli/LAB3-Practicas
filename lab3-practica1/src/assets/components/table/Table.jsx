  import React from 'react';


  const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default Table;
