function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  
let deadCounter = 0;
let lostCounter = 0;
  
function handleClick() {
    if (this.classList.contains('hole_has-mole')) {
      deadCounter += 1;
    } else {
      lostCounter += 1;
    }
  
    document.getElementById('dead').textContent = deadCounter;
    document.getElementById('lost').textContent = lostCounter;
  
    if (deadCounter === 10) {
      alert('Вы победили!');
      deadCounter = 0;
      lostCounter = 0;
    } else if (lostCounter === 10) {
      alert('Вы проиграли!');
      deadCounter = 0;
      lostCounter = 0;
    }
  }

  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleClick);
}