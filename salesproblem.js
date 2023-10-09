function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  var maxProfit = -Infinity;
  var topProduct = "";

  for (var i = 0; i < productProfitArray.length; i++) {
    var product = productProfitArray[i];
    var profit = product.value;
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product.key;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  var minProfit = Infinity;
  var bottomProduct = "";

  for (var i = 0; i < productProfitArray.length; i++) {
    var product = productProfitArray[i];
    var profit = product.value;
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product.key;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  var closestToZeroProduct = productProfitArray[0].key;
  var closestToZeroProfit = Math.abs(productProfitArray[0].value);

  for (var i = 0; i < productProfitArray.length; i++) {
    var product = productProfitArray[i];
    var profit = Math.abs(product.value);
    if (profit < closestToZeroProfit) {
      closestToZeroProfit = profit;
      closestToZeroProduct = product.key;
    }
  }

  return closestToZeroProduct;
}

var productProfitArray = [
  { key: "Product A", value: 50 },
  { key: "Product B", value: -100 },
  { key: "Product C", value: 75 },
  { key: "Product D", value: 25 },
];

console.log(topProduct(productProfitArray)); // Output: "Product C"
console.log(bottomProduct(productProfitArray)); // Output: "Product B"
console.log(zeroProfitProduct(productProfitArray)); // Output: "Product D"
