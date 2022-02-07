var a1,a2,a3;
var fumiga
var help

function preload(){
  a1 = loadImage("imagens/pirulito.png");
  a2 = loadImage("imagens/bala.png");
  fumiga = loadAnimation("imagens/lol 1.png","imagens/lol 2.png");
  help =loadImage("imagens/eu.png")
  //a3 = loadImage("imagens/tree.png")
} 

function setup(){
  createCanvas(500,500);

 

  floor = createSprite(250,500, 10, 500)
  floor.velocityY = -2
  floor.addImage(help)

  ant = createSprite(200,200)
  ant.scale = 0.4
  ant.addAnimation("f", fumiga)
  



}

function draw(){
  background("green");
  

  if(keyDown("a")){
    ant.x = ant.x-3
    
  }

  if(keyDown("d")){
    ant.x = ant.x+3
    
  }

  if(floor.y < 250){
    floor.y = floor.width/2
  }


    gerarObstaculos();
    drawSprites();


  
}

function gerarObstaculos(){
  if (frameCount % 50 === 0){
    var obstaculo = createSprite(400,165,10,40);
   obstaculo.y = Math.round(random(500,10))
   obstaculo.velocityY = -6;
  
   var obstaculo1 = createSprite(60,165,10,40);
   obstaculo1.x = Math.round(random(400 ,10))
   obstaculo1.velocityX = -6;
   
    
     // //gerar obstáculos aleatórios
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstaculo.addImage(a1);
               break;
       case 2: obstaculo.addImage(a2);
               break;
       
      
        default: break;
     }

     var rand1 = Math.round(random(1,2));
      switch(rand1) {
        case 1: obstaculo1.addImage(a1);
           break;
        case 2: obstaculo1.addImage(a2);
            break;
       
        default: break;
      }
    
     //atribuir escala e tempo de duração ao obstáculo         
     obstaculo.scale = 0.2;
     obstaculo1.scale = 0.2;
     obstaculo.lifetime = 300;
    
   
  }
 }
 
