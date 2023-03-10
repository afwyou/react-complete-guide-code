import { directive } from "@babel/types";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <div className="expense-item__discription">
        <h2>{props.title}</h2>
        <div className="expense-item__prize">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
