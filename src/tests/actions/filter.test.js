import moment from "moment";
import { setStartDate, setEndDate, sortByDate, sortByamount, setTextFilter } from "../../actions/filter";

test("should generate sert start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate sert end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: "SET_END_DATE",
      endDate: moment(0),
    }); 
});

test('should setup sort by amount action object', () => {
    const action = sortByamount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('should setup sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('should generate set text filter object with value', () => {
    const action = setTextFilter('hola');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hola'
    })
})

test('should generate set text filter object without value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})