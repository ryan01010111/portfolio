"use strict";

// prevent auto-scroll on refresh
history.scrollRestoration = "manual"; // declarations

var overlay = document.querySelector('#overlay');
var demoContainer = document.querySelector('#demo-container');
var demoPreview = document.querySelector('#demo-preview');
var demoDevices = document.querySelector('#demo-devices');
var demoInfo = document.querySelector('#demo-info');
var planitInfo = document.querySelector('#planit-info');
var clInfo = document.querySelector('#cl-info');
var nochsInfo = document.querySelector('#nochs-info');
var repoLink = document.querySelector('#repo-link'); // fetch demo media

var configVid = function configVid(el, src) {
  el.src = src;
  el.setAttribute('loop', '');
  el.setAttribute('muted', '');
  el.setAttribute('playsinline', '');
};

var planitVid = document.createElement('video');
configVid(planitVid, './media/planit-demo.mp4');
var planitMobile = new Image();
planitMobile.src = './images/planit-mobile.png';
var clVid = document.createElement('video');
configVid(clVid, './media/cl-demo.mp4');
var clMobile = new Image();
clMobile.src = './images/cl-mobile.png';
var nochsVid = document.createElement('video');
configVid(nochsVid, './media/nochs-demo.mp4');
var nochsMobile = new Image();
nochsMobile.src = './images/nochs-mobile.png'; // enable/disable body scroll

var lockBody = function lockBody() {
  document.body.classList.add('no-scroll');
};

var unlockBody = function unlockBody() {
  document.body.classList.remove('no-scroll');
}; //toggle navbar


var toggleNav = function toggleNav() {
  document.querySelector('nav').classList.toggle('hide-nav');
  overlay.classList.toggle('scale-0');
}; // event listeners


document.querySelectorAll('.lang-btn-en').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.documentElement.lang = 'en';
  });
});
document.querySelectorAll('.lang-btn-ru').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.documentElement.lang = 'ru';
  });
});
document.querySelector('#lang-btns-start').addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    welcomeTL.play();
    orbitTL.play();
    heroTL.play();
    unlockBody();
    document.querySelector('#welcome-window').classList.add('click-thru');
  }
});
[document.querySelector('#nav-menu-btn'), overlay, document.querySelector('#nav-ul')].forEach(function (el) {
  el.addEventListener('click', function () {
    toggleNav();
  });
});
document.querySelectorAll('.project-item').forEach(function (el) {
  el.addEventListener('click', function (e) {
    var selected = e.currentTarget.dataset.item;
    var vid;
    var mobileImg;
    var info;

    switch (selected) {
      case 'cl':
        vid = clVid;
        mobileImg = clMobile;
        repoLink.href = 'https://github.com/ryan01010111/center-line';
        info = clInfo;
        break;

      case 'planit':
        vid = planitVid;
        mobileImg = planitMobile;
        repoLink.href = 'https://github.com/ryan01010111/planit';
        info = planitInfo;
        break;

      case 'nochs':
        vid = nochsVid;
        mobileImg = nochsMobile;
        repoLink.href = 'https://github.com/ryan01010111/nochs';
        info = nochsInfo;
        break;

      default:
        vid = null;
        mobileImg = null;
        repoLink.href = '';
    }

    if (vid && mobileImg) {
      demoPreview.appendChild(vid);
      demoDevices.appendChild(mobileImg);
      demoInfo.appendChild(info);
      demoContainer.classList.remove('scale-0');
      vid.play();
      lockBody();
    }
  });
});
demoContainer.addEventListener('click', function (e) {
  if (['demo-container', 'close-demo-btn'].includes(e.target.id)) {
    demoPreview.innerHTML = null;
    demoDevices.innerHTML = null;
    demoInfo.innerHTML = null;
    demoContainer.classList.add('scale-0');
    unlockBody();
  }
});
document.querySelector('#copyEmailBtn').addEventListener('click', function () {
  var el = document.createElement('textarea');
  el.value = 'ryanwilliamsfb@gmail.com';
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copied email address.');
});
document.querySelector('#cr-year').innerHTML = new Date().getFullYear(); // animations

gsap.registerPlugin(ScrollTrigger);
var welcomeTL = gsap.timeline({
  paused: true
});
welcomeTL.to('#greeting-container', {
  duration: 1,
  opacity: 0
}).to('#panel-1', {
  duration: 2,
  x: '-52vw'
}, 0).to('#panel-2', {
  duration: 2,
  y: '-52vh'
}, 0).to('#panel-3', {
  duration: 2,
  y: '52vh'
}, 0).to('#panel-4', {
  duration: 2,
  x: '52vw'
}, 0).to('#welcome-window', {
  duration: 0,
  opacity: 0,
  scale: 0
}, 2);

var forcePositionRecalc = function forcePositionRecalc() {
  document.querySelector('#scroll-indicator').classList.remove('temp-position');
};

var cueScrollFade = function cueScrollFade() {
  gsap.to('#learn-more-container', {
    scrollTrigger: {
      trigger: '#section2',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true
    },
    opacity: 0
  });
};

var heroTL = gsap.timeline({
  paused: true,
  delay: 0.75
});
heroTL.to('#top1', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  width: '100%'
}).to('#top1', {
  duration: 0.5,
  opacity: 0
}).fromTo('#hero-msg-1', {
  color: 'transparent'
}, {
  duration: 2,
  color: '#fff'
}, 0).to('#right1', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  height: '100%'
}, 0.4).to('#right1', {
  duration: 0.5,
  opacity: 0
}, 0.8).to('#bottom1', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  width: '100%'
}, 0.8).to('#bottom1', {
  duration: 0.5,
  opacity: 0
}, 1.2).fromTo('#hero-msg-2', {
  color: 'transparent'
}, {
  duration: 2,
  color: '#fff'
}, 1.2).to('#left2', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  height: '100%'
}, 1.2).to('#left2', {
  duration: 0.5,
  opacity: 0
}, 1.6).to('#bottom2', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  width: '100%'
}, 1.6).to('#bottom2', {
  duration: 0.5,
  opacity: 0
}, 2).fromTo('#hero-msg-3', {
  color: 'transparent'
}, {
  duration: 2,
  color: '#fff'
}, 2.8).to('#right3', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  height: '100%'
}, 2).to('#right3', {
  duration: 0.5,
  opacity: 0
}, 2.4).to('#bottom3', {
  duration: 0.4,
  opacity: 1,
  margin: 0,
  width: '100%'
}, 2.4).from('#learn-more-container', {
  duration: 1.5,
  opacity: 0
}, 4).call(forcePositionRecalc, [], 1).call(cueScrollFade, [], 5.5);
var orbitTL = gsap.timeline({
  repeat: -1,
  paused: true
});
orbitTL.fromTo('#satellite', {
  x: 0,
  y: 0,
  scale: 1,
  zIndex: 4
}, {
  duration: 1.25,
  x: 300,
  y: 120,
  scale: 0.7,
  zIndex: 4,
  ease: 'power1.out'
}).fromTo('#satellite', {
  x: 300,
  y: 120,
  scale: 0.7,
  zIndex: -1
}, {
  duration: 2,
  x: 0,
  y: 0,
  scale: 0.6,
  zIndex: -1,
  ease: 'sine.in'
}).fromTo('#satellite', {
  x: 0,
  y: 0,
  scale: 0.6,
  zIndex: -1
}, {
  duration: 2,
  x: -300,
  y: -120,
  scale: 0.7,
  zIndex: -1,
  ease: 'sine.out'
}).fromTo('#satellite', {
  x: -300,
  y: -120,
  scale: 0.7,
  zIndex: 4
}, {
  duration: 1.25,
  x: 0,
  y: 0,
  scale: 1,
  zIndex: 4,
  ease: 'power1.in'
});
var logoTrigger = {
  trigger: '#section2',
  start: 'top center',
  end: '80% center',
  scrub: true
};
var logoTrigger2 = {
  trigger: '#section2',
  start: 'top 70%',
  end: '80% center',
  scrub: true
};
gsap.to('#animate-mdb', {
  scrollTrigger: logoTrigger,
  opacity: 0.9,
  width: 52,
  top: 1100,
  left: 'calc(50% - 26px)',
  rotation: 480,
  ease: 'none'
});
gsap.to('#animate-node', {
  scrollTrigger: logoTrigger,
  opacity: 0.9,
  width: 80,
  top: 1100,
  left: 'calc(50% - 40px)',
  rotation: 480,
  ease: 'none'
});
gsap.to('#animate-react', {
  scrollTrigger: logoTrigger,
  opacity: 0.9,
  width: 90,
  top: 1100,
  left: 'calc(50% - 45px)',
  rotation: 480,
  ease: 'none'
});
gsap.to('#animate-redux', {
  scrollTrigger: logoTrigger2,
  opacity: 0.9,
  width: 90,
  top: 1100,
  left: 'calc(50% - 45px)',
  rotation: 320,
  ease: 'none'
});
gsap.to('#animate-sass', {
  scrollTrigger: logoTrigger2,
  opacity: 0.9,
  width: 90,
  top: 1100,
  left: 'calc(50% - 45px)',
  rotation: 200,
  ease: 'none'
});
var skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: '#section3',
    start: 'top 75%',
    end: 'bottom center',
    toggleActions: 'restart pause resume none'
  }
});
skillsTL.from('#ts-logo', {
  duration: 2,
  opacity: 0,
  x: 250,
  y: -300
}).from('#psql-logo', {
  duration: 2,
  opacity: 0,
  x: -50,
  y: -300
}, 0.3).from('#mdb-logo', {
  duration: 2,
  opacity: 0,
  x: -150,
  y: -300
}, 0.6).from('#redux-logo', {
  duration: 2,
  opacity: 0,
  x: 50,
  y: -420
}, 0.9).from('#skills-header', {
  duration: 1,
  opacity: 0,
  x: -250
}, 1);
var portfolioTL = gsap.timeline({
  scrollTrigger: {
    trigger: '#section4',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play pause resume none'
  }
});
portfolioTL.from('.project-item', {
  duration: 2,
  stagger: 0.2,
  opacity: 0,
  y: -400,
  x: 200,
  ease: 'bounce'
});
