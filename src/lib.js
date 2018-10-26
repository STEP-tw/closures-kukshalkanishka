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
  return increment(beginValue);
}

const makeCounterFromZero = function(){
  return increment(0);
}

const makeDeltaTracker = function(old){
  return function(delta){
    if(!delta) { 
      delta = 0;
    }
    let sum = old + delta;
    let deltaTrack = {old, delta, new : sum};
    old = sum;
    return deltaTrack;
  };
}

const generateFib = function(fiboArgs) {
  let {previousTerm} = fiboArgs;
  let { currentTerm} = fiboArgs;
  return function(){
    let result = previousTerm;
    let nextValue = currentTerm + previousTerm;
    let previousTerm} =  
    previousTerm = currentTerm;

    currentTerm = sum;
    return sum;
  }
}

const makeFiboGenerator = function(secondTerm = 1, firstTerm = 0){

  let currentTerm = Math.max(secondTerm, firstTerm); 
  let previousTerm = Math.min(secondTerm, firstTerm);
  let fiboArgs = {previousTerm, currentTerm}
  return generateFib(fiboArgs);
}

const makeCycler = function(inputElements){
  let index = 0;

  const copy = function(element) {
    return element;
  }

  let elements = inputElements.map(copy);

  return function(){
    let position = index % elements.length; 
    element = elements[position];
    index++;
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
