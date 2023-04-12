function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    // fill('red');
    noFill();





    
    let counter = 0;
    while (counter < 15) {
    circle(100, counter * 50, 50 + counter * 30);
    counter += 1;
    } 

  /*  let y = 00;
    while (y <= 800) {
    circle(100, y, 50);
    y += 50;
    } */



    drawGrid(canvasWidth, canvasHeight);
}
