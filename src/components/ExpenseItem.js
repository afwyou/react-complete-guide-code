import { directive } from "@babel/types";
import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div> Sep 9th 2023</div>
      <div className="expense-item__discription">
        <h2>Buy cheese</h2>
        <div className="expense-item__prize">526.35</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
