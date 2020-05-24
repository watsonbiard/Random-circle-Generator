function setup(){
    createCanvas(1280 ,720);
    var ran1= random(500);
    var ran2= random(400);
    var ran3= random(450);
  

    for (var i=0; i<ran1; i++){
        var R= random(255);
        var G= random(255);
        var B= random(255);
        console.log(R,G,B);

        var x= random(width);
        var y= random(height);
        var r= random(50);

        fill(R,G,B);
        ellipse(x,y, r*2, r*2);

    }
    for (var i=0; i<ran2; i++){
        var R= random(255);
        var G= random(255);
        var B= random(255);
        console.log(R,G,B);

        var x= random(width);
        var y= random(height);
        var r= random(50);

        fill(R,G,B);
        ellipse(x,y, r*2, r*2);

    }
    for (var i=0; i<ran3; i++){

        var R= random(255);
        var G= random(255);
        var B= random(255);
        console.log(R,G,B);

        var x= random(width);
        var y= random(height);
        var r= random(50);

        fill(R,G,B);
        ellipse(x,y, r*2, r*2);

    }
    for (var i=0; i<100; i++){
        var R= random(255);
        var G= random(255);
        var B= random(255);
        console.log(R,G,B);


        var x= random(width);
        var y= random(height);
        var r= random(50);

        noStroke()
        fill(G,R,B);
        ellipse(x,y, r*2, r*2);

    }
}

function draw(){


}