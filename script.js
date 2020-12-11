//Greensock Animations//
jQuery(function() {
    gsap.set($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 0}});
    gsap.to($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 1},
                                                   duration: 1,
                                                   delay: 1});

    var prog = gsap.to($("#progPort"), {css: {color: "red"},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    paused: true
                                },
                                duration: 1});

    const playST = ScrollTrigger.create({
                                trigger:"#scrollHeader", 
                                start:'top center', 
                                onEnter: () => prog.play()
    });

    const resetST = ScrollTrigger.create({
                                trigger:"#scrollHeader",
                                start:'top center',
                                onLeaveBack: () => prog.pause(0)
    });
    $(".NavText").on("mouseenter", function() {
        gsap.to($(this), {css: {fontSize: "1em"},
                            duration: 0.25});
    });

    $(".NavText").on("mouseleave", function() {
        gsap.to($(this), {css: {fontSize: "0.8em"},
                            duration: 0.25});

    });

    $(".progText").on("mouseenter", function() {
        gsap.to($(this), {css: {fontSize: "1rem"},
                            duration: 0.25});
    });

    $(".progText").on("mouseleave", function() {
        gsap.to($(this), {css: {fontSize: "0.65rem"},
                            duration: 0.25});

    });

})


//Cursor Animation//
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




