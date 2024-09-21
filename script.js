const image = document.querySelector('img');
const icon = document.querySelector('i');


image.addEventListener('dblclick', function (e) {
    icon.style.transform = 'translate(-50%, -50%) scale(2.5)';
    icon.style.opacity = 0.9;

    setTimeout(() => {
        icon.style.opacity = 0;
    }, 1000);

});