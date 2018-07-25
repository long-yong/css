// JavaScript Intermediate part I


// Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number 
// (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function getSigma(Num) {
    var sum = 0;
    for (i = 1; i <= Num; i++) {
        sum += i;
    }
    return sum;
}

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of 
// all positive integers from 1 up to number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function getProduct(Num) {
    var product = 0;
    for (i = 1; i < Num; i++) {
        product *= arr[i];
    }
    return product;
}

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each 
// number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one 
// argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value 
// four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib
// (0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 
// (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you 
// don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this 
// assignment.
function getFibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    var s1 = 0;
    var s2 = 1;
    for (i = 2; i < num; i++) {
        var sum = s1 + s2;
        s1 = s2;
        s2 = sum;
    }
    return s1 + s2;
}


// Array: Second-to-Last: Return the second-to-last element of an array. 
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function get2ndToEnd(arr) {
    if (arr.length < 2) return null;
    return arr[arr.length - 2];
}


// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If
//  the array is too short, return null.
function getNthToEnd(arr, n) {
    if (arr.length < n) return null;
    return arr[arr.length - n];
}


// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If 
// the array is too short, return null.
function getMax2(arr) {
    if (arr.legth < 2) {
        return null;
    }
    var max1 = arr[0];
    var max2 = arr[1];
    if (max1 < max2) {
        tmp = max1;
        max1 = max2;
        max2 = tmp;
    }
    for (i = 2; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
        else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max2;
}


// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining 
// original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr) {
    var len = arr.length;
    for (i = len - 1; i >= 0; i--) {
        arr[2 * i] = arr[i];
        arr[2 * i + 1] = arr[i];
    }
}



// Part 2 - recursions
// assign 1: Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.
function Fib(N) {
    if (N == 0) return 0;
    if (N == 1) return 1;
    return Fib(N - 2) + Fib(N - 1);
}

// assign 2: Recursive Fill - please see below.
function fill(x, y, original_color, color) {
    if (x < 0 || y < 0 || x >= world[0].length || y >= world.length) {
        return false;
    }
    if (world[y][x] != original_color) return false;
    world[y][x] = color;
    fill(x - 1, y, original_color, color);
    fill(x + 1, y, original_color, color);
    fill(x, y - 1, original_color, color);
    fill(x, y + 1, original_color, color);
    drawWorld();
    return true;
}