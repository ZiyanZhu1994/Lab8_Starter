// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Phone number test should return true", () => {
    expect(functions.isPhoneNumber("858-568-3859")).toBe(true);
  });
  
  test("Phone number test should return true", () => {
    expect(functions.isPhoneNumber("(858) 568-3859")).toBe(true);
  });
  
  test("Phone number test should return false", () => {
    expect(functions.isPhoneNumber("1111111111")).toBe(false);
  });
  
  test("Phone number test should return false", () => {
    expect(functions.isPhoneNumber("abc12344")).toBe(false);
  });


test('Email fushang@ucsd.edu to true',()=>{
    expect(functions.isEmail('ziz276@ucsd.edu')).toBe(true);
});
test('Email fushang@abc.co to true',()=>{
    expect(functions.isEmail('ziyan@ucsd.edu')).toBe(true);
});
test('Email shang.com to false',()=>{
    expect(functions.isEmail('@ucsd')).toBe(false);
});
test('Email fushang@abc.commm to false',()=>{
    expect(functions.isEmail('ziyan')).toBe(false);
});

// The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
test('Strong password abcde to true',()=>{
    expect(functions.isStrongPassword('aA1_w')).toBe(true);
});
test('Strong password Abcd12345 to true',()=>{
    expect(functions.isStrongPassword('l1_sA')).toBe(true);
});
test('Strong password 12345 to false',()=>{
    expect(functions.isStrongPassword('@asd')).toBe(false);
});
test('Strong password ab# to false',()=>{
    expect(functions.isStrongPassword('=12')).toBe(false);
});

test("Date test should return true", () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
  });
  
  test("Date test should return true", () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
  });
  
  test("Date test should return false", () => {
    expect(functions.isDate("1/1/22")).toBe(false);
  });
  
  test("Date test should return false", () => {
    expect(functions.isDate("11/20")).toBe(false);
  });

  test("Hex test should return true", () => {
    expect(functions.isHexColor("#fff111")).toBe(true);
  });
  
  test("Hex test should return true", () => {
    expect(functions.isHexColor("#111")).toBe(true);
  });
  
  test("Hex test should return false", () => {
    expect(functions.isHexColor("#12335678")).toBe(false);
  });
  
  test("Hex test should return false", () => {
    expect(functions.isHexColor("#asfdsfd2")).toBe(false);
  });