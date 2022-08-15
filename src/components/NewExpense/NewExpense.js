import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
 import './NewExpense.css'
function NewExpense (props){
const [currentValue,setValue] = useState(false);
const SaveExpenseData =(enteredExpenseData)=>{




    const expenseData ={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
props.onAddExpense(expenseData);}

 const displaySet = ()=>{
    setValue(true);
 }
 const displayEnd = ()=>{
    setValue(false);
 }


    return(
        <div className="new-expense">
            {!currentValue?<button onClick={displaySet}>Add Expense</button>:( <ExpenseForm onSaveExpenseData ={SaveExpenseData} onCancel={displayEnd}/>)
          }
        </div>
    )
        }

export default NewExpense
