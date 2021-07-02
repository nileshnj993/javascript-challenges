function catGen(){
    var image = document.createElement("img");
    var div = document.getElementById('image-container');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}