function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CN0xGsfA5/", modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomnumber_r=Math.floor(Math.random()*255)+1;
        randomnumber_g=Math.floor(Math.random()*255)+1;
        randomnumber_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
    }
}