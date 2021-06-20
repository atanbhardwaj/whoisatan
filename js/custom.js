/* ---- particles.js config ---- */

particlesJS("bg", {
    "particles": {
        "number": {
            "value": 780,
            "density": {
                "enable": true,
                "value_area": 780
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


const quote = document.getElementById("quote");

quote.onmouseover = () => {
    quote.style.color = "red";
}

quote.onmouseout = () => {
    quote.style.color = "white";
}

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 50) {
        // I am using 'display' instead of 'top':
        document.getElementById("nav-scroll").style.display = "none";
    } else {
        document.getElementById("nav-scroll").style.display = "initial";
    }
}

// For myinfodiv

const info = document.getElementById("infoaboutme");

info.onmouseover = () => {
    info.style.color = "brown";
}

info.onmouseout = () => {
    info.style.color = "white";
}
