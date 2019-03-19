// Get sum amount of all expenses

export default (expenses) => {
  return expenses.reduce((acc, currentValue) => {
    return acc + currentValue.amount;
  }, 0);
};