var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: 270,
    height: 270,
});

var layer = new Konva.Layer();

let circles = [];
var delta_X = 0;
var delta_Y = 0;

for (let i=0; i<3; i++){
    delta_X = 0;
    
    for(let j=0; j<3; j++){

        var circle = new Konva.Circle({
            x: 45 + delta_X,
            y: 45 + delta_Y,
            radius: 40,
            fill: 'red'
        });
        delta_X = delta_X + 90;

        circles.push(circle);
    }
    delta_Y = delta_Y + 90;
}

// add the shape to the layer
layer.add(...circles);

// add the layer to the stage
stage.add(layer);