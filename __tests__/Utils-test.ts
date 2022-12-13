import {isRowEven} from '../src/utils';

describe('testing utils for Todo example', () => {
  test('is row even', () => {
    expect(isRowEven(0)).toBeTruthy();
    expect(isRowEven(1)).toBeFalsy();
    expect(isRowEven(666)).toBeTruthy();
  });
});
