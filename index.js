document.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', updateCanvasBounds);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  let particles = [];
  const colors = ['#ff0303', '#00ff28'];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.background = 'black';
  canvas.style.display = 'block';

  document.body.append(canvas);

  canvas.onclick = generateParticles;

  function update(){
    context.clearRect(0,0, canvas.width, canvas.height);
    particles = particles.filter(particle=>{
      if(particle.alpha <= 0) return false;
      particle.move();
      return true;
    });
  }

  function tick(){
    update();
    requestAnimationFrame(tick);
  }

  function generateParticles({clientX, clientY}){
    console.log(particles.length);
    const num = Math.floor(Math.random() * 300 + 150);
    for(let i = 0; i < num; i++){
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(canvas, context, clientX, clientY, color));
    }
  }

  function updateCanvasBounds() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  tick();

});
