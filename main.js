// JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete Email from the previously created object

let x = "John"
let y = "Doe"

console.log(x + ' <> ' + y)

let info = {
    name: "Gamze",
    surname: "Guneri",
    email: "gamzegunerig@gmail.com",
}
console.log(info)

delete info.email

console.log(info)

//   24) Create an array with 10 strings in it

let arr = ['march','april','june','july','august','september','october','november','december','january']

//         25) Print in the console every string in the previous array

let stringOfArray = arr.toString()
console.log(stringOfArray)

//         26) Create an array with 100 random numbers in it

let arrayOfRandomNums = []

for (let i =0 ; i<100 ; i++){
    arrayOfRandomNums[i]= Math.floor(Math.random()*101)
}
console.log (arrayOfRandomNums)

//         27) Wrote a function to get the MAX and the MIN from the previously created array

console.log(Math.max(...arrayOfRandomNums))

console.log(Math.min(...arrayOfRandomNums))


//         28) Create an array of arrays, in which every array has 10 random numbers

let arrOfArrays = []

for (let t=0; t<10; t++){
    let arrayofRandomNumbers = []
    arrayofRandomNumbers[t] = Math.floor(Math.random()*11)
    arrOfArrays.push(arrayofRandomNumbers[t])  
}
console.log(arrOfArrays)


//         29) Create a function that gets 2 arrays and returns the longest one

let arr1 = [2,3,4,5,6,7]
let arr2 = [45,6,6,57,456,457,46,2,6456,456]

const longestOne = function() {
    if (arr1.lenght>arr2.lenght){
        console.log(arr1)
    } else{console.log(arr2)
    }

}
longestOne()

//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

// DOM 

// 31) Get element with ID "container" from the page

let withID = document.getElementById('container')

console.log(withID)

// 32) Get every "td" from the page

// let table = document.getElementById(thisTable)
//     tds = table.getElementsByTagName('td')

// for(let k=0; k<tds.lenght; k++){
//     console.log(this.innerHTML)
// }

// 33) Create a cycle that prints the text inside every td of the page



// 34) Write a function to change the heading of the page

const changeHeading = function() {
    let headingName = document.getElementById('h1Text')
    headingName.innerText = 'Heading changed!'
}
changeHeading()

// 35) Write a function to add an extra row to the table


// 36) Write a function to add the class "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded

// 39) Write a function to add new items to a UL

const newItems = function() {
    let newListItem = document.createElement('li')
    newListItem.innerText = 'new element added to this list'
    let parentUl= document.getElementById('list')
    parentUl.appendChild(newListItem)
}
newItems()

// 40) Write a function to empty a list

const emptyList= function() {
    let parentUl = document.getElementById('list')
    parentUl.innerText=''
}



