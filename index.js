// (1)- selecting the h1. h2, button
const h1 = document.querySelector('main h1');
const h2 = document.querySelector('main h2');
const btn = document.querySelector('main button');

// (2)- selecting all the div inside section
const boxes = document.querySelectorAll('section div');

// (3)- adding event listener
btn.addEventListener('mouseover', ()=> {
    // (4)- adding all the active classes
    h1.classList.add('heading-active');
    h2.classList.add('heading-active');
    btn.classList.add('btn-active');

    // (5)- loop over divs
    boxes.forEach((j) => {
        j.style.cssText = `transform: scale(0);`;
        j.classList.add('scale-up');
        j.classList.remove('scale-down');
    }) 
})

// (6)- reverse the mouse out
btn.addEventListener('mouseout', () => {
    h1.classList.remove('heading-active');
    h2.classList.remove('heading-active');
    btn.classList.remove('btn-active');
    
    boxes.forEach((j) => {
        j.style.cssText = `transform: scale(1);`;
        j.classList.add('scale-down');
        j.classList.remove('scale-up');
    })
})