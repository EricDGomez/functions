import { vitest, it, describe, expect } from "vitest";
import { f } from "../exercises/e2";

describe('rectArea', () => {
    it('The test function should exist', () => {
        expect(f.rectArea).instanceOf(Function);
    });
    it('The value from the final test function should return 83', () => {
        const side1 = 5;
        const side2 = 6;
        expect(f.rectArea(side1, side2)).toEqual(side1 * side2);
    });
});

describe('roomVars', () => {
    it('The variable of Array type should exist', () => {
        expect(f.roomVars).instanceOf(Array);
    });
    it('All rooms variable values should be defined', () => {
        expect(f.roomVars.filter(item => !item)).toEqual([]);
    });
});

describe('result', () => {

    it('The function should exist', () => {
        expect(f.result).instanceOf(Function);
    });
    it('The result should log a message with a proper value', () => {
        const spy = vitest.spyOn(console, 'log');
        f.result();
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(95);
    });
});

describe('totalRoomsArea', () => {
    const rooms = {
        room1: { first: [5, 9], second: [3, 16] },
        room2: { first: [11, 8], second: [6, 12] },
        room3: { first: [3, 9], second: [7, 4] },
    }
    it('The test function should exist', () => {
        expect(f.totalRoomsArea).instanceOf(Function);
    });
    it('Should return a correct value for diferent values', () => {
        const roomOneFirst = f.rectArea(rooms.room1.first[0], rooms.room1.first[1]);
        const roomTwoFirst = f.rectArea(rooms.room2.first[0], rooms.room2.first[1]);
        const roomThreeFirst = f.rectArea(rooms.room3.first[0], rooms.room3.first[1]);
        const roomOneSecond = f.rectArea(rooms.room1.second[0], rooms.room1.second[1]);
        const roomTwoSecond = f.rectArea(rooms.room2.second[0], rooms.room2.second[1]);
        const roomThreeSecond = f.rectArea(rooms.room3.second[0], rooms.room3.second[1]);
        expect(f.totalRoomsArea(roomOneFirst, roomTwoFirst, roomThreeFirst)).toEqual(160);
        expect(f.totalRoomsArea(roomOneSecond, roomTwoSecond, roomThreeSecond)).toEqual(148);
    });
});
