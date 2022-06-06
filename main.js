function preload(){

}
function setup(){
    canvas = createCanvas(790, 580);
    canvas.position(350, 350);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
function draw(){
    image(video, 0, 0, 790, 580);
    tint(tint_color);
}
function take_snapshot(){
    save("tinted_snapshot.png");
}