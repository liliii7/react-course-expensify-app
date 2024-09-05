import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../components/Login";


test("should render loging page", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin on button click", () => {
  startLogin = jest.fn();

  const wrapper = shallow(<Login startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
