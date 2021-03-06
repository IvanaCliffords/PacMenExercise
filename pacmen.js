const pacMen = []; 


function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}


function makePac() {
  
  let velocity = setToRandom(20); 
  let position = setToRandom(200);

  
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = 'img/pacman1.png';
  newimg.width = 150;

 
  newimg.style.top = position.y;
  newimg.style.left = position.x;


  game.append(newimg);

  
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
 
  pacMen.forEach((item) => {
    checkCollisions(item);
    eating(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
    const posX = item.position.x;
    const posY = item.position.y;
    if (posX <= 0 || posX >= window.innerWidth - item.newimg.width) {
      item.velocity.x *= -1;
    }
    if (posY <= 0 || posY >= window.innerHeight - item.newimg.height) {
      item.velocity.y *= -1;
    }
  
  }
  


function eating(item){
  
    pacMen.forEach(item => {
        if (item.position.y > (window.innerHeight / 2)){
            setTimeout(function(){item.newimg.src = './img/pacman1.png'}, 1000);
            setTimeout(function(){item.newimg.src = './img/pacman2.png'}, 800);
        } else if (item.position.y < (window.innerHeight / 2)){
            setTimeout(function(){item.newimg.src = './img/pacman3.png'}, 1000);
            setTimeout(function(){item.newimg.src = './img/pacman4.png'}, 800);
        }
    }
    )
}

function makeOne() {
  pacMen.push(makePac());
} 




