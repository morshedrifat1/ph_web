function waitingTime(array, serialNumber) {
  if (typeof array != "object" || typeof serialNumber != "number") {
    return "Invalid Input";
  }
  let totalTime = 0;
  for (let i = 0; i < array.length; i++) {
    totalTime = totalTime + array[i];
  }
  let avgTime = Math.round(totalTime / array.length);

  let remaining = serialNumber - 1 - array.length;

  let remainingTime = 0;
  if (remaining > 0) {
    remainingTime = remaining * avgTime;
  }
  return remainingTime;
}

const val = waitingTime([3, 5, 7, 11, 6], 10);
console.log(val);
