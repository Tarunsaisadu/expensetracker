import React from 'react';
import { useState } from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const [year, setYear] = useState('')

    const changeHandler = (event) => {
        setYear(event.target.value);
        const filterYear = {
            years: year,
          };

          props.onSaveFilterData(filterYear)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;