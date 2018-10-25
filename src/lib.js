const makeConstant = function(value) {
  return function(){
    return value
  };
}

const increment = function(count) {
  return function() {
    return count++;
  }
}

const makeCounterFromN = function(beginValue){
  let count = beginValue;
  return increment(count);
}

const makeCounterFromZero = function(){
  let count = 0;
  return increment(count);
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

const curry = function(operation, operand){
  return function(value1, value2){
    let result = operation(operand, value1, value2);
    return result;
  };
}

const compose = function(operation2, operation1){
  return function(list1, list2) {
    let output1 = operation1(list1, list2);
    return operation2(output1);
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
