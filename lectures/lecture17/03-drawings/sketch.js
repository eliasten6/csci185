function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#DDD");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("green")
    circle(400, 200, 300); //x, y, diameter 

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(300, 150, 55, 55);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(450, 150, 55, 55);

         https://p5js.org/reference/#/p5/rect
        fill('white')
        rect(450, 150, 40, 40);

        https://p5js.org/reference/#/p5/rect
        fill('white')
        rect(315, 150, 40, 40);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

     https://p5js.org/reference/#/p5/ellipse
     fill('pink');
     ellipse(400, 260, 200, 100);
     https://p5js.org/reference/#/p5/ellipse
     fill('black');
     ellipse(400, 260, 180, 90);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}