// let favoriteColors =[
//     "purple",
//     "black",
//     "white",
//     "navy",
//     "red"
// ]
// favoriteColors[2]  =  "Blue"
// console.log(favoriteColors)


// let levelsCompleted=[true,
// false]
// levelsCompleted.push(true)
// console.log(levelsCompleted)

// let destinations=["Canada",
// "France",
// "China",
// "America",
// "Spain"]
// destinations.shift()
// console.log(destinations);
// destinations.unshift("New York");
// console.log(destinations);

// let ages=[18, 21, 22, 20, 23, 36, 79]
// console.log(ages)
// let index=0;
// while(index<=6){
//     ages[index]=ages[index]+5
//     index ++;
// }console.log(ages);

let numbers=[18, 21, 22, 20, 23, 36, 79, 25, 90, 45, 30, 11, 6, 76, 67]
let sum=0;
index=0;
while(index<numbers.length){
    sum=numbers[index]+sum;
    index++
}console.log(sum);

let biggest=numbers[0];
for(let i=0; i < numbers.length; i++){
    if(numbers[i]>biggest){
        biggest=numbers[i];
    }
}console.log(biggest);

let smallest=numbers[0];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]<smallest){
        smallest=numbers[i]
    }
}console.log(smallest)