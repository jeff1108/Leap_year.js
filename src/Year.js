function LeapYear(year) {
  if (isDivisibleBy400(year) && isDivisibleBy100(year)) {
    return 'Year ' + year + ' is a leap year' }
  else { 
    return 'Year ' + year + ' is not a leap year'
  }
}

function isDivisibleBy400(year) {
  return year % 400 === 0
}

function isDivisibleBy100(year) {
  return year % 100 === 0
}
