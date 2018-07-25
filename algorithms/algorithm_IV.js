// 1.	Given an array and a value Y, count and print the number of array values greater than Y.
function countGreater(arr, Y) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    console.log(count);
    return count;
}


// 2.	Given an array, print the max, min and average values for that array.
function printMaxMinAver(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i]; }
        if (arr[i] < min) { min = arr[i]; }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}


// 3.	Given an array of numbers, create a function 
//     that returns a new array where negative values were replaced with the string ‘Dojo’.   
//     For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function noNegetiveArr(arr) {
    var arrnew = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { 
            arrnew.push("Dojo"); 
        }
        else {
            arrnew.push(arr[i]);
        }
    }
    return arrnew;
}


// 4.	Given array, and indices start and end, remove vals in that index range, 
//     working in-place (hence shortening the array).  
//     For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeArr(arr,start,end) {
    var movNum=arr.length-end-1;
    for(i=0;i<movNum;i++) {
        arr[start+i]=arr[end+1+i];
    }
    for(i=0;i<=end-start;i++) {
        arr.pop();
    }
    return arr;
}