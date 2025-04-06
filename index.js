// Get the element with id="defaultOpen" and click on it
window.onload = function () {
  document.getElementById("defaultOpen").click();
};

function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Only build grid if Grid tab is opened
  if (tabName === "Collection") {
    createGrid();
  }
}


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

function createGrid(rows = 10, cols = 10) {
  const container = document.getElementById("gridContainer");
  container.innerHTML = ""; // clear old grid

  // Load saved state from localStorage
  const savedState = JSON.parse(localStorage.getItem("gridState") || "{}");

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.textContent = i + 1;
    cell.dataset.cellId = i;

    // Restore saved color
    if (savedState[i]) {
      cell.style.backgroundColor = "gold";
    }

    cell.addEventListener("click", () => {
      const isActive = cell.style.backgroundColor === "gold";
      if (isActive) {
        cell.style.backgroundColor = "lightgray";
        delete savedState[i];
      } else {
        cell.style.backgroundColor = "gold";
        savedState[i] = true;
      }
      localStorage.setItem("gridState", JSON.stringify(savedState));
    });

    container.appendChild(cell);
  }
}





