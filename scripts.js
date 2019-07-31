/*
This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
*/

const makeRandom = (lowerRange,upperRange) => {
  if (lowerRange >= upperRange) {return 0};
  return Math.round(Math.random()*(upperRange-lowerRange)+lowerRange);
}

const makeMatrix = (n,k) => {
  finalArray = [];
  for (y=0; y<k; y++) {
    tempArray = [];
    for (x=0; x<n; x++) {
      tempArray.push(makeRandom(10000,20000));
    };
    finalArray.push(tempArray);
  };
  return finalArray;
};

const findLowest = (yourMatrix) => {
  let lowest = yourMatrix[0][0];
  for (y=0; y < yourMatrix.length; y++) {
    for (x=0; x < yourMatrix[y].length; x++) {
      if (lowest > yourMatrix[y][x]) {
        lowest = yourMatrix[y][x];
      }
    }
  }
  return lowest;
}

let test = makeMatrix(makeRandom(2,10),makeRandom(2,10));
//console.log('testArray = ', test);
let lowestPrice = findLowest(test);
//console.log('lowest Price = ', lowestPrice);

$(document).ready(function() {

  for (y=0; y < test.length; y++) {
    $('#output-section-1').append('<p>'+JSON.stringify(test[y])+'</p>');
  }
  $('#output-section-2').text(lowestPrice);
});
