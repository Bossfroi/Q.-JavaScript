function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  var longestDuration = 0;
  var longestDynastyName = "";

  for (var i = 0; i < dynastyReign.length; i++) {
    var entry = dynastyReign[i];
    var startYear = convertYear(entry.start);
    var endYear = convertYear(entry.end);

    if (startYear !== "Invalid" && endYear !== "Invalid") {
      var duration = endYear - startYear + 1;
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyName = entry.dynasty; // Change to entry.dynasty
      }
    }
  }

  return longestDynastyName;
}

function convertYear(romanYear) {
  var romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var result = 0;
  var i = 0;

  while (i < romanYear.length) {
    var currentSymbol = romanYear.charAt(i);
    var currentNumber = romanNumerals[currentSymbol];
    var nextSymbol = romanYear.charAt(i + 1);
    var nextNumber = romanNumerals[nextSymbol];

    if (currentNumber === undefined) {
      return "Invalid";
    }

    if (nextNumber !== undefined && currentNumber < nextNumber) {
      result += nextNumber - currentNumber;
      i += 2;
    } else {
      result += currentNumber;
      i += 1;
    }
  }

  return result;
}



// Sample data
var productProfitArray = [
  { name: "Product A", profit: 100 },
  { name: "Product B", profit: -50 },
  { name: "Product C", profit: 200 }
];

var dynastyReign = [
  { dynasty: "Tiberius ", start: "XIV", end: "XXXVII" },
  { dynasty: "Augustus", start: "XXVII", end: "XIV" },
  { dynasty: "Caligula", start: "XXXVII", end: "XLC" }
];


// Console log for testing
console.log("Longest Reigning Dynasty: " + longestDynasty(dynastyReign));
