import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e1";

const name = "Andrey";
const age = 18;
const message = 'Here is my first output ever!'

describe('logMessage', () => {
    it('The test function should exist', () => {
        expect(f.logMessage).instanceOf(Function);
    });

    it('The function logs a message in console', async () => {
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessage();
        expect(logSpy).toBeCalledTimes(1);
        expect(logSpy).toBeCalledWith('Hello, World!');
    });

    it('The function returns undefined', async () => {
        expect(f.logMessage()).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMessage).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMyMessage', () => {
    const message = 'Test logMyMessage: Test 0';
    it('The test function should exist', () => {
        expect(f.logMyMessage).instanceOf(Function);
    });

    it('Should log a message passed as an argument', () => {
        const logSpy = vitest.spyOn(console, 'log');
        const messageOne = 'Test logMyMessage: Test 1';
        const messageTwo = 'Test logMyMessage: Test 2';
        f.logMyMessage(messageOne);
        f.logMyMessage(messageTwo);
        expect(logSpy).toBeCalledWith(messageOne);
        expect(logSpy).toHaveBeenLastCalledWith(messageTwo);
    });

    it('The function returns undefined', async () => {
        expect(f.logMyMessage(message)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMyMessage).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMessageWithMyName', () => {
    it('The test function should exist', () => {
        expect(f.logMessageWithMyName).instanceOf(Function);
    });

    it('The function logs a message using the argument passed', () => {
        const nameOne = 'Sarah';
        const nameTwo = 'Dan'
        const logSpy = vitest.spyOn(console, 'log');
        f.logMessageWithMyName(nameOne);
        f.logMessageWithMyName(nameTwo);
        expect(logSpy).toBeCalledWith(`My name is ${nameOne}!`);
        expect(logSpy).toHaveBeenLastCalledWith(`My name is ${nameTwo}!`);
    });

    it('The function returns undefined', async () => {
        expect(f.logMessageWithMyName(name)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMessageWithMyName).hasOwnProperty('prototype')).toEqual(true);
    });
})

describe('logMyInfo', () => {
    const persons = {
        personOne: { name: 'Kris', age: 29 },
        personTwo: { name: 'Emma', age: 23 }
    }
    it('The test function should exist', () => {
        expect(f.logMyInfo).instanceOf(Function);
    });

    it('The function logs a message using two arguments passed', () => {
        const logSpy = vitest.spyOn(console, 'log');
        const testStart = 'My name is';
        const testNameOne = ` ${persons.personOne.name}`;
        const testNameTwo = ` ${persons.personTwo.name}`;
        const testMiddle = '. I am';
        const testAgeOne = ` ${persons.personOne.age} `;
        const testAgeTwo = ` ${persons.personTwo.age} `;
        const testEnd = 'years old!'
        f.logMyInfo(persons.personOne.name, persons.personOne.age);
        f.logMyInfo(persons.personTwo.name, persons.personTwo.age);
        expect(logSpy).toBeCalledWith(`${testStart + testNameOne + testMiddle + testAgeOne + testEnd}`);
        expect(logSpy).toHaveBeenLastCalledWith(`${testStart + testNameTwo + testMiddle + testAgeTwo + testEnd}`);
    });

    it('The function returns undefined', async () => {
        expect(f.logMyInfo(name, age)).toEqual(undefined);
    });

    it('Must use NAMED function syntax', () => {
        expect((f.logMyInfo).hasOwnProperty('prototype')).toEqual(true);
    });
})
