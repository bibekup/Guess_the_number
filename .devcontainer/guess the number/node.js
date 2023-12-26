let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')



let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
e.preventDefault();
const guess = parseInt(userInput.value)
validateGuess(guess)

    })
}


function validateGuess (guess){
if(isNaN(guess)|| guess < 1 || guess > 100 ){
    alert('please give valid number')
} else{
    prevGuess.push(guess)
    if(numGuess ===11){
        displayGuess(guess)
        displayMessage(`game over. random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)

    }
}

}

function checkGuess(guess){
if(guess == randomNumber){
displayMessage('you guess it right')
}else if (guess< randomNumber){
displayMessage('you guess is low')
}else if (guess> randomNumber){
displayMessage('you guess is high')
}

}

function displayGuess(guess){
userInput.value =''
guessslot.innerHTML += `${guess};  `;
numGuess++;
remaining.innerHTML = `${11- numGuess}`

}

function displayMessage(message){
loworhigh.innerHTML = `<h2> ${message} </h2>`

}


function nuwGame(){
const newGamebutton = document.querySelector('#newGame')
newGamebutton.addEventListener('click', function(e){
  randomNumber = parseInt(Math.random()*100+1);
  prevGuess =[]
  numGuess = 1
  guessslot.innerHTML = ''
  remaining.innerHTML = `${11- numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true


})
}
function endGame(){
userInput.value = ''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id = "newGame"> start new game </h2>`
startOver.appendChild(p)
playGame = false
nuwGame()

}













