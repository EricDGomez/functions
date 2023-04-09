import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e5";

describe('getDiffTwentySeven', () => {
  it('The getDiffTwentySeven() function should exist', () => {
    expect(f.getDiffTwentySeven).instanceOf(Function);
  });
  it('Should return difference if less than 27', () => {
    const value = 13;
    expect(f.getDiffTwentySeven(value)).toEqual(14);
  });
  it('Should return difference if equal to 27', () => {
    const value = 27;
    expect(f.getDiffTwentySeven(value)).toEqual(0);
  });
  it('Should return absolute douled difference if greater than 27', () => {
    const value = 37;
    expect(f.getDiffTwentySeven(value)).toEqual(20);
  });
});

describe('sumOfTwoIntegers', () => {
  it('The sumOfTwoIntegers() function should exist', () => {
    expect(f.sumOfTwoIntegers).instanceOf(Function);
  });
  it('Should return sum if not equal to each other', () => {
    const valueOne = 13;
    const valueTwo = 14;
    expect(f.sumOfTwoIntegers(valueOne, valueTwo)).toEqual(27);
  });
  it('Should return tripple sum if equal to each other', () => {
    const value = 12;
    expect(f.sumOfTwoIntegers(value, value)).toEqual(72);
  });
});

// Example1: isOneOfThemOrTheirSumIsFourty(40, 13) => true
// Example2: isOneOfThemOrTheirSumIsFourty(22, 18) => true
// Example3: isOneOfThemOrTheirSumIsFourty(23, 16) => false

describe('isOneOfThemOrTheirSumIsFourty', () => {
  it('The isOneOfThemOrTheirSumIsFourty() function should exist', () => {
    expect(f.isOneOfThemOrTheirSumIsFourty).instanceOf(Function);
  });
  it('Should return true if the first one is 40', () => {
    const valueOne = 40;
    const valueTwo = 13;
    expect(f.isOneOfThemOrTheirSumIsFourty(valueOne, valueTwo)).toEqual(true);
  });
  it('Should return true if the second one is 40', () => {
    const valueOne = 13;
    const valueTwo = 40;
    expect(f.isOneOfThemOrTheirSumIsFourty(valueOne, valueTwo)).toEqual(true);
  });
  it('Should return true the sum is 40', () => {
    const valueOne = 22;
    const valueTwo = 18;
    expect(f.isOneOfThemOrTheirSumIsFourty(valueOne, valueTwo)).toEqual(true);
  });
  it('Should return true if both are 40', () => {
    const valueOne = 40;
    const valueTwo = 40;
    expect(f.isOneOfThemOrTheirSumIsFourty(valueOne, valueTwo)).toEqual(true);
  });
  it('Should false if neither of the or their sum are 40', () => {
    const valueOne = 23;
    const valueTwo = 16;
    expect(f.isOneOfThemOrTheirSumIsFourty(valueOne, valueTwo)).toEqual(false);
  });
});