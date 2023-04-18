setTimeout(() => {
    document.getElementById('loading').style.opacity = "0";
}, 4000);
setTimeout(() => {
    document.getElementById('loading').style.display = "none";
}, 4500);

// Slider Logic :


//This Function Will Take The Side Navigation Of Images To Top
function Taketotop() {
    const Cont = document.getElementById('preview-images')
    Cont.scrollTop -= 60;
}



//This Function Will Take The Side Navigation Of Images To Top
function Taketodown() {
    const Cont = document.getElementById('preview-images')
    Cont.scrollTop += 60;
}



////This Function Will Indicate Current Image In Dots:
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
function toggleNextDot() {
    // Remove "active" class from current dot
    dots[currentIndex].classList.remove('activedot');

    // Update currentIndex to next dot
    currentIndex = (currentIndex + 1) % dots.length;

    // Toggle "active" class on next dot
    dots[currentIndex].classList.toggle('activedot');
}





// Function to display selected image in the image display div
function displayImaged(imageUrl) {
    document.getElementById('displayedImage').src = imageUrl;
    toggleNextDot();
}

function MagnifyModel() {
    document.getElementById('model').style.display = "block"
};

function CloseModel() {
    document.getElementById('model').style.display = 'none';
}



//Model Logic:
// Function to display selected image in the image display div
function displayImage(imageUrl) {
    document.getElementById('displayedImaged').src = imageUrl;
}

function TaketoUP() {
    const Cont = document.getElementById('previewimages')
    Cont.scrollTop -= 60;
}
function TaketoBottom() {
    const Cont = document.getElementById('previewimages')
    Cont.scrollTop += 60;
}

$(document).ready(function () {
    $("#displayedImaged").imagezoomsl({
        zoomrange: [3, 3]
    });
});