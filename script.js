document.onmousemove = animateCircles;

//Cursor Animation//
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


//Greensock Animations//
jQuery(function() {
    gsap.registerPlugin(scrollTrigger);
    gsap.set($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 0}});
    gsap.to($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 1},
                                                   duration: 1,
                                                   delay: 1});

    gsap.to($("#scrollHeader"), {css: {color: "white"},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center"
                                },
                                duration: 1});

    $(".NavText").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white", fontSize: "1em"},
                            duration: 0.25});
    });

    $(".NavText").on("mouseleave", function() {
        gsap.to($(this), {css: {color: "white", fontSize: "0.8em"},
                            duration: 0.25});
    });

    
})

