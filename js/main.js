// Text Slide
$(document).ready(function() {

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Prayoga Eka Ardiansyah", "Programmer", "Software engineer", "Designer", "Electronic engineer"],
      typeSpeed: 70,
      loop: true,
    });
  });


});

//Particle Js
particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":120,
    "density":{
      "enable":true,
      "value_area":1050
    }
  },
    "color":{
      "value":"#001eff"
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":0,
        "color":"#001aff"
      },
      "polygon":{
        "nb_sides":5
      },
      "image":{
        "src":"img/github.svg",
        "width":100,
        "height":100
      }
    },
    "opacity":{
      "value":0.5,
      "random":false,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":true,
          "speed":100,
          "size_min":0.1,
          "sync":true
      }
    },
      "line_linked":{
        "enable":true,
        "distance":180,
        "color":"#0069ff",
        "opacity":0.9,
        "width":1
    },
      "move":{
        "enable":true,
        "speed":10,
        "direction":"none",
        "random":false,
        "straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
      }
    }
      },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":true,
          "mode":"grab"
        },
        "onclick":{
          "enable":true,
          "mode":"push"},
          "resize":true
      },
      "modes":{
        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":1
          }
        },
        "bubble":{
          "distance":400,
          "size":0,
          "duration":2,
          "opacity":8,
          "speed":3
        },
        "repulse":{
          "distance":200,
          "duration":0.4
        },
        "push":{
          "particles_nb":4
        },
        "remove":{
          "particles_nb":2
        }
      }
    },
    "retina_detect":true
  }
);
