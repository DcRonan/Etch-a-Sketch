const container = document.querySelector('.container');

// GRID LAYOUT

function grid(boxContainer) {
    const base = document.createElement('div');
    base.classList.add('base-box');
    container.appendChild(base);

    for(let i = 0; i < boxContainer; i++) {
        let row = document.createElement('div');
        row.className = 'row';
    for(let a = 1; a <= boxContainer; a++) {
        let cell = document.createElement('div');
        cell.className = 'grid-square';
        cell.addEventListener('mouseover', changesColor);

    function changesColor(differentColors) {
        const currentCell = differentColors.target;
        let color = 'rgb(255, 255, 255)';
        currentCell.style.backgroundColor = color;
        currentCell.style.borderColor = color;
    }    
      row.appendChild(cell);
    }    
      base.appendChild(row);
    }
}

// Makes new grid with random colours.

function randomGrid(boxContainer) {
  const base = document.createElement('div');
  base.classList.add('base-box');
  container.appendChild(base);

  for(let i = 0; i < boxContainer; i++) {
      let row = document.createElement('div');
      row.className = 'row';
  for(let a = 1; a <= boxContainer; a++) {
      let cell = document.createElement('div');
      cell.className = 'grid-square';
      cell.addEventListener('mouseover', changesColor);

  function changesColor(differentColors) {
      const currentCell = differentColors.target;
      let d = Math.floor(Math.random() * 256);
      let e = Math.floor(Math.random() * 256);
      let f = Math.floor(Math.random() * 256);
      let color = "rgb(" + d + "," + e + "," + f + ")";
      currentCell.style.backgroundColor = color;
      currentCell.style.borderColor = color;
  }    
    row.appendChild(cell);
  }    
    base.appendChild(row);
  }
}

// Resets grid back to normal.

function reset() {
  const reset = document.getElementById('reset');
  reset.addEventListener('click', resetGrid);

  function resetGrid() {
    container.innerHTML = "";
    let thisCell = prompt("Enter grid size (between 16 & 120)", 16);

    if(thisCell >= 16 && thisCell <= 120) {
      grid(thisCell)
      console.log("thisCell");
      }
    else {
      alert("Enter a number between 16 and 120.")
    } 
  }
}

// resets grid with random colours.

function randomColors() {
  const randomColors = document.getElementById('randomColor');
  randomColors.addEventListener('click', resetRandomColors);

  function resetRandomColors() {
    container.innerHTML = "";
    let thisCell = prompt("Enter grid size (between 16 & 120)", 16);

    if(thisCell >= 16 && thisCell <= 120) {
      randomGrid(thisCell);
      console.log("random")
    }
    else {
      alert("Enter a number between 16 and 120.");
    }
  }
  }

grid(16);
reset();
randomColors();