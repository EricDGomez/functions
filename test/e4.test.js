import { vitest, it, describe, expect, beforeEach } from "vitest";
import { f } from "../exercises/e4";

describe('splitFirstAndLastNames', () => {
  const nameStr = 'Someone Somebodyvich';

  it('The function should exist', () => {
    expect(f.splitFirstAndLastNames).instanceOf(Function);
  });

  it('Should return an array of strings from a string', () => {
    expect(f.splitFirstAndLastNames(nameStr)).toEqual(['Someone', 'Somebodyvich']);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!(f.splitFirstAndLastNames).hasOwnProperty('prototype')).toEqual(true);
  });
});

describe('personAge', () => {
  it('The function should exist', () => {
    expect(f.personAge).instanceOf(Function);
  });

  it('Should return the value of the age property of the object passed', () => {
    const obj = { id: 1, name: 'Someone', age: 43 };
    expect(f.personAge(obj)).toEqual(43);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!(f.personAge).hasOwnProperty('prototype')).toEqual(true);
  });
});

describe('isNameInArray', () => {
  it('The function should exist', () => {
    expect(f.isNameInArray).instanceOf(Function);
  });

  it('Should return the value of the age property of the object passed', () => {
    const arr = ['Jon', 'Michael', 'Andrey'];
    expect(f.isNameInArray(arr, 'Michael')).toEqual(true);
    expect(f.isNameInArray(arr, 'James')).toEqual(false);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!(f.isNameInArray).hasOwnProperty('prototype')).toEqual(true);
  });
});

describe("logSecondsUpToMax", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useFakeTimers();
  });

  it("The test function should exist", () => {
    expect(f.logSecondsUpToMax).instanceOf(Function);
  });

  it("The function will log each number 1 - 10 each second", () => {
    const logSpy = vitest.spyOn(console, "log");
    const max = 10;
    f.logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(1);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(2);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(3);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(4);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(5);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(6);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(7);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(8);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(9);
    vitest.advanceTimersByTime(1000); // advance by 10 seconds
    expect(logSpy).toHaveBeenLastCalledWith(10);
  });

  it("The function will not log 11 after 11 seconds", () => {
    const logSpy = vitest.spyOn(console, "log");
    const max = 10;
    f.logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000 * 11); // advance by 10 seconds
    expect(logSpy).not.toHaveBeenCalledWith(11);
  });

  it("The function clears the interval", () => {
    const clearInterval = vitest.spyOn(global, "clearInterval");
    let max = 10;
    f.logSecondsUpToMax(max);
    vitest.advanceTimersByTime(1000 * 10 + 100000);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  it('Must be refactored using arrow function syntax', () => {
    expect(!(f.logSecondsUpToMax).hasOwnProperty('prototype')).toEqual(true);
  });
});
