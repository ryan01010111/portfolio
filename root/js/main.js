// declarations
const demoContainer = document.querySelector('#demo-container');
const demoPreview = document.querySelector('#demo-preview');
const demoDevices = document.querySelector('#demo-devices');

// fetch demo media
const planitGIF = new Image();
const planitMobile = new Image();
planitGIF.src = './images/planit-demo.gif';
planitMobile.src = './images/Screenshot11.png';
const clGIF = new Image();
const clMobile = new Image();
clGIF.src = './images/cl-demo.gif';
clMobile.src = './images/Screenshot7.png';
const nochsGIF = new Image();
const nochsMobile = new Image();
nochsGIF.src = './images/nochs-demo.gif';
nochsMobile.src = './images/Screenshot8.png';

// event listeners
document.querySelector('#nav-menu-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hide-nav');
});

document.querySelectorAll('.project-item').forEach(el => {
    el.addEventListener('click', e => {
        let gif;
        let mobileImg;
        switch (e.currentTarget.dataset.item) {
            case 'cl':
                gif = clGIF;
                mobileImg = clMobile;
                break;
            case 'planit':
                gif = planitGIF;
                mobileImg = planitMobile;
                break;
            case 'nochs':
                gif = nochsGIF;
                mobileImg = nochsMobile;
                break;
            default:
                gif = null;
                mobileImg = null;
        }
        demoPreview.appendChild(gif);
        demoDevices.appendChild(mobileImg);
        demoContainer.classList.remove('hidden');
    }
)});

document.querySelector('#close-demo-btn').addEventListener('click', () => {
    demoPreview.innerHTML = null;
    demoDevices.innerHTML = null;
    demoContainer.classList.add('hidden');
});

// animations
gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();

timeline
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
    .fromTo('#welcome-msg-4',
        { opacity: 0, y: -100 },
        { duration: 1, opacity: 1, y: 0 }, 4)

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

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#section3',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart pause resume none'
    }
});

timeline2
    .from('#js-logo', { duration: 2, opacity: 0, x: 250, y: -300 })
    .from('#react-logo', { duration: 2, opacity: 0, x: -50, y: -300 }, 0.3)
    .from('#mdb-logo', { duration: 2, opacity: 0, x: -150, y: -300 }, 0.6)
    .from('#sass-logo', { duration: 2, opacity: 0, x: 50, y: -420 }, 0.9)
    .from('#skills-header', { duration: 1, opacity: 0, x: -250 }, 1)

const timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#section4',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play pause resume none'
    }
});

timeline3
    .from('.project-item', { duration: 2, stagger: 0.2, opacity: 0, y: -400, x: 200, ease: 'bounce' })
