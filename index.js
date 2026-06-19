function searchNow(){

let search =
document.getElementById("search").value;

if(search.trim()!==""){

window.location.href =
"https://www.google.com/search?q=" +
encodeURIComponent(search);

}

}

document
.getElementById("search")
.addEventListener(
"keydown",
function(e){

if(e.key==="Enter"){
searchNow();
}

}
);