
//your script here.
var urlParam = location.search.substring(1);

console.log(urlParam);

var test = "../img/" + urlParam +".jpg";

let img_element = document.createElement('img');

console.log(img_element);
img_element.src = test;


let content_area = document.getElementById("get-img");
content_area.setAttribute('src', img_element.src);