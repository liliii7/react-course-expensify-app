import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";


export const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
    <Link to={`/edit/${id}`}>
    <h1>{description}</h1>
    </Link>
    <p>{numeral(amount).format('0,0.00')}
     - 
     {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
);


export default ExpenseListItem;