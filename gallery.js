var photoList;
var listElementHTML;
var photo;

photoList = document.getElementById('photoList');
photo = document.getElementsByClassName('photo');

function addPhoto() {
    for (i = 1; i <= 12; i++) {
        listElementHTML = `<li><img class="photo" src="images/gallery/pet${i}.jpg"><span class="caption">Pet ${i}</span><span class="description">Adorable animal</span></li>`;
        photoList.innerHTML += listElementHTML
    }
}

addPhoto();


// for (p of photo) {
//     p.addEventListener("mouseover", function () {
//         console.log('Mouse over')
//     })
//     p.addEventListener("mouseleave", function(){
//         console.log('Mouse leave')
//     })
// }

