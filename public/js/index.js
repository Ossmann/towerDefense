const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;

// Fill the background with white
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

// Load and draw the map image
const image = new Image();
image.onload = () => {
    animate(); // Start the animation after the image is loaded
  
};
image.src = '/img/gameMap.png';

 class Enemy {
  constructor({position = { x: 0, y: 0}}) {
    this.position = position
    this.width = 100;
    this.height = 100;
  }

    draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

     update() {
        // Update the enemy's position or other properties if needed
        this.draw()
        this.position.x += 1 // Example movement to the right
    }
}

const enemy = new Enemy({position: { x: 200, y: 400 }});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  c.drawImage(image, 0, 0)
  enemy.update(); // Update and draw the enemy

  
}

animate(); // Start the animation
