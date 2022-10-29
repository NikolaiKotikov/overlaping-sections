import './style.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: '.scroll',
      start: 'top top',
      end: '70% top',
      scrub: true,
      // markers: true,
    },
  })
  .to('.section--1', { y: '-100%' })
  .to('.section--1 .container', { y: '100%' }, '-=');
