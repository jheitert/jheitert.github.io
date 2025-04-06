//counter portion

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

function openTab(evt, Setup) {
  // Declare all variables
  var i, setupContent, setuplinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("setupContent");
  for (i = 0; i < setupContent.length; i++) {
    setupContent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  setuplinks = document.getElementsByClassName("setuplinks");
  for (i = 0; i < setuplinks.length; i++) {
    setuplinks[i].className = setuplinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(setup).style.display = "block";
  evt.currentTarget.className += " active";
} 
