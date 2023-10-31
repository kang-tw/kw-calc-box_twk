const {test , expect} = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5",()=>{
    expect(lib.avg([3,5,7])).toBe(5);


});


test("avg([-5,5]) should be 0",()=>{
    expect(lib.avg([-5,5])).toBe(0);


});


test("fact 10 should be 3628800",()=>{
    expect(lib.fact(10)).toBe(3628800);


});

test("fact 5 should be 120",()=>{
    expect(lib.fact(5)).toBe(120);


});

test("fact 8 should be 40320",()=>{
    expect(lib.fact(8)).toBe(40320);


});



test("prime 13 should be true",()=>{
    expect(lib.prime(13)).toBe(true);


});

test("prime 1 should be false",()=>{
    expect(lib.prime(1)).toBe(false);


});

test("prime 19 should be true",()=>{
    expect(lib.prime(19)).toBe(true);


});