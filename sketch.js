var d



function preload() 
{
e = loadSound("0114. Emotions - AShamaluevMusic.mp3")
}
function setup()
{
createCanvas(windowWidth,windowHeight)
e.play();
e.loop()
}

function draw()
{
  if(frameCount % 5 === 0)
  {
  background(random(0,250),random(0,250),random(0,250));
  }

} 