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

const MainMagnifyImg = document.getElementById('displayedImage');
function Magnify(){
    MainMagnifyImg.classList.add('zoomin');
    const imageContainer = document.querySelector('.slider-view');
        const image = imageContainer.querySelector('#displayedImage');

        imageContainer.addEventListener('mousemove', (event) => {
            const xPos = (event.clientX - imageContainer.offsetLeft) / imageContainer.offsetWidth;
            const yPos = (event.clientY - imageContainer.offsetTop) / imageContainer.offsetHeight;

            image.style.transformOrigin = `${xPos * 100}% ${yPos * 100}%`;
        });

        imageContainer.addEventListener('mouseenter', () => {
            image.classList.add('zoomed');
        });

        imageContainer.addEventListener('mouseleave', () => {
            image.classList.remove('zoomed');
        });
}