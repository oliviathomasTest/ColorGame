var colors = [];

var num =6;
var clickedcolor;

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var picked = document.querySelector("#picked");
var main = document.querySelector(".main");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var newcolors = document.querySelector("#new");


colorsArray(num);
pickcolor();
var pickedcolor;
picked.textContent = pickedcolor;

newcolors.addEventListener("click",function(){

reset();
while(colors.length>0){
colors.pop();
}
colorsArray(num);
pickcolor();
picked.textContent=pickedcolor;

for (var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor= colors[i];

}
});


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
reset();
num=3;
while(colors.length>0){
colors.pop();
}
changedDisplay(num);
colorsArray(num);
pickcolor();
picked.textContent=pickedcolor;

for (var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor= colors[i];

}
});


hard.addEventListener("click",function(){
	reset();
	hard.classList.add("selected");
	easy.classList.remove("selected");
num=6;
while(colors.length>0){
colors.pop();
}
colorsArray(num);
pickcolor();
picked.textContent=pickedcolor;


for (var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor= colors[i];

}

});


for (var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
       clickedcolor = this.style.backgroundColor;
       if(clickedcolor === pickedcolor){
       	message.textContent = "Correct!";
       	changeAll(clickedcolor);
       	main.style.backgroundColor = clickedcolor;
       	newcolors.textContent="Try again!";
       }
       else {
       		message.textContent = "Try again";
       		//removeColor(clickedcolor);
       		this.style.backgroundColor= document.body.style.backgroundColor;
       }
	});

}



function removeColor(color){
	for(var i=0;i<colors.length;i++){
     if(colors[i] === color){
     	squares[i].style.backgroundColor= document.body.style.backgroundColor;
     }
	}
}


function changeAll(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function colorsArray(num){
   for(var i=0;i<num ;i++)
	colors.push(randomColors());
}

function randomColors(){
 var r = Math.floor(Math.random()*266);
 var g = Math.floor(Math.random()*266);
 var b = Math.floor(Math.random()*266);
 return "rgb(" + r +", "+g+", "+b +")";
}

function pickcolor(){
	var index = Math.floor(Math.random()*colors.length);
	console.log(index);
	for (var i=0 ;i<colors.length;i++){
		if(i==index){
     pickedcolor = colors[i];
		}
	}
}

function changedDisplay(num){
	for(var i=num;i<6;i++){
		squares[i].style.backgroundColor = document.body.style.backgroundColor;
	}
}

function reset(){
	main.style.backgroundColor= "rgb(56, 144, 197)";
	newcolors.textContent="NEW COLORS";
	message.textContent="";
}