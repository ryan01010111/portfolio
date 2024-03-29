// prevent auto-scroll on refresh
history.scrollRestoration = "manual";

// declarations
const overlay = document.querySelector('#overlay');
const demoContainer = document.querySelector('#demo-container');
const demoPreview = document.querySelector('#demo-preview');
const demoDevices = document.querySelector('#demo-devices');
const demoInfo = document.querySelector('#demo-info');
const planitInfo = document.querySelector('#planit-info');
const clInfo = document.querySelector('#cl-info');
const nochsInfo = document.querySelector('#nochs-info');
const repoLink = document.querySelector('#repo-link');

// fetch demo media
const configVid = (el, src) => {
    el.src = src;
    el.setAttribute('loop', '');
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
}
const planitVid = document.createElement('video');
configVid(planitVid, './media/planit-demo.mp4');
const planitMobile = new Image();
planitMobile.src = './images/planit-mobile.png';
const clVid = document.createElement('video');
configVid(clVid, './media/cl-demo.mp4');
const clMobile = new Image();
clMobile.src = './images/cl-mobile.png';
const nochsVid = document.createElement('video');
configVid(nochsVid, './media/nochs-demo.mp4');
const nochsMobile = new Image();
nochsMobile.src = './images/nochs-mobile.png';

// enable/disable body scroll
const lockBody = () => {
    document.body.classList.add('no-scroll');
};
const unlockBody = () => {
    document.body.classList.remove('no-scroll');
};

//toggle navbar
const toggleNav = () => {
    document.querySelector('nav').classList.toggle('hide-nav');
    overlay.classList.toggle('scale-0');
}

// event listeners
document.querySelectorAll('.lang-btn-en').forEach(btn => {
    btn.addEventListener('click', () => {
        document.documentElement.lang = 'en';
    });
});

document.querySelectorAll('.lang-btn-ru').forEach(btn => {
    btn.addEventListener('click', () => {
        document.documentElement.lang = 'ru';
    });
});

document.querySelector('#lang-btns-start').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        welcomeTL.play();
        orbitTL.play();
        heroTL.play();
        unlockBody();
        document.querySelector('#welcome-window').classList.add('click-thru');
    }
});

[document.querySelector('#nav-menu-btn'), overlay, document.querySelector('#nav-ul')].forEach(el => {
    el.addEventListener('click', () => {
        toggleNav();
    });
});

const toggleTRS = lock => {
    document.querySelector('#trs-demo').classList.toggle('scale-0');
    if (lock) {
        lockBody();
    } else {
        unlockBody();
    }
}
document.querySelector('#trs-btn').addEventListener('click', toggleTRS);
document.querySelector('#trs-block').addEventListener('click', () => toggleTRS(true));
document.querySelector('#trs-close').addEventListener('click', () => toggleTRS(false));

document.querySelectorAll('.project-item').forEach(el => {
    el.addEventListener('click', e => {
        let selected = e.currentTarget.dataset.item;
        let vid;
        let mobileImg;
        let info;
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

        // exlude previews for now
        vid = document.createElement('span');
        vid.innerHTML = 'Previews are disabled while I work on updating them.';
        vid.style.color = '#fff152';

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

demoContainer.addEventListener('click', e => {
    if (['demo-container', 'close-demo-btn'].includes(e.target.id)) {
        demoPreview.innerHTML = null;
        demoDevices.innerHTML = null;
        demoInfo.innerHTML = null;
        demoContainer.classList.add('scale-0');
        unlockBody();
    }
});

document.querySelector('#copyEmailBtn').addEventListener('click', () => {
    const el = document.createElement('textarea');
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

document.querySelector('#cr-year').innerHTML = (new Date()).getFullYear();

// animations
gsap.registerPlugin(ScrollTrigger);

const welcomeTL = gsap.timeline({ paused: true });
welcomeTL
    .to('#greeting-container', { duration: 1, opacity: 0 })
    .to('#panel-1', { duration: 2, x: '-52vw' }, 0)
    .to('#panel-2', { duration: 2, y: '-52vh' }, 0)
    .to('#panel-3', { duration: 2, y: '52vh' }, 0)
    .to('#panel-4', { duration: 2, x: '52vw' }, 0)
    .to('#welcome-window', { duration: 0, opacity: 0, scale: 0 }, 2);

const forcePositionRecalc = () => {
    document.querySelector('#scroll-indicator').classList.remove('temp-position');
}

const cueScrollFade = () => {
    gsap.to('#learn-more-container', {
        scrollTrigger: {
            trigger: '#section2',
            start: 'top 80%',
            end: 'top 40%',
            scrub: true
        },
        opacity: 0
    });
}

const heroTL = gsap.timeline({ paused: true, delay: 0.75 });
heroTL
    .to('#top1', { duration: 0.4, opacity: 1, margin: 0, width: '100%' })
    .to('#top1', { duration: 0.5, opacity: 0 })
    .fromTo('#hero-msg-1',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 0)
    .to('#right1', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 0.4)
    .to('#right1', { duration: 0.5, opacity: 0 }, 0.8)
    .to('#bottom1', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 0.8)
    .to('#bottom1', { duration: 0.5, opacity: 0 }, 1.2)
    .fromTo('#hero-msg-2',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 1.2)
    .to('#left2', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 1.2)
    .to('#left2', { duration: 0.5, opacity: 0 }, 1.6)
    .to('#bottom2', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 1.6)
    .to('#bottom2', { duration: 0.5, opacity: 0 }, 2)
    .fromTo('#hero-msg-3',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 2.8)
    .to('#right3', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 2)
    .to('#right3', { duration: 0.5, opacity: 0 }, 2.4)
    .to('#bottom3', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 2.4)
    .from('#learn-more-container', { duration: 1.5, opacity: 0 }, 4)
    .call(forcePositionRecalc, [], 1)
    .call(cueScrollFade, [], 5.5)

const orbitTL = gsap.timeline({ repeat: -1, paused: true });
orbitTL
    .fromTo('#satellite',
        { x: 0, y: 0, scale: 1, zIndex: 4 },
        { duration: 1.25, x: 300, y: 120, scale: 0.7, zIndex: 4, ease: 'power1.out' })
    .fromTo('#satellite',
        { x: 300, y: 120, scale: 0.7, zIndex: -1 },
        { duration: 2, x: 0, y: 0, scale: 0.6, zIndex: -1, ease: 'sine.in' })
    .fromTo('#satellite',
        { x: 0, y: 0, scale: 0.6, zIndex: -1 },
        { duration: 2, x: -300, y: -120, scale: 0.7, zIndex: -1, ease: 'sine.out' })
    .fromTo('#satellite',
        { x: -300, y: -120, scale: 0.7, zIndex: 4 },
        { duration: 1.25, x: 0, y: 0, scale: 1, zIndex: 4, ease: 'power1.in' })

const logoTrigger = {
    trigger: '#section2',
    start: 'top center',
    end: '80% center',
    scrub: true
};

const logoTrigger2 = {
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

const skillsTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section3',
        start: 'top 75%',
        end: 'bottom center',
        toggleActions: 'restart pause resume none'
    }
});

skillsTL
    .from('#ts-logo', { duration: 2, opacity: 0, x: 250, y: -300 })
    .from('#psql-logo', { duration: 2, opacity: 0, x: -50, y: -300 }, 0.3)
    .from('#mdb-logo', { duration: 2, opacity: 0, x: -150, y: -300 }, 0.6)
    .from('#redux-logo', { duration: 2, opacity: 0, x: 50, y: -420 }, 0.9)
    .from('#skills-header', { duration: 1, opacity: 0, x: -250 }, 1)

const portfolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section4',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play pause resume none'
    }
});

portfolioTL.from('.project-item, #trs-btn, #trs-block', {
    duration: 2,
    stagger: 0.2,
    opacity: 0,
    y: -400,
    x: 200,
    ease: 'bounce'
});
