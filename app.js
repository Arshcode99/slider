setTimeout(() => {
    document.getElementById('loading').style.opacity = "0";
}, 4000);
setTimeout(() => {
    document.getElementById('loading').style.display = "none";
}, 4500);

// Slider Logic :
function Taketotop() {
    const Cont = document.getElementById('preview-images')
    Cont.scrollTop -= 60;
}
function Taketodown() {
    const Cont = document.getElementById('preview-images')
    Cont.scrollTop += 60;
}
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
function displayImage(imageUrl) {
    document.getElementById('displayedImage').src = imageUrl;
    toggleNextDot();
}

const MainMagnifyImg = document.getElementById('displayedImage');
function Magnify() {
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


