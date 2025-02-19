function calculateFinalScore(obj) {
  if (
    typeof obj != "object" ||
    typeof obj.name != "string" ||
    typeof obj.testScore != "number" ||
    typeof obj.schoolGrade != "number" ||
    typeof obj.isFFamily != "boolean"
  ) {
    return "Invalid Input";
  }

  let totalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily == true) {
    totalScore = totalScore + 20;
  }
  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

let result = calculateFinalScore({
  name: "Rajib",
  testScore: 50,
  schoolGrade: 25,
  isFFamily: true,
});

console.log(result);
