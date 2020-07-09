var database;
var drawing = [];
var pen = [];
var firebase;
var button;
var clearButton;


function setup(){
    var canvas = createCanvas(800,500);

     database = firebase.database();
    

    button = createButton('SAVE');

    button.position(1100,550);

    clearButton = createButton('CLEAR');
    clearButton.position(1000,550);
    
    
    canvas.mousePressed(start);
}

function draw(){
    background("yellow");

    if(mouseIsPressed){
        var mouseLocation = {
            x:mouseX,
            y:mouseY
          }
        pen.push(mouseLocation);
    }
    
    noFill();
    stroke("red");
    strokeWeight(3);
    for(var i=0; i<drawing.length;i++){
        var path =drawing[i];
        beginShape();
        for(var p=0;p<path.length;p++){
          vertex(path[p].x,path[p].y);
        }
        endShape();
      }

      button.mousePressed(function(){
        var drawingRef = database.ref('savedDrawing');
        var data = {
          savedDrawing :drawing
        }
        drawingRef.push(data);

      });

      clearButton.mousePressed(function(){
        drawing = [];
      })
   
}

//function Database.ref.on()

function start(){
    pen=[];
    drawing.push(pen);
}


