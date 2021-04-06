//Select element function
const selectElement = function (element){
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open')
});


let images = selectElement('.images');
var image = document.createElement("div");
var imageDark = document.createElement("div");
for(i = 0; i < 3; i++){
    images.appendChild(image.cloneNode(true));
    if(i == 2){
        image = document.querySelectorAll('.images div');
        for(i = 0; i < 3; i++){
            image[i].setAttribute('class','image');
            if(i == 2){
                image = document.querySelectorAll('.image');
                for(i = 0; i < 3; i++){
                    if(i == 0){
                        for(i = 0; i < 7; i ++){
                            image[0].appendChild(imageDark.cloneNode(true));
                        }
                        i = 0;
                    }
                    else if(i == 1){
                        for(i = 0; i < 7; i ++){
                            image[1].appendChild(imageDark.cloneNode(true));
                        }
                        i = 1;
                    }
                    else if(i == 2){
                        for(i = 0; i < 7; i ++){
                            image[2].appendChild(imageDark.cloneNode(true));
                        }
                    }
                }
            }
        }
    }
}

imageDark = document.querySelectorAll('.image div');
var img = document.createElement("img");
for(i = 0; i<imageDark.length; i++){
    imageDark[i].setAttribute('class','image-dark');
    imageDark[i].appendChild(img.cloneNode(true));
}

img = document.querySelectorAll('.image-dark img');
for(i = 0; i<21; i++){
    var imageNumber = "img/image" + i + ".jpg";
    img[i].setAttribute('src', imageNumber);
}
