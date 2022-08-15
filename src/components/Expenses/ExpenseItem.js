import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'
function ExpenseItem(props){
   // const [title,setTitle] = useState(props.title);
   // const clickHandler =()=>{
   //    setTitle("Updated!!");
   // }


    return (
      <li>
    <Card className = "expense-item">
 <ExpenseDate date = {props.date}></ExpenseDate> 
    <div className="expense-item__description">
       <h2>{props.title}</h2></div>
    <div className="expense-item__price">Rs{props.amount}</div>
    {/* <button onClick={clickHandler}>Click</button> */}
</Card></li>
);}
export default ExpenseItem;
