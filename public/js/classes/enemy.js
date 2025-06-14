
class Enemy extends Sprite {
  constructor({position = { x: 0, y: 0}}) {
    super({
      position, 
      imageSrc: 'img/orc.png', 
      frames: {
        max: 7
    }})
    this.position = position
    this.width = 100
    this.height = 100
    this.waypointIndex = 0 // Index to track the current waypoint
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }
    this.radius = 50
    this.health = 100
    this.velocity = {
        x: 0,
        y: 0
    }
  }

    draw() {
    super.draw()

    //health bar
    //red under green is revealed when enemy gets hit
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10)

    c.fillStyle = 'green'
    c.fillRect(this.position.x, this.position.y - 15, this.width * this.health / 100, 10)
    }

     update() {
        // Update the enemy's position or other properties if needed
        this.draw()
        super.update()

        const waypoint = waypoints[this.waypointIndex]; // Assuming you want to use the first waypoint
        const yDistance = waypoint.y - this.center.y
        const xDistance = waypoint.x - this.center.x
        const angle = Math.atan2(yDistance, xDistance);
        //speed of enemies
        const speed = 1
        this.velocity.x = Math.cos(angle) * speed
        this.velocity.y = Math.sin(angle) * speed
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        // (change direction)if enemy is within a distance is within a waypoint, we shift to the next waypoint
        if (
            Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x) && 
            Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y) &&
            this.waypointIndex < waypoints.length - 1)
            {
            // Move to the next waypoint
            this.waypointIndex++;
        }
    }
}