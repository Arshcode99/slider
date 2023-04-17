setTimeout(() => {
    document.getElementById('loading').style.opacity="0";
}, 4000);
setTimeout(() => {
    document.getElementById('loading').style.display="none";
}, 4500);

// Slider Logic :
function Taketotop(){
    const Cont = document.getElementById('preview-images')
  Cont.scrollTop -= 60;
}
function Taketodown(){
    const Cont = document.getElementById('preview-images')
    Cont.scrollTop += 60;
}

// Function to display selected image in the image display div
function displayImage(imageUrl) {
    document.getElementById('displayedImage').src = imageUrl;
}