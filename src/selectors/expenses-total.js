
export default (expenses) => {
    if(expenses.length <= 0){
        return 0;
    }else {
      return expenses
        .map((expense) => expense.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}
 