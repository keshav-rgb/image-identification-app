Webcam.set({
height : 300 ,
width :350 ,
image_format : 'png' ,
png_quality : 90  
});
camera = document.getElementById("camera");
Webcam.attach(camera)
function take_picture(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "selfie_img" src = "'+data_uri+'">';
});
}
console.log('ml5 version-',ml5.version)
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/njFKq5OuY/model.json',modelloaded);
function modelloaded(){
console.log("model is loaded")
}
function check(){
var img = document.getElementById("selfie_img");
classifier.classify(img , got_result)
}
function got_result(error , results){
if(error){
console.error(error)
}
else{
console.log(results)
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}