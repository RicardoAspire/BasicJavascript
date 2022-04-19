const images = require("images");

images("./img/forest.jpg")                     
    .size(900)                          
    .draw(images("./img/logo.png").size(500), 250, 50)
    .save("output.jpg", {               
        quality : 50                   
    });