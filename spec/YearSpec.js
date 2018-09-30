describe("LeapYear", () => {
  // var leapyear;

  it('returns leapyear when year is divisible by 400', () => {
    expect(LeapYear(400)).toEqual('Year 400 is a leap year')
  });
});
