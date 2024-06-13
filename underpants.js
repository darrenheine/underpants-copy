// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";

var _ = {};

/**
 * START OF OUR LIBRARY!
 * Implement each function below its instructions
 */

/** _.identity
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Returns <value> unchanged
 * Examples:
 *   _.identity(5) === 5
 *   _.identity({a: "b"}) === {a: "b"}
 */

_.identity = function (value) {
  // return input value unchanged
  return value;
};

/** _.typeOf
 * Arguments:
 *   1) Any value
 * Objectives:
 *   1) Return the type of <value> as a string
 *       Types are one of:
 *          - "string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * Examples:
 * _.typeOf(134) -> "number"
 * _.typeOf("javascript") -> "string"
 * _.typeOf([1,2,3]) -> "array"
 */

_.typeOf = function (value) {
  // Check if the value is exactly null
  if (value === null) return "null";
  // Check if the value is an array
  if (Array.isArray(value)) return "array";
  // Return the type of the value using the typeof operator
  return typeof value;
};

/** _.first
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the first element in <array>.
 *   3) Otherwise, return the first <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

_.first = function (arr, num) {
  // Check if the input is not an array
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if the input is not an array
  }
  // Check if 'num' is undefined or not a number
  if (num === undefined || typeof num !== "number") {
    return arr[0]; // Return the first element of the array
  }
  // Check if 'num' is negative
  if (num < 0) {
    return []; // Return an empty array if 'num' is negative
  }
  // Check if 'num' is greater than the length of the array
  if (num > arr.length) {
    return arr; // Return the entire array if 'num' exceeds the array length
  }
  // Return the first 'num' elements of the array
  return arr.slice(0, num);
};

/** _.last
 * Arguments:
 *   1) An array
 *   2) A number
 * Objectives:
 *   1) If <array> is not an array, return []
 *   2) If <number> is not given or not a number, return just the last element in <array>.
 *   3) Otherwise, return the last <number> items of <array>
 * Edge Cases:
 *   1) What if <number> is negative?
 *   2) What if <number> is greater than <array>.length?
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

_.last = function (arr, num) {
  // Check if the input is not an array
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if the input is not an array
  }
  // Check if num is undefined or not a number
  if (num === undefined || typeof num !== "number") {
    return arr[arr.length - 1]; // Return the last element of the array
  }
  // Check if num is negative
  if (num < 0) {
    return []; // Return an empty array if num is negative
  }
  // Check if num is greater than or equal to the length of the array
  if (num >= arr.length) {
    return arr; // Return the whole array if num is greater than or equal to the length of the array
  }
  // Return the last num elements of the array
  return arr.slice(-num);
};

/** _.indexOf
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return the index of <array> that is the first occurrance of <value>
 *   2) Return -1 if <value> is not in <array>
 *   3) Do not use [].indexOf()!
 * Edge Cases:
 *   1) What if <array> has multiple occurances of val?
 *   2) What if <val> isn't in <array>?
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

_.indexOf = function (arr, value) {
  // Iterate through each element in the array
  for (var i = 0; i < arr.length; i++) {
    // Check if the current element matches the value
    if (arr[i] === value) {
      // Return the index if a match is found
      return i;
    }
  }
  // Return -1 if the value is not found in the array
  return -1;
};

/** _.contains
 * Arguments:
 *   1) An array
 *   2) A value
 * Objectives:
 *   1) Return true if <array> contains <value>
 *   2) Return false otherwise
 *   3) You must use the ternary operator in your implementation.
 * Edge Cases:
 *   1) did you use === ?
 *   2) what if no <value> is given?
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

_.contains = function (arr, value) {
  // indexOf method to check if the 'value' exists in the 'arr'
  //   If the 'value' is found ('indexOf' returns a non-negative index), it returns 'true';
  //  otherwise, it returns 'false'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

/** _.each
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) if <collection> is an array, call <function> once for each element
 *      with the arguments:
 *         the element, it's index, <collection>
 *   2) if <collection> is an object, call <function> once for each property
 *      with the arguments:
 *         the property's value, it's key, <collection>
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

_.each = function (collection, func) {
  // Check if the collection is an array
  if (Array.isArray(collection)) {
    // Iterate through each element in the array
    for (let i = 0; i < collection.length; i++) {
      // Apply the function to each element, passing the element, its index, and the array
      func(collection[i], i, collection);
    }
  } else {
    // Iterate through each key in the object
    for (let key in collection) {
      // Apply the function to each key's value, passing the value, the key, and the object
      func(collection[key], key, collection);
    }
  }
};

/** _.unique
 * Arguments:
 *   1) An array
 * Objectives:
 *   1) Return a new array of all elements from <array> with duplicates removed
 *   2) Use _.indexOf() from above
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */

_.unique = function (arr) {
  // Initialize an empty array to hold unique values
  let result = [];
  // Iterate through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the element is not already in the result array
    if (_.indexOf(result, arr[i]) === -1) {
      // Add the element to the result array if it's unique
      result.push(arr[i]);
    }
  }
  // Return the array of unique values
  return result;
};

/** _.filter
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned true
 * Edge Cases:
 *   1) What if <function> returns something other than true or false?
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 * Extra Credit:
 *   use _.each in your implementation
 */

_.filter = function (arr, func) {
  // Create a new array to store the elements that pass the test
  const result = [];

  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Call the provided function with the current element, index, and the array
    if (func(arr[i], i, arr)) {
      // If the function returns true, add the element to the result array
      result.push(arr[i]);
    }
  }

  // Return the array of elements that passed the test
  return result;
};

/** _.reject
 * Arguments:
 *   1) An array
 *   2) A function
 * Objectives:
 *   1) call <function> for each element in <array> passing the arguments:
 *      the element, it's index, <array>
 *   2) return a new array of elements for which calling <function> returned false
 *   3) This is the logical inverse if _.filter()
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

_.reject = function (arr, func) {
  var rejected = []; // Initialize an empty array to hold rejected elements
  _.each(arr, function (element, index, arr) {
    // Use _.each to iterate over each element in the array
    if (!func(element, index, arr)) {
      // If the predicate function returns false for the element
      rejected.push(element); // Add the element to the rejected array
    }
  });
  return rejected; // Return the array of rejected elements
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (arr, func) {
  let truthy = []; // Initialize an array to hold elements that pass the predicate
  let falsey = []; // Initialize an array to hold elements that don't pass the predicate
  _.each(arr, function (element, key, arr) {
    // Use _.each to iterate over each element in the array
    if (func(element, key, arr)) {
      // If the predicate function returns true for the element
      truthy.push(element); // Add the element to the truthy array
    } else {
      // If the predicate function returns false for the element
      falsey.push(element); // Add the element to the falsey array
    }
  });
  return [truthy, falsey]; // Return an array containing the truthy and falsey arrays
};

/** _.map
 * Arguments:
 *   1) A collection
 *   2) a function
 * Objectives:
 *   1) call <function> for each element in <collection> passing the arguments:
 *        if <collection> is an array:
 *            the element, it's index, <collection>
 *        if <collection> is an object:
 *            the value, it's key, <collection>
 *   2) save the return value of each <function> call in a new array
 *   3) return the new array
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

_.map = function (collection, func) {
  // Initialize an empty array to store the results
  let result = [];

  // Check if the collection is an array
  if (Array.isArray(collection)) {
    // Iterate over each element in the array
    for (let i = 0; i < collection.length; i++) {
      // Call the function with the element, its index, and the collection
      result.push(func(collection[i], i, collection));
    }
  } else {
    // If the collection is an object
    for (let key in collection) {
      // Call the function with the value, its key, and the collection
      result.push(func(collection[key], key, collection));
    }
  }
  // Return the new array with the results
  return result;
};

/** _.pluck
 * Arguments:
 *   1) An array of objects
 *   2) A property
 * Objectives:
 *   1) Return an array containing the value of <property> for every element in <array>
 *   2) You must use _.map() in your implementation.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */

_.pluck = function (arr, prop) {
  return _.map(arr, function (obj) {
    // Use _.map to transform the array
    return obj[prop]; // Return the value of the specified property from each object
  });
};

/** _.every
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *      if <collection> is an array:
 *          current element, it's index, <collection>
 *      if <collection> is an object:
 *          current value, current key, <collection>
 *   2) If the return value of calling <function> for every element is true, return true
 *   3) If even one of them returns false, return false
 *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

_.every = function (collection, func) {
  if (Array.isArray(collection)) {
    // Check if the collection is an array
    if (func === undefined) {
      // If no predicate function is provided
      for (let i = 0; i < collection.length; i++) {
        // Iterate over each element in the array
        if (!collection[i]) {
          // Check if the element is falsy
          return false; // Return false if any element is falsy
        }
      }
    } else {
      for (let i = 0; i < collection.length; i++) {
        // Iterate over each element in the array
        if (!func(collection[i], i, collection)) {
          // Apply the predicate function to each element
          return false; // Return false if the predicate function returns false for any element
        }
      }
    }
  } else {
    for (let key in collection) {
      // Iterate over each key in the object
      if (!func(collection[key], key, collection)) {
        // Apply the predicate function to each value
        return false; // Return false if the predicate function returns false for any value
      }
    }
  }
  return true; // Return true if all elements pass the predicate function
};

/** _.some
 * Arguments:
 *   1) A collection
 *   2) A function
 * Objectives:
 *   1) Call <function> for every element of <collection> with the paramaters:
 *       if <collection> is an array:
 *        current element, it's index, <collection>
 *       if <collection> is an object:
 *        current value, current key, <collection>
 *   2) If the return value of calling <function> is true for at least one element, return true
 *   3) If it is false for all elements, return false
 *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
 * Edge Cases:
 *   1) what if <function> doesn't return a boolean
 *   2) What if <function> is not given?
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

_.some = function (collection, func) {
  // Is collection an array
  if (Array.isArray(collection)) {
    // if not given a function
    if (func === undefined) {
      // If the return value of calling <function> is true for at least one element, return true
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          return true;
        }
      }
    } else {
      // calls function for each element in the array and returns true if an element matches
      for (let i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection)) {
          return true;
        }
      }
    }
  } else {
    // if collection is an object and a function is given
    for (let key in collection) {
      if (func(collection[key], key, collection)) {
        return true;
      }
    }
  }
  // If it is false for all elements, return false
  return false;
};

/** _.reduce
 * Arguments:
 *   1) An array
 *   2) A function
 *   3) A seed
 * Objectives:
 *   1) Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index
 *   2) Use the return value of <function> as the "previous result"
 *      for the next iteration
 *   3) On the very first iteration, use <seed> as the "previous result"
 *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
 *   5) After the last iteration, return the return value of the final <function> call
 * Edge Cases:
 *   1) What if <seed> is not given?
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */

_.reduce = function (arr, func, seed) {
  let output;
  // If seed is not provided, use the first element of the array as the seed
  if (seed === undefined) {
    output = arr[0];
    // Start the loop from the second element if seed is taken from array
    for (let i = 1; i < arr.length; i++) {
      output = func(output, arr[i], i);
    }
  } else {
    output = seed;
    // Loop through the array starting from the first element
    for (let i = 0; i < arr.length; i++) {
      output = func(output, arr[i], i);
    }
  }
  return output;
};

/** _.extend
 * Arguments:
 *   1) An Object
 *   2) An Object
 *   ...Possibly more objects
 * Objectives:
 *   1) Copy properties from <object 2> to <object 1>
 *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
 *   3) Return the update <object 1>
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */

_.extend = function (target, ...objs) {
  // Iterate over each source object
  for (let i = 0; i < objs.length; i++) {
    Object.assign(target, objs[i]);
  }
  // Return the updated target object
  return target;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = _;
}
