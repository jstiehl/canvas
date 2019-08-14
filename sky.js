var context = document.getElementById('canvas').getContext('2d');



function drawEyes(dx,dy) {
	
	context.save();

	context.fillStyle = 'rgba(175,175,255,1)';
	context.lineWidth = 1.5;
	context.beginPath();
	context.arc(dx,dy,Math.random()*3,0,Math.PI*2,false);
	context.fill();
	context.restore();

}

function planet(x,radius) {
	context.save()
	context.fillStyle = 'rgba(230,230,255,.9)';
	context.beginPath();
	context.arc(x,400,radius,0,Math.PI*2,false);
	context.fill();
	context.restore();

	drawShip();

	if (radius <=500){
		radius += 5;
	}

	if (radius > 250) {
		x -= 10;
	}

	if (x < -500){
		radius = 0;
		x = 100;
	}

	var loopTimer2 = setTimeout('planet('+x+','+radius+')',200);
}

function drawShip() {
	context.save();
	context.fillStyle = 'darkgray';
	context.beginPath();
	context.arc(500,400,60,0,Math.PI*2,false)
	context.arc(500,400,50,0,Math.PI*2,true);
	context.fill();
	context.beginPath();
	context.arc(500,400,210,0,Math.PI*2,false)
	context.arc(500,400,200,0,Math.PI*2,true);
	context.fill();
	context.lineWidth = 10;
	context.strokeStyle = 'darkgray';
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(458,358);
	context.stroke();
	context.beginPath();
	context.moveTo(0,800);
	context.lineTo(458,442);
	context.stroke();
	context.beginPath();
	context.moveTo(1000,0);
	context.lineTo(542,358);
	context.stroke();
	context.beginPath();
	context.moveTo(1000,800);
	context.lineTo(542,442);
	context.stroke();
	context.restore();
}

function animatesky(){
	context.clearRect(0,0,canvas.width, canvas.height);
	
	for (var y = 0;y<5000; y += 100){
		for (var x = 0; x < 5000; x += 100){
			drawEyes(x*Math.random(),x*Math.random());
		}
	};

	var loopTimer = setTimeout('animatesky()',200);
}
// Initialization

animatesky();
planet(100,0);






