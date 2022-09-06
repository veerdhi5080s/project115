var leftEyeX = 0;
var leftEyeY = 0;
function preload(){
}

function setup(){
canvas = createCanvas(350, 350);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("Magazine Loaded");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftEyeX=results[0].pose.leftEye.x;
    leftEyeY=results[0].pose.leftEye.y;
}
}
function draw(){
image(video,0,0,350,350);
}

function take_snapshot(){
    save("my_picture.jpeg");
}