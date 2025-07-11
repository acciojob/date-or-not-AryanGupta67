function isDate(input) {
  const date = new Date(input);
  return !isNaN(date.getTime());
}


