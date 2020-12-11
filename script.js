document.onmousemove = animateCircles;

function animateCircles(event) {
    var circle = document.createElement('div');
    circle.setAttribute('class', 'circle');
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft-35+'px';
    circle.style.top = circle.offsetTop-35+'px';
    circle.style.width = '35px';
    circle.style.height= '35px';
    circle.style.borderWidth = '4px';
    circle.style.opacity = 0;

    setTimeout(() => {
        circle.remove();
        }, 300);
};


