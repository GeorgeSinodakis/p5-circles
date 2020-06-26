function setup() 
{
	createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw() 
{
	background(0);

	noFill();
	stroke(255);
	strokeWeight(3);
	translate(width / 2, height / 2);
	
	for(let theta = 0; theta<360; theta += 360/10) 
	{
		circle(width/4 * cos(theta), width/4*sin(theta), width/2-5);
	}
}