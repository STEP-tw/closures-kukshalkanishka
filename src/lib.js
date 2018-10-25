const makeConstant = function(value) {
  return function(){
    return value
  };
}

const makeCounterFromN = function(beginValue){
  let count = beginValue;
  return function(){
    return count++;
  };
}

const makeCounterFromZero = function(){
  let count = 0;
  return function(){
    return count++;
  };
}

const makeDeltaTracker = function(oldValue){
  return function(valueToAdd){
    if(valueToAdd == undefined){
      valueToAdd = 0;
    }
    let sum = oldValue + valueToAdd;
    let deltaTrack = {old : oldValue, delta : valueToAdd, "new" : sum};
    oldValue += valueToAdd;
    return deltaTrack;
  };
}

const makeFiboGenerator = function(firstTerm, secondTerm){
  
  if(firstTerm == undefined){
    firstTerm = 0;
    secondTerm = 1;
  }

  if(secondTerm == undefined){
    secondTerm = firstTerm;
    firstTerm = 0;
  }
  
  let currentTerm = secondTerm - firstTerm;
  let previousTerm =  firstTerm - currentTerm; 

  const generateFib = function(){
    let sum = Math.abs(previousTerm + currentTerm);
    previousTerm = currentTerm;
    currentTerm = sum;
    return sum;
  }
  return generateFib;
}

const makeCycler = function(inputElements){
  let elements = [];
  let position = 0;

  const copy = function(element){
    return elements.push(element);
  }
  inputElements.map(copy);

  return function(){
    element = elements[position];
    position++;
    if(position > elements.length -1){
      position = 0;
    }
    return element;
  };
}

const sum = function(num1, num2){
  return num1 + num2;
}

const concat = function(list1, list2) {
  return list1.concat(list2);
}

const isNumBetween = function(lowerLimit, upperLimit, num) {
  return (lowerLimit < num && num > upperLimit);
}

const paintCar = function(color, make, model) {
  return {color, make, model};
}

const curry = function(operation, operand){
  return function(value1, value2){
    let result = operation(operand, value1, value2);
    return result;
  };
}

const lengthOf = function(list) {
  return list.length;
}

const decrement= function(value) {
  return value -1;
}

const isNotZero = function(item) {
  return item !=0;
}

const removeZeroes = function(list) {
  return list.filter(isNotZero);
}

const compose = function(operation2, operation1){
  return function(list1, list2) {
    let output1 = operation1(list1, list2);
    let result = operation2(output1);
    return result;
  };
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
