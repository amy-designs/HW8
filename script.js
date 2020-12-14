var width = window.innerWidth;
var height = window.innerHeight;


//Greensock Animations//
jQuery(function() {
    gsap.set($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 0}});
    gsap.to($(".GSAPBody").add(".GSAPLowerBody"), {css: {opacity: 1},
                                                   duration: 1,
                                                   delay: 1});


//Scroll to Portfolio
gsap.set($("#progPort"), {css: {color: "white", opacity: 0}});
gsap.set($("#progAbout"), {css: {color: "white", opacity: 0}});
gsap.set($("#progSide"), {css: {color: "white", opacity: 0}});


    gsap.to($("#PortNav"), {css: {opacity: 0},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progPort"), {css: {color: "white", opacity: 1},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progAbout"), {css: {color: "white", opacity: 0.6},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});

    gsap.to($("#progSide"), {css: {color: "white", opacity: 0.6},
                                scrollTrigger: {
                                    trigger: "#scrollHeader",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});

    gsap.to($("#scrollHeader"), {css: {opacity: 1},
                                        scrollTrigger: {
                                            trigger: "#scrollHeader",
                                            start: "top center",
                                            toggleActions: "restart none none reverse"
                                        },
                                        duration: 1});
//Back to Portfolio



//Scroll to About
    gsap.to($("#progPort"), {css: {color: "white", opacity: 0.6},
                                scrollTrigger: {
                                    trigger: "#aboutSection",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});
    gsap.to($("#progSide"), {css: {color: "white", opacity: 0.6},
                                scrollTrigger: {
                                    trigger: "#aboutSection",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});
    gsap.to($("#progAbout"), {css: {color: "white", opacity: 1},
                                scrollTrigger: {
                                    trigger: "#aboutSection",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});


//Scroll to Side Proj
    gsap.to($("#progAbout"), {css: {color: "white", opacity: 0.6},
                                scrollTrigger: {
                                    trigger: "#sideProjects",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});
    gsap.to($("#progSide"), {css: {color: "white", opacity: 1},
                                scrollTrigger: {
                                    trigger: "#sideProjects",
                                    start: "top center",
                                    end: "bottom center",
                                    toggleActions: "restart none restart reverse"
                                },
                                duration: 0.3});
    gsap.to($("#scrollHeader"), {css: {opacity: 1},
                                        scrollTrigger: {
                                            trigger: "#sideProjects",
                                            start: "top center",
                                            toggleActions: "restart none none reverse"
                                        },
                                        duration: 1});
    //Hover Animations

        $(".progText").on("mouseenter", function() {
            gsap.to($(this), {css: {fontSize: "0.75rem"},
                                duration: 0.25});
        });

        $(".progText").on("mouseleave", function() {
            gsap.to($(this), {css: {fontSize: "0.65rem"},
                                duration: 0.25});

        });

        $(".portLink").on("mouseenter", function() {
            gsap.to($(this), {css: {fontSize: "0.75rem"},
                                duration: 0.25});
        });

        $(".portLink").on("mouseleave", function() {
            gsap.to($(this), {css: {fontSize: "0.65rem"},
                                duration: 0.25});

        });

        $(".NavText").on("mouseenter", function() {
            gsap.to($(this), {css: {fontSize: "0.75rem"},
                                duration: 0.25});
        });

        $(".NavText").on("mouseleave", function() {
            gsap.to($(this), {css: {fontSize: "0.65rem"},
                                duration: 0.25});

        });

        $(".proj").on("mouseenter", function() {
            gsap.to($(this), {css: {width: "62vw"},
                                duration: 0.25});
        });

        $(".proj").on("mouseleave", function() {
            gsap.to($(this), {css: {width: "60vw"},
                                duration: 0.25});

        });

//Mobile Menu
    $(document).ready(function() {
  
        $(".menu-link").click(function(event) {
          event.preventDefault();
          $(".menu-overlay").toggleClass("open");
          $(".menu").toggleClass("open");
      
        });

        $(".nav-links").click(function(event) {
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






