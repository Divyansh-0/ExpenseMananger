import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import './NewExpenseItem.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function NewExpenseItem(props){
    const [enteredYear,setEnteredYear]=useState('2021')
 const selectionHandler = selectedYear =>{
setEnteredYear(selectedYear);
 }
 const filteredSelection = 
    props.items.filter((selectedDate) =>{

        return selectedDate.date.getFullYear().toString() === enteredYear;
    })


    return(

        <div>
<Card className = "expenses">
   <ExpenseFilter  selected ={enteredYear} onSelection ={selectionHandler}/>
  <ExpenseChart expenses = {filteredSelection} />
  <ExpenseList items={filteredSelection}/>


  
   {console.log(filteredSelection)}
</Card>
</div>
    );
}
 export default NewExpenseItem;