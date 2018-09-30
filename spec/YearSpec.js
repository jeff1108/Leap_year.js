describe("LeapYear", () => {
  // var leapyear;

  it('returns leapyear when year is divisible by 400', () => {
    expect(LeapYear(2000)).toEqual('Year 2000 is a leap year')
  });

  it('returns year when year divisible by 100 by not divisible 400', () => {
    expect(LeapYear(1700)).toEqual('Year 1700 is not a leap year')
  });
  
});
