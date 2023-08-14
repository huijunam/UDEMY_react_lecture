import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isHidden, setIsHidden] = useState(true);

    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsHidden(true);
    };

    const startEditingHandler = () => {
        setIsHidden(false);
    }

    const stopEditingHandler = () =>{
        setIsHidden(true);
    };

    if (isHidden){
        return <div className='new-expense' onClick={startEditingHandler}><button>Add New Expense</button></div>
    }

    return (
        <div className='new-expense'>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={stopEditingHandler}/>
        </div>
    )
};

export default NewExpense;