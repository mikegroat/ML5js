let mobilenet;
let video;
let label = 'please wait...';

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(err, results) {
    if(err) {
        console.error(err);
    } else {
//        console.log(results);
        label = results[0].className;
        mobilenet.predict(gotResults);
    }
}

function setup() {
    console.log('starting up at %s', Date.now().toString());
    createCanvas(640, 50);
    video = createCapture(VIDEO);
//    video.hide();
    background(0);
    
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
//    image(video, 0, 0);
    fill(255);
    textSize(32);
    text(label, 10, height - 20);
}