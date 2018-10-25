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
  }
}

const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
