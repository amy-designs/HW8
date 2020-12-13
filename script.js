var width = window.innerWidth;
var height = window.innerHeight;


//Greensock Animations//
jQuery(function() {
    gsap.set($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 0}});
    gsap.to($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 1},
                                                   duration: 1,
                                                   delay: 1});

    gsap.to($("#PortNav"), {css: {opacity: 0},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progPort"), {css: {color: "white", opacity: 1},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progAbout"), {css: {color: "white", opacity: 0.7},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progSide"), {css: {color: "white", opacity: 0.7},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                },
                                duration: 0.3});

    if (width > 1024) {

        $(".progText").on("mouseenter", function() {
            gsap.to($(this), {css: {fontSize: "1.15vw"},
                                duration: 0.25});
        });

        $(".progText").on("mouseleave", function() {
            gsap.to($(this), {css: {fontSize: "1vw"},
                                duration: 0.25});

        });
        $(".NavText").on("mouseenter", function() {
            gsap.to($(this), {css: {fontSize: "1.1vw"},
                                duration: 0.25});
        });

        $(".NavText").on("mouseleave", function() {
            gsap.to($(this), {css: {fontSize: "1vw"},
                                duration: 0.25});

        });

        $(".proj").on("mouseenter", function() {
            gsap.to($(this), {css: {width: "61vw"},
                                duration: 0.25});
        });

        $(".proj").on("mouseleave", function() {
            gsap.to($(this), {css: {width: "60vw"},
                                duration: 0.25});

        });
    }

    $(document).ready(function() {
  
        $(".menu-link").click(function(event) {
          event.preventDefault();
          $(".menu-overlay").toggleClass("open");
          $(".menu").toggleClass("open");
      
        });
          
      });
    
});


//Cursor Animation//
if (width > 1024) {
    var circle = document.createElement('span');
    circle.id="mouse-circle";
    circle.className = "mouse-circle";
    document.body.appendChild(circle);

    document.addEventListener('DOMContentLoaded', () => {
        let mousePosX = 0,
            mousePosY = 0,
            mouseCircle = document.getElementById('mouse-circle');

        document.onmousemove = (e) => {
            mousePosX = e.pageX;
            mousePosY = e.pageY;
        }

        let delay = 6,
            revisedMousePosX = 0,
            revisedMousePosY = 0;

        function delayMouseFollow() {
            requestAnimationFrame(delayMouseFollow);

            revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
            revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

            mouseCircle.style.top = revisedMousePosY + 'px';
            mouseCircle.style.left = revisedMousePosX + 'px';
        }
        delayMouseFollow();
    });
}






