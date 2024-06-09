import { annotate } from "rough-notation";
const multilinesBlack = document.querySelectorAll('.highlight__multi-line_black');
multilinesBlack.forEach(highlight => {
    const annotation = annotate(highlight, { 
        type: 'highlight', 
        color: '#393E41', 
        multiline: true, 
        iterations: 1, 
        animationDuration: 2000});
    annotation.show();
});

const multilines = document.querySelectorAll('.highlight__multi-line');
multilines.forEach(highlight => {
    const annotation = annotate(highlight, { 
        type: 'highlight', 
        color: '#C73E1D', 
        multiline: true, 
        iterations: 1, 
        animationDuration: 2000});
    annotation.show();
});



const navs = document.querySelectorAll('nav');
const menuBtn = document.querySelector('.menu-icon');

navs.forEach(nav => {
    nav.addEventListener('click', () => {
        toggleNav();
    });
});
menuBtn.addEventListener('click', () => {
    toggleNav();
});

function toggleNav(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('remove-scroll');
};