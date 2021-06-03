var game = [];
var x=0;
var y=0;
var z=2;
var direction = "z+";
var snake = [[[0],[0],[0]],[[0],[0],[1]],[[0],[0],[2]]];
var start=false;
var points=0;

for (i=0;i<8;i++) {
	game[i] = new Array(b1,b1,b1,b1,b1,b1,b1,b1);
	for (ii=0;ii<8;ii++) {
		game[i][ii] = new Array(b1,b1,b1,b1,b1,b1,b1,b1);
	}
}
game[0][0][0]=b2;
game[0][0][1]=b2;




game[x][y][z] = b2;
randomize(game);
refresh_glow();
refresh_display();


var test = setInterval(function(){
if (start==true){
clearInterval(test);
var works = setInterval(function(){
	if (direction=="y+") {
		y++;
	}
	if (direction=="y-") {
		y--;
	}
	if (direction=="x+") {
		x++;
	}
	if (direction=="x-") {
		x--;
	}
	if (direction=="z+") {
		z++;
	}
	if (direction=="z-") {
		z--;
	}

	if (x>7 || x<0 || y>7 || y<0 || z>7 || z<0) {
		clearInterval(works);
		var reset = document.getElementById("2");
		reset.innerHTML="";
		var over = document.getElementsByClassName("over");
		over[0].style.visibility="visible"
		var score = document.getElementsByClassName("score");
		score[0].style.visibility="visible"
		score[0].innerHTML="Score: "+points;
	}

	if (game[x][y][z]==b2){
		clearInterval(works);
		var reset = document.getElementById("2");
		reset.innerHTML="";
		var over = document.getElementsByClassName("over");
		over[0].style.visibility="visible"
		var score = document.getElementsByClassName("score");
		score[0].style.visibility="visible"
		score[0].innerHTML="Score: "+points;
	}

	snake.push(new Array(new Array(x,x),new Array(y,y),new Array(z,z)));

	if (game[x][y][z]!=b3){snake.shift();} else {randomize(game);points++;}


	refresh_snake(snake);


	game[x][y][z]=b2;
	refresh_glow();
	refresh_display();
}, 500);}},1000)