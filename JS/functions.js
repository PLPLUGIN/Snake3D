var b1 = "🟩";
var b2 = "🟫";
var b3 = "🍎";

var ax_cur=document.getElementsByClassName("current");
var ax1=document.getElementsByClassName("x1");
var ax2=document.getElementsByClassName("x2");
var ax3=document.getElementsByClassName("x3");
var ax4=document.getElementsByClassName("x4");
var ax5=document.getElementsByClassName("x5");
var ax6=document.getElementsByClassName("x6");
var ax7=document.getElementsByClassName("x7");
var ax8=document.getElementsByClassName("x8");

function display(axis,board,x) {
	axis[0].innerHTML="";
	for (i=0;board[x].length>i;i++) {
		for (ii=0;board[x].length>ii;ii++) {
			axis[0].innerHTML += board[x][i][ii];
		} axis[0].innerHTML += "<br>";
	}
}

function randomize(board) {
	ran_x=Math.floor(Math.random() * 8);
	ran_y=Math.floor(Math.random() * 8);
	ran_z=Math.floor(Math.random() * 8);
	while (board[ran_x][ran_y][ran_z]!=b1) {
		ran_x=Math.floor(Math.random() * 8);
		ran_y=Math.floor(Math.random() * 8);
		ran_z=Math.floor(Math.random() * 8);
	}
	board[ran_x][ran_y][ran_z]=b3;
}

function refresh_glow(){
	if (x==0) {
		ax1[0].classList.add("glow");
		ax2[0].classList.remove("glow");
	}
	if (x==1) {
		ax1[0].classList.remove("glow");
		ax2[0].classList.add("glow");
		ax3[0].classList.remove("glow");
	}
	if (x==2) {
		ax2[0].classList.remove("glow");
		ax3[0].classList.add("glow");
		ax4[0].classList.remove("glow");
	}
	if (x==3) {
		ax3[0].classList.remove("glow");
		ax4[0].classList.add("glow");
		ax5[0].classList.remove("glow");
	}
	if (x==4) {
		ax4[0].classList.remove("glow");
		ax5[0].classList.add("glow");
		ax6[0].classList.remove("glow");
	}
	if (x==5) {
		ax5[0].classList.remove("glow");
		ax6[0].classList.add("glow");
		ax7[0].classList.remove("glow");
	}
	if (x==6) {
		ax6[0].classList.remove("glow");
		ax7[0].classList.add("glow");
		ax8[0].classList.remove("glow");
	}
	if (x==7) {
		ax8[0].classList.add("glow");
		ax7[0].classList.remove("glow");
	}
}

function refresh_display() {
	display(ax1,game,0);
	display(ax2,game,1);
	display(ax3,game,2);
	display(ax4,game,3);
	display(ax5,game,4);
	display(ax6,game,5);
	display(ax7,game,6);
	display(ax8,game,7);
	display(ax_cur,game,x);
}
function key_press(event) {
	var x = event.which || event.keyCode;
	document.getElementById(1).value="";
	console.log(x);
	if (x==119) {direction = "y-"} //w
	if (x==115) {direction = "y+"} //s
	if (x==97) {direction = "z-"} //a
	if (x==100) {direction = "z+"} //d
	if (x==113) {direction = "x-"} //q
	if (x==101) {direction = "x+"} //e
}

function clear_board(board) {
	for (var i=0;i<board.length;i++) {
		for (var ii=0;ii<board.length;ii++) {
			for (var j=0;j<board.length;j++) {
				if(board[i][ii][j]==b2){board[i][ii][j]=b1;}
			}
		}
	}
}


function refresh_snake(snake) {
	clear_board(game);
	for(var i=0;i<snake.length;i++) {
		game[ snake[i][0][0] ][ snake[i][1][0] ][ snake[i][2][0] ]=b2;
	}
}

var start = document.getElementsByClassName("start");
start[0].addEventListener("click", function(){
	var start = document.getElementsByClassName("start");
	start[0].style.visibility="hidden";
	window.start=true;
});
