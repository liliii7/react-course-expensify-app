import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpensesListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItems", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
