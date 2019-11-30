class Particle {
  constructor(canvas, context, originX, originY, color) {
    this.canvas = canvas;
    this.context = context;
    this.color = color;
    this.alpha = 1;
    this.alphaDecay = Math.random() * .01 + .001;
    this.size = Math.random() * 2 + 1.75;
    this.speed = Math.random() * 5 + 3;
    this.directions = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    }
    this.coordinates = {
      x: originX,
      y: originY
    }
  }
  move() {
    const {coordinates, context, canvas, speed, size, directions, color, alphaDecay} = this;
    if(coordinates.x >= canvas.width || coordinates.x <= 0){
      directions.x *= -1;
    }
    if(coordinates.y >= canvas.height || coordinates.y <= 0){
      directions.y *= -1;
    }
    if(this.alpha - alphaDecay < 0){
      this.alpha = 0;
    }
    else{
      this.alpha -= alphaDecay;
    }

    context.beginPath();
    context.fillStyle = color;
    context.arc(coordinates.x, coordinates.y, size, 0, 2 * Math.PI);
    context.globalAlpha = this.alpha;
    context.fill();
    context.closePath();
    coordinates.x += directions.x * speed;
    coordinates.y += directions.y * speed;
  }

}
