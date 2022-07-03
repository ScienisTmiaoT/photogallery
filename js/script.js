// avoid browser caches data.js by inserting an unique identifier
document.getElementById('datajs').src = 'js/data.js' + '?v=' + Date.now();

const jsonData = JSON.parse(data);

var parent = document.querySelector('.m-p-g__thumbs');

const dataList = jsonData["data"];
const MAX_SIZE = 6;
let start = 0;
start = appendImgs(parent, start, start + 2 * MAX_SIZE, dataList);

function appendImg(pic, parent) {
    var img = document.createElement('img');
    img.src = "./img/" + pic["filename"];
    img.title = pic["title"] + "@" + pic["date"];
    img.setAttribute("data-full", "./img/" + pic["filename"]);
    img.setAttribute("class", "m-p-g__thumbs-img");
    parent.appendChild(img);
}

function appendImgs(parent, start, end, dl) {
  let e = Math.min(end, dl.length);
  for (let i = start; i < e; i++) {
    appendImg(dl[i], parent);
  }
  return e;
}

var elem = document.querySelector('.m-p-g');

document.addEventListener('DOMContentLoaded', function () {
    var gallery = new MaterialPhotoGallery(elem);
});

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight) {
      if (start < dataList.length) {
        start = appendImgs(parent, start, start + MAX_SIZE, dataList);
        var gallery = new MaterialPhotoGallery(document.querySelector('.m-p-g'));
      }
    }
  });