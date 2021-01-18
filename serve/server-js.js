function setup() {
    createCanvas(500,500);
}
function draw() {
    background(0);
    loadJSON('/server-request', (data) => {
        loadPixels();

        for(let i =0 ; i < pixels.length; i++) {
            pixels[i] = data.videos[0][i];
        }

        updatePixels();
    })
}