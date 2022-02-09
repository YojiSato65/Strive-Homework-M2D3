
// MANDATORY JS EXERCISES (create a different file for this exercise)//
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]//
let genres = [
    "Comedy",
    "Drama",
    "Romance",
    "Horror",
    "Sci-Fi",
    "Documentary"
]
console.log(genres)

//     2) Create an unordered list using JavaScript and save it in a variable//
let newUl = document.createElement('ul')

//     3) Cycle the array and create a list-item via JavaScript for every element//
//     4) Insert the genere as text in the list-item//
//     5) Append the list items in the unordered list//
const cycleArray = function ()
{
    for (let i = 0; i < genres.length; i++)
    {
        let newLiNode = document.createElement('li')
        newLiNode.innerText = genres[i]
        newUl.appendChild(newLiNode)
    }
}
cycleArray()

//     6) Append the unordered list in the document. The list should appear in the page.//
let body = document.querySelector('body')
body.appendChild(newUl)







//<!-- MANDATORY JS EXERCISES (continue from yesterday's file for this exercise)//
// 1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text

let newInput1 = document.createElement('input')
let newInput2 = document.createElement('input')
newInput1.type = 'color'
newInput2.type = 'color'
let newButton = document.createElement('button')
newButton.innerText = 'Apply Colors'

body.appendChild(newInput1)
body.appendChild(newInput2)
body.appendChild(newButton)

// 2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"
let listItems = document.querySelectorAll('li')


// 3) Grab the inputs references via DOM manipulation and save them in variables
// 4) Create a function and attach it to the "Apply Colors" button click event
// 5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console
//     each item from the loop every time the button gets clicked
// 6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.
//     If you receive black as a color check where you have the inputs references.
//     You should now see the list-items color and background-color change at the click of the button.
// -->

const attachLiToButton = function () //ex.4
{
    for (let i = 0; i < listItems.length; i++) //ex.5
    {
        let eachLiNode = listItems[i]
        console.log(eachLiNode)
    }
    let firstInput = document.querySelectorAll('input')[0] //ex.3
    firstInput.style.backgroundColor = 'red' //ex.6
    let secondInput = document.querySelectorAll('input')[1]
    secondInput.style.color = 'blue'
}
attachLiToButton()

let button = document.querySelector('button') //ex.4
button.addEventListener('click', attachLiToButton)




