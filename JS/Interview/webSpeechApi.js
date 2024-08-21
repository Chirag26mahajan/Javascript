const textToSpeech = "Hello there";
const utterance = new SpeechSynthesisUtterance(textToSpeech);

document.getElementById("speakButton").addEventListener("click", function() {
    window.speechSynthesis.speak(utterance);
});



//html
//create a button over there
{/* <button id="speakButton">Speak</button> */}

