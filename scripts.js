/*
This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
*/

const makeRandomPrice = (lowerRange,upperRange) => {
  if (lowerRange >= upperRange) {return 0};
  return Math.round(Math.random()*(upperRange-lowerRange)+lowerRange);
}

const makeArray = (n,k) => {
  finalArray = [];
  for (y=0; y<k; y++) {
    tempArray = [];
    for (x=0; x<n; x++) {
      tempArray.push(makeRandomPrice(10000,20000));
    };
    finalArray.push(tempArray);
  };
  return finalArray;
};

console.log(makeArray(3,3))

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
});
