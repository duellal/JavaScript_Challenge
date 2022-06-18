// scope and closure

/**
Create a function called makePlusFunction that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

Please check the examples below for a clearer representation of the behavior expected.

Examples
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3



// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15
* 
*/

function makePlusFunction(baseNum){
    return function(x){
        return baseNum + x;
    }
}

const plusFive = makePlusFunction(5)

const plusTen = makePlusFunction(10)



// advanced array methods
/**
 * Create a function  called filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *   Examples: 
 *      filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 *      filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 *      filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 * 
 *    Notes: 
 *      * Zero is a non-negative integer
 *      * The given array only has integers and strings
 *      * Numbers in the array should not repeat
 *      * The original order must be maintained
 */

function filterArray(array){
	const filter = array.filter(Number.isFinite);

	return filter;
}


/**
 * Function Description

Create a function called getSecondLargest.

getSecondLargest has the following parameters:
    int nums[n]: an array of integers

    Returns
        int: the second largest number in array
    
    Example:
    getSecondLargest([2, 3, 6, 6, 5]) --> 5
    getSecondLargest([15, 20, 3, 1, 100]) --> 20
 */

function getSecondLargest(array){
	const sortedArray = array.sort(function(a, b){
        return a-b;
    });
	
	if(sortedArray[sortedArray.length-1] != sortedArray[sortedArray.length -2]){
		return sortedArray[sortedArray.length-2]
	} 
	else{return sortedArray[sortedArray.length-3]}
}

// prototypes and inheritance 
/**
 * Create a Person class which is initialized with a name and an age
    * Example: 
            p1 = Person("Samuel", 24)
            p2 = Person("Joel", 36)
            p3 = Person("Lily", 24)
 * 
 * Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

    {other person name} is {older than / younger than / the same age as} me.
    
    Example:         
        p1.compareAge(p2) ➞ "Joel is older than me."
        p2.compareAge(p1) ➞ "Samuel is younger than me."
        p1.compareAge(p3) ➞ "Lily is the same age as me."
 */

class Person{
    constructor(name, age){
	this.name = name;
	this.age = age;
}
}

Person.prototype.compareAge = function (Person2) {
    if (this.age < Person2.age) {
        return `${Person2.name} is older than me.`
    }
    else if (this.age === Person2.age) {
        return `${Person2.name} is the same age as me.`
    }
    else { return `${Person2.name} is younger than me.` }
}



module.exports = {
    makePlusFunction,
    filterArray,
    getSecondLargest,
    Person,
}