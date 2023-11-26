
let guessedWord = '';
const parentDiv = document.querySelectorAll('.index-input') 
parentDiv.forEach( function (divElement, index, arrayList) { 
    divElement.querySelectorAll('input').forEach(function(listElement, i, arr) { 
        listElement.addEventListener('keyup', function (event) {    
            if (i===0) {
                guessedWord = ''
            }
            guessWord (event.target.value, i, word, listElement)    
            focusInput(listElement, i+1, arr)                       
            guessedWord += event.target.value;                      
            alertWin();                                             
            console.log(guessedWord)

        })
         
    })

    
})




function alertWin () {
    if (guessedWord === word.join('')) {
        alert('You Win!!')
    }   
}

function focusInput (currentInput, nextIndex, listInput) {
    if (currentInput.value.length === 1) {
        if(nextIndex < listInput.length) {
            listInput[nextIndex].focus()
        }
    }
}



let word = [];

async function fetchWord () {
    const response = await fetch("https://words.dev-apis.com/word-of-the-day")
    const r = await response.json()
    await word.push[r.word]
    saveWord(r.word)
}

function saveWord (response) {
    const splittedWord = response.split('')
    splittedWord.forEach(w => word.push(w)) 
    
}

fetchWord();

console.log(word)

function guessWord (letter, index, arr, input) {
    const letterIndex = arr.findIndex((l) => l === letter) 
    if (letterIndex > -1) {
        // letter is in the array
        if (letterIndex === index) {
            input.style.backgroundColor = '#90EE90';
        } else {
            input.style.backgroundColor = '#FFA500';
        }
        
    } else {
        // letter is not in the array
        input.style.backgroundColor = '#D3D3D3'
    }

}

if (guessedWord !== word.join('')) {
    alert(`You lose!`)
}


