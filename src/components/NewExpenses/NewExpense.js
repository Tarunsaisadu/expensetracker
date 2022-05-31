import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import { useState } from 'react'
const NewExpense = (props) => {

  const [displayForm, setDisplayForm] = useState(false)

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setDisplayForm(false)
  }
  const showForm = () => {
    setDisplayForm(true)
  }
  const closeForm = () => {
    setDisplayForm(false)
  }

  return (
    <div className='new-expense'>

      {!displayForm ?
        (<button onClick={showForm}>Add New Expense</button>) :
        (<ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeForm}
        />
        )}

    </div>
  )
}

export default NewExpense