// declarations
const demoContainer = document.querySelector('#demo-container');
const demoPreview = document.querySelector('#demo-preview');
const demoDevices = document.querySelector('#demo-devices');
const repoLink = document.querySelector('#repo-link');

// fetch demo media
const planitGIF = new Image();
const planitMobile = new Image();
planitGIF.src = './images/planit-demo.gif';
planitMobile.src = './images/planit-mobile.png';
const clGIF = new Image();
const clMobile = new Image();
clGIF.src = './images/cl-demo.gif';
clMobile.src = './images/cl-mobile.png';
const nochsGIF = new Image();
const nochsMobile = new Image();
nochsGIF.src = './images/nochs-demo.gif';
nochsMobile.src = './images/nochs-mobile.png';

// event listeners
document.querySelector('#nav-menu-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hide-nav');
});

document.querySelectorAll('.project-item').forEach(el => {
    el.addEventListener('click', e => {
        let selected = e.currentTarget.dataset.item;
        let gif;
        let mobileImg;
        switch (selected) {
            case 'cl':
                gif = clGIF;
                mobileImg = clMobile;
                repoLink.href = 'https://github.com/ryan01010111/center-line';
                break;
            case 'planit':
                gif = planitGIF;
                mobileImg = planitMobile;
                repoLink.href = 'https://github.com/ryan01010111/planit';
                break;
            case 'nochs':
                gif = nochsGIF;
                mobileImg = nochsMobile;
                repoLink.href = 'https://github.com/ryan01010111/nochs';
                break;
            default:
                gif = null;
                mobileImg = null;
                repoLink.href = '';
        }

        if (gif && mobileImg) {
            demoPreview.appendChild(gif);
            demoDevices.appendChild(mobileImg);
            demoContainer.classList.remove('hidden');
            document.body.style.overflowY = 'hidden';
        }
    }
)});

document.querySelector('#close-demo-btn').addEventListener('click', () => {
    demoPreview.innerHTML = null;
    demoDevices.innerHTML = null;
    demoContainer.classList.add('hidden');
    document.body.style.overflowY = 'scroll';
});

document.querySelector('#copyEmailBtn').addEventListener('click', () => {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText('ryanwilliamsfb@gmail.com').then(function() {
                /* clipboard successfully set */
                alert('Copied email address.');
            }, function() {
                /* clipboard write failed */
                alert('Sorry! Copying to your clipboard was unsuccessful.');
            });
        }
    });
});

// animations
gsap.registerPlugin(ScrollTrigger);

const heroTL = gsap.timeline();
heroTL
    .to('#top1', { duration: 0.4, opacity: 1, margin: 0, width: '100%' })
    .to('#top1', { duration: 0.5, opacity: 0 })
    .fromTo('#welcome-msg-1',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 0)
    .to('#right1', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 0.4)
    .to('#right1', { duration: 0.5, opacity: 0 }, 0.8)
    .to('#bottom1', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 0.8)
    .to('#bottom1', { duration: 0.5, opacity: 0 }, 1.2)
    .fromTo('#welcome-msg-2',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 1.2)
    .to('#left2', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 1.2)
    .to('#left2', { duration: 0.5, opacity: 0 }, 1.6)
    .to('#bottom2', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 1.6)
    .to('#bottom2', { duration: 0.5, opacity: 0 }, 2)
    .fromTo('#welcome-msg-3',
        { color: 'transparent' },
        { duration: 2, color: '#fff' }, 2.8)
    .to('#right3', { duration: 0.4, opacity: 1, margin: 0, height: '100%' }, 2)
    .to('#right3', { duration: 0.5, opacity: 0 }, 2.4)
    .to('#bottom3', { duration: 0.4, opacity: 1, margin: 0, width: '100%' }, 2.4)
    .to('#learn-more, #arrow', { duration: 1.5, opacity: 1 }, 4)

const orbitTL = gsap.timeline({ repeat: -1 });
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

const logoTrigger =  {
    trigger: '#section2',
    start: 'top center',
    end: '80% center',
    scrub: true
};

const logoTrigger2 =  {
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

gsap.to('#animate-python', {
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
    .from('#js-logo', { duration: 2, opacity: 0, x: 250, y: -300 })
    .from('#react-logo', { duration: 2, opacity: 0, x: -50, y: -300 }, 0.3)
    .from('#mdb-logo', { duration: 2, opacity: 0, x: -150, y: -300 }, 0.6)
    .from('#sass-logo', { duration: 2, opacity: 0, x: 50, y: -420 }, 0.9)
    .from('#skills-header', { duration: 1, opacity: 0, x: -250 }, 1)

const portfolioTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#section4',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play pause resume none'
    }
});

portfolioTL
    .from('.project-item', { duration: 2, stagger: 0.2, opacity: 0, y: -400, x: 200, ease: 'bounce' });
