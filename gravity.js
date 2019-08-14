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
	vnoty = -50,
	vnotx = 50;



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



function drawEyes(dx,dy,dt) {

		if(dy < 10 || dy > 780){
			vnoty = -vnoty;
		}
		if (dx > 990 || dx <10){
			vnotx = -vnotx;
		}
	context.fillStyle = 'blue';
	context.clearRect(0,0,canvas.width, canvas.height);
	drawGrid(context,'lightgray', 20, 20);
	context.save();
	context.beginPath();
	context.arc(dx,dy+45,5,0,Math.PI*2,true);
	context.fill();
	context.restore();
	dt += .005;
	dx = dx + dt*vnotx;
	dy = dy + vnoty*dt + 9.8/2*dt*dt;
	var loopTimer = setTimeout('drawEyes('+dx+','+dy+','+dt+')',250);
}


// Initialization
drawGrid(context,'lightgray', 20, 20);
drawEyes(100,500,0);







