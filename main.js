camera=document.getElementById("camera");
Webcam.attach("#camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality: 90
});


function take_snap_shot()
{
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML="<img id='image_uploaded' src='"+data_uri+"'>";
});
}

console.log("ml5 version : ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j4feDXXPX/model.json" ,modelLoaded);
function modelLoaded()
{
    console.log("model loaded");
}
function check(){
    img= document.getElementById('image_uploaded');
    classifier.classify(img, gotResults);

}
function gotResults(error, results)
{
    if (error)
    {
        console.error("error");

    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].cofidence.toFixed(3);
    }
}
