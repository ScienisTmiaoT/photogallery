const jsonData = JSON.parse(data);

var parent = document.querySelector('.m-p-g__thumbs');
for (let pic of jsonData["data"]) {
    var img = document.createElement('img');
    img.src = "./img/" + pic["filename"];
    img.title = pic["title"] + "@" + pic["date"];
    img.setAttribute("data-full", "./img/" + pic["filename"]);
    img.setAttribute("class", "m-p-g__thumbs-img");
    parent.appendChild(img);
}

var elem = document.querySelector('.m-p-g');

document.addEventListener('DOMContentLoaded', function () {
    var gallery = new MaterialPhotoGallery(elem);
});