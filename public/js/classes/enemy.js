
class Enemy extends Sprite {
  constructor({
    position = { x: 0, y: 0 },
    imageSrc,
    frames = { max: 1 },
    width = 100,
    height = 100,
    speed = 1,
    health = 100,
  }) {
    super({
      position,
      imageSrc,
      frames,
    });

    this.position = position;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.health = health;

    this.waypointIndex = 0;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.radius = Math.min(this.width, this.height) / 2;
    this.velocity = { x: 0, y: 0 };
  }

  draw() {
    const cropWidth = this.image.width / this.frames.max;
    const crop = {
      position: {
        x: cropWidth * this.frames.current,
        y: 0,
      },
      width: cropWidth,
      height: this.image.height,
    };

    c.drawImage(
      this.image,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.width,
      this.height
    );

    // Health bar
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y - 15, this.width, 10);

    c.fillStyle = 'green';
    c.fillRect(this.position.x, this.position.y - 15, this.width * this.health / 100, 10);
  }

  update() {
    this.draw();
    super.update();

    const waypoint = waypoints[this.waypointIndex];
    const yDistance = waypoint.y - this.center.y;
    const xDistance = waypoint.x - this.center.x;
    const angle = Math.atan2(yDistance, xDistance);
    const speed = this.speed; // Use instance speed property

    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

// Define Skeleton class extending Enemy
class Skeleton extends Enemy {
  constructor(options) {
    super({
      ...options,
      imageSrc: 'img/Skeleton_01_White_Walk.png',
      frames: { max: 10 },
      width: 140,
      height: 100,
      speed: 3,
      health: 100,
    });
  }

  // Optionally override update() or draw() here if needed
}

// Define Skeleton class extending Enemy
class Orc extends Enemy {
  constructor(options) {
    super({
      ...options,
      imageSrc: 'img/orc.png',
      frames: { max: 7 },
      width: 100,
      height: 100,
      speed: 1,
      health: 100,
    });
  }

  // Optionally override update() or draw() here if needed
}
