import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };

  const state = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = { type: "SET_TEXT_FILTER", text: "hola" };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe("hola");
});

test("should set startDate filter", () => {
  const startDate = moment();
  const action = { type: "SET_START_DATE", startDate };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate filter", () => {
    const endDate = moment();
    const action = { type: "SET_END_DATE", endDate };
    const state = filterReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
  });
