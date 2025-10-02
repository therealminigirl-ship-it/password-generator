const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersNS =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charactersNN = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersNA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let userInput = document.getElementById("user-input")
let errorMsg = document.getElementById("error-msg")
let inputCheck = true
let symbolsTick = document.getElementById("symbols-tick")
let numbersTick = document.getElementById("numbers-tick")


function generate() {
        let passwordFirst = ""
        let passwordSecond = ""
        errorMsg.textContent = ""
        let passwordLength = parseInt(userInput.value)
    if (isNaN(passwordLength) || passwordLength <= 0 || passwordLength>16) {
        inputCheck = false
        passwordLength = 15 
        errorMsg.textContent = "Invalid input, 15 character password generated."
        }
    if (numbersTick.checked===true && symbolsTick.checked===true){
        for (let i=0; i<passwordLength;i++) {
            passwordFirst += characters[Math.floor(Math.random() * characters.length)]
            passwordSecond += characters[Math.floor(Math.random() * characters.length)]
            }
            password1El.textContent = passwordFirst
            password2El.textContent = passwordSecond
            }
    else if (numbersTick.checked===true) {
        for (let i=0; i<passwordLength;i++) {
            passwordFirst += charactersNS[Math.floor(Math.random() * charactersNS.length)]
            passwordSecond += charactersNS[Math.floor(Math.random() * charactersNS.length)]
            }
            password1El.textContent = passwordFirst
            password2El.textContent = passwordSecond
            }     
    else if (symbolsTick.checked===true) {
        for (let i=0; i<passwordLength;i++) {
            passwordFirst += charactersNN[Math.floor(Math.random() * charactersNN.length)]
            passwordSecond += charactersNN[Math.floor(Math.random() * charactersNN.length)]
            }
            password1El.textContent = passwordFirst
            password2El.textContent = passwordSecond
            }   
    else { 
        for (let i=0; i<passwordLength;i++) {
            passwordFirst += charactersNA[Math.floor(Math.random() * charactersNA.length)]
            passwordSecond += charactersNA[Math.floor(Math.random() * charactersNA.length)]
            }
            password1El.textContent = passwordFirst
            password2El.textContent = passwordSecond
            }     
    }

function copy1() {
navigator.clipboard.writeText(password1El.textContent)
errorMsg.textContent = "Copied to clipboard"
}

function copy2() {
navigator.clipboard.writeText(password2El.textContent)
errorMsg.textContent = "Copied to clipboard"
}
