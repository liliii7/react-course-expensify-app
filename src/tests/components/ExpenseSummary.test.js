import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('should correctly render Expenses Summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={125} />)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render Expenses Summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={500} />)
    expect(wrapper).toMatchSnapshot();
})