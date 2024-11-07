// function calculateProblems(n) {
    
//     let problemsPerHour=2;
//     totalHours= n * 2;
//     console.log(totalHours)
// }


// calculateProblems(4)

// function printFavoriteFood(name, food) {
// console.log(name, "loves to eat", food)
// }

// printFavoriteFood("Erkhes", "spaghetti")


// function printWeather(cityName, weather) {
// console.log("it's", weather + "C", "in", cityName)
// }

// printWeather("Ulaanbaatar", "5")


// function printBookDetails(title, author, yearPublished) {
// console.log(title, author, yearPublished)
// }
// printBookDetails("Art Of Seduction", "Robert Greene", "2006")

// function calculateArea(width, height){
//     console.log(width * height)
// }
// calculateArea(10, 30)

// function calculateVolume(width, height, depth){
//     console.log(width * height * depth)
// }

// calculateVolume(10, 5, 20)

// function printTicketInfo(eventName, ticketPrice, discount){
//     console.log(eventName + "'s Price is", ticketPrice, "and the discount you get is", discount)
// }
// printTicketInfo("Weeknd", 100 +"$", 30 +"$")
// function findDigitCount(number, digit) {
//     if (number < 0) {
//         number = -number;
//     }

//     let count = 0;

//     while (number > 0) {
//         const lastDigit = number % 10;

//         if (lastDigit === digit) {
//             count++;
//         }

//         number =number / 10;
//     }
//     console.log(count)
// }
// findDigitCount(2222, 2)

// const books=[
//     {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// },
// {
//     title: "1984",
//     author: "George Orwell",
//     year: 1949
// },
// {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// },
// {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     year: 1967
// },
// {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     year: 1813
// }
// ] 



// function filterBooksByYear(  filterYear){
//     let arr = []
//     for( let i=0;  i< books.length; i++){
//         if( books[i].year  >= filterYear){
//             arr.push( books[i])
//         }
//     }
//     return arr
// }


// console.log(filterBooksByYear(1950))
