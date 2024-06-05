import {sum} from "../sum";

test("Testing the sum function",()=>{
    const result = sum(3,5);

    //Assertion
    expect(result).toBe(8);
});