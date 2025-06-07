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
    this.waypointIndex = 0; // Index to track the current waypoint
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }
  }

    draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

     update() {
        // Update the enemy's position or other properties if needed
        this.draw()

        const waypoint = waypoints[this.waypointIndex]; // Assuming you want to use the first waypoint
        const yDistance = waypoint.y - this.center.y
        const xDistance = waypoint.x - this.center.x
        const angle = Math.atan2(yDistance, xDistance);
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle);
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        console.log(Math.round(this.position.x))

        if (
            Math.round(this.center.x) === Math.round(waypoint.x) && Math.round(this.center.y) === Math.round(waypoint.y)
            && this.waypointIndex < waypoints.length - 1)
            {
            // Move to the next waypoint
            this.waypointIndex++;
        }
    }
}

const enemies = [];
for (let i = 1; i < 10; i++) {
    const xOffset = i * 150
    enemies.push(new Enemy({
    position: { x: waypoints[0].x - xOffset, y: waypoints[0].y + i * 50 }}));
  }



// Animation loop
function animate() {
  requestAnimationFrame(animate);

  c.drawImage(image, 0, 0)
  enemies.forEach(enemy => {
    enemy.update()
  })
}

animate(); // Start the animation
