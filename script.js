function generate() {
  var name = document.getElementById("nameInput").value;
  var outputParagraph = document.getElementById("outputParagraph");
  outputParagraph.innerHTML = "Hi " + name + ", we would like to ask you a couple of questions...";

  var inputBox = document.getElementById("inputBox");
  var outputBox = document.getElementById("outputBox");
  inputBox.style.display = "none";
  outputBox.style.display = "block";

  var myVideo = document.getElementById("myVideo");
  var secondVideo = document.getElementById("secondVideo");
  myVideo.pause();
  myVideo.style.display = "none";
  secondVideo.style.display = "block";
  secondVideo.play();
  greetings.style.display = "none";
  greetings2.style.display = "none";
  text.style.display = "none";

  var firstqDiv = document.querySelector(".firstq");
  firstqDiv.style.display = "block";

  var firstansDiv = document.querySelector(".firstans");
  firstansDiv.style.display = "block";
}

function firstquestionButton() {
  outputParagraph.style.display = "none";

  var firstqDiv = document.querySelector(".firstq");
  firstqDiv.style.display = "none";
  var firstansDiv = document.querySelector(".firstans");
  firstansDiv.style.display = "none";

  var secondqDiv = document.querySelector(".secondq");
  secondqDiv.style.display = "block"; 
  var secondansDiv = document.querySelector(".secondans");
  secondansDiv.style.display = "block";

  var thirdqDiv = document.querySelector(".thirdq");
  thirdqDiv.style.display = "none"; 
  var thirdansDiv = document.querySelector(".thirdans");
  thirdansDiv.style.display = "none";

  var wrongDiv = document.querySelector(".wrong");
  wrongDiv.style.display = "none";
  var neitherDiv = document.querySelector(".neither");
  neitherDiv.style.display = "none";
  var questionDiv = document.querySelector(".question");
  questionDiv.style.display = "none";
}

function secondquestionButton() {
  outputParagraph.style.display = "none";

  var firstqDiv = document.querySelector(".firstq");
  firstqDiv.style.display = "none";
  var firstansDiv = document.querySelector(".firstans");
  firstansDiv.style.display = "none";

  var secondqDiv = document.querySelector(".secondq");
  secondqDiv.style.display = "none"; 
  var secondansDiv = document.querySelector(".secondans");
  secondansDiv.style.display = "none";

  var thirdqDiv = document.querySelector(".thirdq");
  thirdqDiv.style.display = "block"; 
  var thirdansDiv = document.querySelector(".thirdans");
  thirdansDiv.style.display = "block";

  var wrongDiv = document.querySelector(".wrong");
  wrongDiv.style.display = "none";
  var neitherDiv = document.querySelector(".neither");
  neitherDiv.style.display = "none";
  var questionDiv = document.querySelector(".question");
  questionDiv.style.display = "none";
}

function thirdquestionButton() {
  outputParagraph.style.display = "none";

  var firstqDiv = document.querySelector(".firstq");
  firstqDiv.style.display = "none";
  var firstansDiv = document.querySelector(".firstans");
  firstansDiv.style.display = "none";

  var secondqDiv = document.querySelector(".secondq");
  secondqDiv.style.display = "none"; 
  var secondansDiv = document.querySelector(".secondans");
  secondansDiv.style.display = "none";

  var thirdqDiv = document.querySelector(".thirdq");
  thirdqDiv.style.display = "none"; 
  var thirdansDiv = document.querySelector(".thirdans");
  thirdansDiv.style.display = "none";

  var wrongDiv = document.querySelector(".wrong");
  wrongDiv.style.display = "block";
  var neitherDiv = document.querySelector(".neither");
  neitherDiv.style.display = "block";
  var questionDiv = document.querySelector(".question");
  questionDiv.style.display = "block";
}