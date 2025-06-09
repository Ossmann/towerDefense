const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;

// Fill the background with white
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const placementTilesData2D = []

for (let i = 0; i < placementTilesData.length; i+= 20) {
    placementTilesData2D.push(placementTilesData.slice(i, i + 20))
}

const placementTiles = []

placementTilesData2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 14) {
            // add building placement tile her
            placementTiles.push(
                new PlacementTile({
                    position: {
                        x: x * 64,
                        y: y * 64
                    }
                })
            )
        }
    })
})


// Load and draw the map image
const image = new Image();
image.onload = () => {
    animate(); // Start the animation after the image is loaded
  
};
image.src = '/img/gameMap.png';


const enemies = []

function spawnEnemies(spawnCount) {
    // spawn new enemies when other number of spawnCount are killed
    for (let i = 1; i < spawnCount + 1; i++) {
    const xOffset = i * 150
    enemies.push(new Enemy({
    position: { x: waypoints[0].x - xOffset, y: waypoints[0].y + i * 50 }}));
  }
}

spawnEnemies(3)

const buildings = []
let activeTile = undefined
let enemyCount = 3
let hearts = 10
let coins = 100
spawnEnemies(enemyCount)

let animationId;
let isGameOver = false;

// Animation loop
function animate() {
    if (isGameOver) return; // Stop the loop if game is over

    const animationId = requestAnimationFrame(animate)


  c.drawImage(image, 0, 0)

  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i]
    enemy.update()

    //remove enemy if of the map
    if (enemy.position.x > canvas.width) {
        hearts -= 1
        enemies.splice(i, 1)
        document.querySelector('#hearts').innerHTML = hearts

        //remove lives
        if (hearts === 0) {
            console.log('game over')
            isGameOver = true;
            const gameOverDiv = document.querySelector('#gameOver');
            gameOverDiv.classList.remove('hidden'); //change css of GameOver text to reveal
        }
    }
  }

    //tracking total amount of enemies
    if (enemies.length === 0) {
        enemyCount += 2
        spawnEnemies(enemyCount)
    }

  placementTiles.forEach((tile) => {
    tile.update(mouse)
  })

  buildings.forEach((building) => {
    building.update()
    building.target = null
    const validEnemies = enemies.filter(enemy => { // enemies within the range of a building radius
        const xDifference = enemy.center.x - building.center.x
        const yDifference = enemy.center.y - building.center.y
        const distance = Math.hypot(xDifference, yDifference)
        return distance < enemy.radius + building.radius
    })
    building.target = validEnemies[0] //give us the first enemy within the target radius

    // for loop to remove projectiles from the array from the back
    for (let i = building.projectiles.length - 1; i >= 0; i--) {
        const projectile = building.projectiles[i]
    
        projectile.update()

        const xDifference = projectile.enemy.center.x - projectile.position.x
        const yDifference = projectile.enemy.center.y - projectile.position.y
        const distance = Math.hypot(xDifference, yDifference)

        // this is when a projectile hits an enemy
        if (distance < projectile.enemy.radius + projectile.radius) {
            projectile.enemy.health -= 20
            //remove the enemy when its out of health
            if (projectile.enemy.health <= 0) {
                const enemyIndex = enemies.findIndex((enemy) => {
                    return projectile.enemy === enemy         //we store in enemyindex the current enemy, if it is the one we are looping over
                })

                if (enemyIndex > -1) {
                    enemies.splice(enemyIndex, 1)                      //remove enemy, if > -1 so if enemy is already dead when hit it doesnt remove other enemy
                    coins += 25
                    document.querySelector('#coins').innerHTML = coins  //earn coins by killing
                }
            }

            building.projectiles.splice(i, 1) 
        }
    }
})
}

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (event) => {
    if (activeTile && !activeTile.isOccupied && coins - 50 >= 0) { //only let buildings be built in active tile and if enought coins
        coins -= 50                                                //substract building costs
        document.querySelector('#coins').innerHTML = coins
        buildings.push(new Building({
            position: {
                x: activeTile.position.x,
                y: activeTile.position.y
            }
        }))
        activeTile.isOccupied = true
        buildings.sort((a, b) => {
            return a.position.y - b.position.y
        })
    }
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    activeTile = null
    for (let i = 0; i < placementTiles.length; i++) {
        const tile = placementTiles [i]
        if (
            mouse.x > tile.position.x 
            && mouse.x < tile.position.x + tile.size 
            && mouse.y > tile.position.y 
            && mouse.y < tile.position.y + tile.size ) {
                activeTile = tile
                break
            }
    }
 })


animate(); // Start the animation
