var clothing_Brands = [
    "louisvuitton",
"dior",
"gucci",
"hm",
"hermes",
"prada",
"chanel",
"ralphlauren",
"burberry",
"dolceandgabbana",
"valentino",
"offwhite",
"givenchy",
"balenciaga",
"versace",
"armani",
"yvesSaint Laurent",
"gapinc",
"guess",
"fendi",
"supreme",
"levis",
"puma",
"zara",
"salvatoreferragamo"
]
let answers = ""
let maxWrong = 6
let wrong = 0
let guessed = []
let wordStat = null


function randomWord (){
    answers = clothing_Brands[Math.floor(Math.random()* clothing_Brands.length)]
}
function buttonsGenrator(){
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
          `
            <button
              class="btn btn-lg btn-primary m-2"
              id='` + letter + `'
              onClick="handleGuess('` + letter + `')"
            >
              ` + letter + `
            </button>
          `).join('');
      
        document.getElementById('keyboard').innerHTML = buttonsHTML;
      }
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answers.indexOf(chosenLetter) >= 0) {
        guessWord();
        checkIfGameWon();
    } else if (answers.indexOf(chosenLetter) === -1) {
      wrong++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture()
    }
  }
function updateHangmanPicture(){
    document.getElementById("hanger").src = "./images/" + wrong + ".jpg"
}

function checkIfGameWon (){
    if(wordStat === answers){
        document.getElementById('keyboard').innerHTML = "You Won!!"
    }
}
function checkIfGameLost (){
    if(wrong === maxWrong){
        document.getElementById("wordsplace").innerHTML = "The right asnwer was: " + answers
        document.getElementById('keyboard').innerHTML = "You Lost!!"
    }
}
  function updateMistakes() {
    document.getElementById('wrong').innerHTML = wrong;
  }
  document.getElementById("maxwrong").innerHTML = maxWrong


function guessWord (){
    wordStat = answers.split("").map(letter => (guessed.indexOf(letter) >= 0 ?  letter : " _ " )).join("");
    document.getElementById("wordsplace").innerHTML = wordStat

}
function reset() {
    wrong = 0;
    guessed = [];
    document.getElementById('hanger').src = './images/0.jpg';
  
    randomWord();
    guessWord();
    updateMistakes();
    buttonsGenrator();
  }



randomWord()
buttonsGenrator()
guessWord()