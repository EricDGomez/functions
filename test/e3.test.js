import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e3";

describe('doesArrayIncludeItemBetweenVals', () => {
  it('The final test function should exist', () => {
    expect(f.doesArrayIncludeItemsBetweenVals).instanceOf(Function);
  });

  it('Should return correct values', () => {
    const arr = [45, 62, 3, 21, 7, 19, 59, 22, 34, 87];
    expect(f.doesArrayIncludeItemsBetweenVals(arr, 18, 21)).toEqual(true);
    expect(f.doesArrayIncludeItemsBetweenVals(arr, 19, 21)).toEqual(false);
  });

  it('Should NOT use arrow function syntax', () => {
    expect((f.doesArrayIncludeItemsBetweenVals).hasOwnProperty('prototype')).toEqual(true);
  });
});

describe('getValuesWithCondition', () => {
  const case1 = { num1: 40, num2: 40 };
  const case2 = { num1: 40, num2: 50 };
  const case3 = { num1: 20, num2: 30 };
  const case4 = { num1: 50, num2: 40 };
  const case5 = { num1: 50, num2: 50 };

  it('All three function must exist', () => {
    expect(f.getValueWithConditionOne).instanceOf(Function);
    expect(f.getValueWithConditionTwo).instanceOf(Function);
    expect(f.getValueWithConditionThree).instanceOf(Function);
  });

  it('All three functions must return 80 when both are 40', () => {
    expect(f.getValueWithConditionOne(case1.num1, case1.num2)).toEqual(80);
    expect(f.getValueWithConditionTwo(case1.num1, case1.num2)).toEqual(80);
    expect(f.getValueWithConditionThree(case1.num1, case1.num2)).toEqual(80);
  });

  it('All three functions must return 180 for 40 and 50', () => {
    expect(f.getValueWithConditionOne(case2.num1, case2.num2)).toEqual(180);
    expect(f.getValueWithConditionTwo(case2.num1, case2.num2)).toEqual(180);
    expect(f.getValueWithConditionThree(case2.num1, case2.num2)).toEqual(180);
  });

  it('All three functions must return 100 for 20 and 30', () => {
    expect(f.getValueWithConditionOne(case3.num1, case3.num2)).toEqual(100);
    expect(f.getValueWithConditionTwo(case3.num1, case3.num2)).toEqual(100);
    expect(f.getValueWithConditionThree(case3.num1, case3.num2)).toEqual(100);
  });

  it('All three functions must return 180 for 50 and 40', () => {
    expect(f.getValueWithConditionOne(case4.num1, case4.num2)).toEqual(180);
    expect(f.getValueWithConditionTwo(case4.num1, case4.num2)).toEqual(180);
    expect(f.getValueWithConditionThree(case4.num1, case4.num2)).toEqual(180);
  });

  it('All three functions must return 200 for 50 and 50', () => {
    expect(f.getValueWithConditionOne(case5.num1, case5.num2)).toEqual(200);
    expect(f.getValueWithConditionTwo(case5.num1, case5.num2)).toEqual(200);
    expect(f.getValueWithConditionThree(case5.num1, case5.num2)).toEqual(200);
  });

  it('f.getValueWithConditionOne is NOT an arrow function', () => {
    expect((f.getValueWithConditionOne).hasOwnProperty('prototype')).toEqual(true);
  });

  it('f.getValueWithConditionTwo is an ARROW function', () => {
    expect(!(f.getValueWithConditionTwo).hasOwnProperty('prototype')).toEqual(true);
  });

  it('f.getValueWithConditionThree is NOT an arrow function', () => {
    expect((f.getValueWithConditionThree).hasOwnProperty('prototype')).toEqual(true);
  });
});
