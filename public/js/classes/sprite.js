class Sprite {
    constructor({ position = { x: 0, y: 0}, imageSrc, frames = {max : 1} }) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.frames = {
            max: frames.max,
            current: 0,  //current frame we are on so we can move to other frames of the png
            elapsed: 0,   //slow animation
            hold: 20 /// slow animation
        }
    }

    draw() {
        const cropWidth = this.image.width / this.frames.max //go through the width of the sprite png
        const crop = {
            position: {
                x: cropWidth * this.frames.current, //dynamic move through the frames of the sprite
                y: 0
            },
            width: cropWidth,
            height: this.image.height
        }
        c.drawImage(
            this.image, 
            crop.position.x, 
            crop.position.y, 
            crop.width, 
            crop.height,
            this.position.x,
            this.position.y,
            crop.width,
            crop.height
        )

        // animation, move through the frames of our sprite,
        this.frames.elapsed++
        if (this.frames.elapsed % this.frames.hold === 0) {  //elapsed and hold to slow animation
            this.frames.current++
            if(this.frames.current >= this.frames.max - 1) {
                this.frames.current = 0 //loop animation
                
            }
        }
   
    }
}