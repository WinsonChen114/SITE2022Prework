/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1050; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numMistakes = 0;
var time = 10000; //Players get 10 seconds to guess
var timerInt;

function startGame() {
  //initialize game variables
  pattern = [];
  createPattern();

  //reset health
  numMistakes = 0;
  document.getElementById("health").innerHTML = "Health: " + (3 - numMistakes);

  progress = 0;

  time = 10000; //reset timer
  document.getElementById("time").innerHTML =
    "Time Left: " + time / 1000 + " seconds";

  gamePlaying = true;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  clueHoldTime = 1000; //reset clue hold time

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  //Stop Timer
  clearInterval(timerInt);

  //Stop Audio
  stopAudio();
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. Click Start to retry.");
}

function winGame() {
  stopGame();
  alert("Congrats! You won! Click Start to play again.");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  //shows picture
  document.getElementById("image" + btn).classList.remove("hidden");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  //remove picture
  document.getElementById("image" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playAudio(btn);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  
  //maybe not neccessary? 
  context.resume();
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime = 1000 - progress * 80; //Make clues faster each repetition
  //Start decrementing timer after clues are done playing
  setTimeout(startDecrement, delay - 1000);
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  // add game logic here
  else {
    if (btn == pattern[guessCounter]) {
      //Correct guess
      if (guessCounter == progress) {
        //End of turn
        if (progress == pattern.length - 1) {
          //Last turn
          winGame();
        } else {
          //reset timer
          clearInterval(timerInt);
          time = 10000;
          document.getElementById("time").innerHTML =
            "Time Left: " + time / 1000 + " seconds";

          //Not last turn
          progress++;
          playClueSequence();
        }
      } else {
        //Not end of turn
        guessCounter++;
      }
    } else if (numMistakes < 2) {
      //Wrong guess
      numMistakes++;

      //decrement health
      document.getElementById("health").innerHTML =
        "Health: " + (3 - numMistakes);

      //reset timer
      clearInterval(timerInt);
      time = 10000;
      document.getElementById("time").innerHTML =
        "Time Left: " + time / 1000 + " seconds";

      //redo the pattern if they get it wrong
      playClueSequence();
    } else {
      //Lose game
      document.getElementById("health").innerHTML = "Health: 0";

      loseGame();
    }
  }
}

function createPattern() {
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(7 * Math.random()) + 1);
  }
}

function mouseDown(btn) {
  //comnbines audio playing and image showing into 1 function
  //startTone(btn);
  playAudio(btn);
  lightButton(btn);
}

function mouseUp(btn) {
  //combines stopping of audio and hiding of button into 1 function
  //stopTone();
  clearButton(btn);
}

//Timer functions
function startDecrement() {
  //clear timer to be safe
  clearInterval(timerInt);
  timerInt = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  if (time <= 999) {
    loseGame();
  } else {
    time -= 1000;
    if (time != 1000) {
      document.getElementById("time").innerHTML =
        "Time Left: " + time / 1000 + " seconds";
    } else {
      document.getElementById("time").innerHTML =
        "Time Left: " + time / 1000 + " second";
    }
  }
}

//Audio Player
function playAudio(btn) {
  document.getElementById("Audio" + btn).play();
}

function stopAudio() {
  //Stops all audio
  for (let i = 1; i < 8; i++) {
    document.getElementById("Audio" + i).pause();
    document.getElementById("Audio" + i).currentTime = 0;
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 520, // Middle C
  2: 470, //B
  3: 420, //A
  4: 370, //G
  5: 320, //F
  6: 270, //E
  7: 220, //D
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;

  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
