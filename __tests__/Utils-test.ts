import {
  colorForDate,
  isDateCurrent,
  isInputFoo,
  isInputFooAsOptional,
  isRowEven,
} from '../src/utils';

describe('testing utils for Todo example', () => {
  test('is row even', () => {
    expect(isRowEven(0)).toBeTruthy();
    expect(isRowEven(1)).toBeFalsy();
    expect(isRowEven(666)).toBeTruthy();
  });

  test('is input foo', () => {
    expect(isInputFoo('Foo')).toBeTruthy();
    expect(isInputFoo('Foo2')).toBeFalsy();
    expect(isInputFoo('')).toBeFalsy();
  });

  test('is input foo with optional', () => {
    expect(isInputFooAsOptional('Foo')).toBe(3);
    expect(isInputFooAsOptional('Foo2')).toBe(4);
    expect(isInputFooAsOptional('')).toBe(-1);
    expect(isInputFooAsOptional(undefined)).toBe(-1);
  });
});

describe('testing TDD', () => {
  test('color for date', () => {
    expect(colorForDate('15.12.2022')).toBe('green');
    expect(colorForDate('14.12.2022')).toBe('red');
    expect(colorForDate('16.12.2022')).toBe('red');
  });
  test('is Date current', () => {
    expect(isDateCurrent('15.12.2022', '15.12.2022')).toBeTruthy();
    expect(isDateCurrent('14.12.2022', '15.12.2022')).toBeFalsy();
    expect(isDateCurrent('16.12.2022', '15.12.2022')).toBeFalsy();
  });
});
