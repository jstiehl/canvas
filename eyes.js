var context = document.getElementById('canvas').getContext('2d'),
	
	AXIS_MARGIN = 40,
	AXIS_ORIGIN = {x: AXIS_MARGIN, y:canvas.height-AXIS_MARGIN},

	AXIS_TOP = AXIS_MARGIN,
	AXIS_RIGHT = canvas.width-AXIS_MARGIN,

	HORIZONTAL_TICK_SPACING = 10,
	VERTICAL_TICK_SPACING = 10,

	AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x,
	AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

	NUM_VERTICAL_TICKS = AXIS_HEIGHT/VERTICAL_TICK_SPACING,
	NUM_HORIZONTAL_TICKS = AXIS_WIDTH/HORIZONTAL_TICK_SPACING,

	TICK_WIDTH = 10,
	TICKS_LINEWIDTH = 0.5,
	TICKS_COLOR = 'navy',

	AXIS_LINEWIDTH = 1.0,
	AXIS_COLOR = 'blue',
gradient = context.createLinearGradient(0,0,canvas.width,0);

function bggrad() {
gradient = context.createLinearGradient(0,0,canvas.width*Math.random(),canvas.height*Math.random());
gradient.addColorStop(0, 'black');
gradient.addColorStop(Math.random(), 'lightgray');
gradient.addColorStop(Math.random(), 'grey');
context.fillStyle = gradient;
context.fillRect(0,0,canvas.width,canvas.height);
}

//Functions ....

function drawGrid (context, color, stepx, stepy) {
	context.strokeStyle = color;
	context.lineWidth = 0.5;

	for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i, context.canvas.height);
		context.stroke();
	}

	for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
		context.beginPath();
		context.moveTo(0,i);
		context.lineTo(context.canvas.width, i);
		context.stroke();
	}
}



function drawEyes(dx,dy) {
	context.save();
	context.strokeStyle = 'rgba('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+',1)';
	context.fillStyle = 'rgba('+parseInt(Math.random()*255/4)+','+parseInt(Math.random()*255/4)+','+parseInt(Math.random()*255/4)+',1)';
	context.lineWidth = 1.5;
	context.beginPath();
	context.arc(dx,dy,60,45*Math.PI/180,135*Math.PI/180,false);
	context.arc(dx,dy+85,60,225*Math.PI/180,315*Math.PI/180,false);
	context.stroke();
	context.fill();
	context.fillStyle = 'rgba('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+Math.random()+')';
	context.beginPath();
	context.arc(dx,dy+45,15,0,Math.PI*2,false);
	context.arc(dx,dy+45,5,0,Math.PI*2,true);
	context.fill();
	context.fillStyle = 'rgba('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+',1)';
	context.beginPath();
	context.arc(dx,dy+45,5,0,Math.PI*2,true);
	context.fill();
	context.restore();

}

function animateEyes(){
	/*bggrad();*/
	for (var y = 0;y<800; y += 80){
		for (var x = 50; x < 1000; x += 100){
			drawEyes(x,y);
		}
	};
	drawGrid(context,'lightgray', 100, 80);
	var loopTimer = setTimeout('animateEyes()',250);
}
// Initialization

animateEyes();







