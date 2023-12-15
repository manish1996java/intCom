//largest element in the array---------------------

// function getLargest(arr){
//     let res = 0;
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>arr[res]){
//             res = i;
//         }
//     }
//     return res;
// }
// console.log(getLargest([4,3,5,6,3,2,8]));



//isSortedIn Acending order-------------------------

// const isArraySorted = function(arr){
//     for(i=1; i<arr.length; i++){
//         if(arr[i] < arr[i-1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isArraySorted([1,2,3,4,2,6]));





//Move zeroes to the end of the array

// const moveZeroes = function(arr){
//     let count = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] != 0){
//             let temp = arr[i];
//             arr[i] = arr[count];
//             arr[count] = temp;
//             count++;
//         }
//     }
// }

// let arr  = [10,8,0,0,12,0];
// moveZeroes(arr);
// console.log(arr);

