song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("kanneadhirindi.mp3");
    song2 = loadSound("sarangadariya.mp3");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
