let img;

function preload() {
  img = loadImage('WhatsApp Image 2024-11-15 at 21.59.47.jpeg'); 
}

function setup() {
  createCanvas(500, 500);
  img.resize(500, 500); 
}



function draw() {
  
  background(0);
  fill(255);
  noStroke();
  
  let tiles = mouseX / 10;
  let tilesize = width / tiles;
  
  translate(tilesize / 2, tilesize / 2);
  
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = img.get(int(x * tilesize), int(y * tilesize));
      let size = map(brightness(c), 0, 255, 0, 30);
      ellipse(x * tilesize, y * tilesize, size, size);
    }
  }
}
