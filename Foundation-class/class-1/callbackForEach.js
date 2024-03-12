// forEach()
// function forEachExample(arr) {
//     console.log("Original Array:", arr);
  
//     arr.forEach(function(item, index) {
//       console.log(item, index);
//     });
//   }
//   forEachExample([1, 2, 3]);


// function mapExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.map(function(item) {
//       return item * 2;
//     });
//     console.log("After map:", newArr);
//   }
//   mapExample([1, 2, 3]);

// filter()
// function filterExample(arr) {
//     console.log("Original Array:", arr);
  
//     let newArr = arr.filter(function(item) {
//       return item > 3;
//     });
//     console.log("After filter:", newArr);
//   }
//   filterExample([11, 2, 3, 4, 5]);


  //find()
// function findExample(arr) {
//   console.log("Original Array:", arr);

//   let found = arr.find(function(item) {
//     return item > 3;
//   });
//   console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);


// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);