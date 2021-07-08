function setup() {
  canvas = createCanvas(400, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  model = ml5.imageClassifier("MobileNet",modelLoaded)
}

function modelLoaded(){
console.log("Model has Loaded!");
}

function draw(){

image (video, 0, 0, 400, 350);

model.classify(video, gotResult);
}

function gotResult(error, results){

if (error){
console.error(error);
}

else{
console.log(results);

document.getElementById("object_result").innerHTML = results[0].label;

document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3);

}

}
