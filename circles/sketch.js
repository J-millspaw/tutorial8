function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    
    fill('red');
    
    noFill();
    let counter = 0;
    while (counter < 7) {
        circle(350, 300 + counter*10, counter * 10);
        counter += 1}

        while (counter < 7) {
            circle(350 + counter*10, 300, counter * 10);
        
        
        //if (counter % 2 == 0){
        //    fill('aquamarine')
           
       // } else {fill('darkgreen')}
        //circle(100 + counter * 10, 200 + counter*25, 50)
        //circle(275 - counter * 10, 200 + counter*25, 50)
        //circle(275, 200 + counter*25, 50);
        counter += 1
    }
    //circle(100, 200, 50);
   // circle(100, 250, 50);
    //circle(100, 300, 50);
    //circle(100, 350, 50);
    //circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
