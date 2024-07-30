
$('.nav__toggle').on('click', function() {
  $('.nav, .mobile-mask').toggleClass('show');
});

$('.mobile-mask').on('click', function() {
  $('.nav, .mobile-mask').removeClass('show');
});

function navClick (itemId) {
  var elementsSelected = document?.getElementsByClassName('selected');
  while (elementsSelected?.length > 0) {
    elementsSelected?.[0]?.classList?.remove('selected');
  }
  var elementSelectedByID = document?.getElementById(itemId);
  elementSelectedByID?.classList?.add('selected');

  $('.nav, .mobile-mask').removeClass('show');
}

document.addEventListener('DOMContentLoaded', async function() {
  if (window.location.hash) {
  var sectionId = window?.location?.hash?.substring(1);
  if(!sectionId) {
    return;
  }

  var elements = document?.getElementsByClassName('selected');
  while (elements?.length > 0) {
    elements?.[0]?.classList?.remove('selected');
  }

  const navDetails = {
    'intro': 'homeOption',
    'aboutDetails': 'aboutMeOption',
    'mentoring': 'mentoringOption',
    'writing': 'writingOption',
    'speaking': 'speakingOption',
    'startups': 'startupsOption',
    'contact': 'contactMeOption',
   }
   var element = document?.getElementById(navDetails[sectionId]);
   element?.classList?.add('selected');

   var linkElement = document.getElementById(navDetails[sectionId]+'A');
   if (linkElement) {
    linkElement.click();
   }
  }else {
    var element = document?.getElementById('homeOption');
    element?.classList?.add('selected');
  }
});



function initializeParticle (color) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area":1000
        }
      },
      "color": {
        "value": [color]
      },
      
      "shape": {
        "type": "circle",
        "stroke": {
          "width": .3,
          "color": "#999999"
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
        "value": 0.6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.6,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.6,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": color,
        "opacity": 0.6,
        "width": 1
      },
    },
    "retina_detect": true
  });
}

initializeParticle("#999999");

function switchTheme (themeType) {
  let elementsDark = document?.getElementById('darkSwitch');
  let elementsLight = document?.getElementById('lightSwitch');
  let elementMainDiv = document?.getElementById('mainDiv');

  // Destroy existing instance if it exists
  if (window.pJSDom && window.pJSDom.length > 0 && window.pJSDom[0].pJS) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }

  if(themeType=='dark'){
    elementMainDiv?.classList?.remove('light');
    elementsDark?.classList?.remove('none');
    elementsLight?.classList?.add('none');
    document.getElementById('particles-js').addEventListener('click', function() {
      var randomColor = '#' + '10101a';
      document.body.style.backgroundColor = randomColor;
    });
  }else{
    elementMainDiv?.classList?.add('light');
    elementsDark?.classList?.add('none');
    elementsLight?.classList?.remove('none');
    document.getElementById('particles-js').addEventListener('click', function() {
      var randomColor = '#' + 'fff';
      document.body.style.backgroundColor = randomColor;
    });
  }
}