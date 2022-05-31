import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020')

  const filterChangeHandler = (selectedYear) =>{

    setFilterYear(selectedYear)
  }
     
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <div>
        <Card className="expenses">
          <div>
            <ExpensesFilter selected={filterYear} onSaveFilterData = {filterChangeHandler}/>
          </div>
          {filteredExpenses.map((expense)=>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </Card>
    </div>
  )
}

export default Expenses