export const isRowEven = (index: number): boolean => {
  return index % 2 === 0;
};

export const isInputFoo = (input: string): boolean => {
  return input === 'Foo';
};

export const isInputFooAsOptional = (input?: string): number => {
  return input ? input?.length : -1;
};

export const colorForDate = (inputDate: string): string => {
  return isDateCurrent(inputDate, '15.12.2022') ? 'green' : 'red';
};

export const isDateCurrent = (
  inputDate: string,
  currentDate: string,
): boolean => {
  return inputDate === currentDate;
};
