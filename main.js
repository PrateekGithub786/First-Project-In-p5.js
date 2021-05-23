function preload(){

}

function setup(){
canvas = createCanvas(700, 500);
canvas.position(250, 300);
video = createCapture(VIDEO);
video.hide();
} 

function draw(){
image(video, 290, 190, 150, 150);
//line
fill(0, 255, 0);
stroke(0, 255, 0);
rect(30, 30, 630, 10);
//square
fill(0, 255, 0);
stroke(0, 255, 0);
rect(55, 10, 10, 480);
//square
fill(255, 0, 0);
stroke(255, 0, 0);
rect(30, 10, 55, 55);
//circle
fill(255, 0, 0);
stroke(255, 0, 0);
circle(59, 260, 55);
//line
fill(0, 255, 0);
stroke(0, 255, 0);
rect(30, 460, 630, 10);

fill(255, 0, 0);
stroke(255, 0, 0);
rect(30, 435, 55, 55);

fill(0, 255, 0);
stroke(0, 255, 0);
rect(630, 10, 10, 480);

fill(255, 0, 0);
stroke(255, 0, 0);
rect(605, 435, 55, 55);

fill(255, 0, 0);
stroke(255, 0, 0);
circle(635, 260, 55);

fill(255, 0, 0);
stroke(255, 0, 0);
circle(340, 37, 55);

fill(255, 0, 0);
stroke(255, 0, 0);
circle(338, 460, 55);

fill(255, 0, 0);
stroke(255, 0, 0);
rect(605, 10, 55, 55);
}

function take_snapshot(){
    save("your_pic.png");
}