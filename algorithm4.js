//## Build out a .js file on your own this time and call it algorithm4.js 
//In that file, code out your functions to solve the challenges.  
//#4 is a tough one! Do your best!

//1.Given an array and a value Y, count 
//and print the number of array values greater than Y.

function greaterY(arr, Y) {
    var count=0;
    for (var i=0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
console.log(greaterY([1,2,3],2)) ;


//2.Given an array, print the max, min and average values for that array.

function stats(arr) {
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for(var i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
        if (arr[i<min]) {
            min=arr[i];
        }
        sum=sum + arr[i];
    }
    var avg=sum/arr.length;
    var arrnew=[max,min,avg];
    return arrnew;
}

console.log(stats([1,2,3]));

//3.Given an array of numbers, create a function that returns a new array 
//where negative values were replaced with the string ‘Dojo’.   
//For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(replaceNegatives([-1,0,1]));

//4.Given array, and indices start and end, remove vals in that index range, 
//working in-place (hence shortening the array).  
//For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].


function removeVals(arr,start,end) {
    var temp=end-1;
      arr.splice(start,temp);
    return arr;
  }
  console.log(removeVals([20,30,40,50,60,70],2,4));