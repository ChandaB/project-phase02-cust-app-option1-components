import React from 'react';

export default function CustomerList({customers, formObject, handleListClick }) {


  return (
    <div>
    <div className="boxed" >
      <h4>Customer List</h4>
      <table id="customer-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(
            (item, index) => {
              return (<tr key={item.id}
                className={(item.id === formObject.id) ? 'selected' : 'not-selected'}
                onClick={() => handleListClick(item)}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td id="masked-password">{item.password}</td>
              </tr>);
            }
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}

