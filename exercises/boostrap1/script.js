const btn = document.querySelector('.btn');

const showAnimation = (e) => {
    // circle.classList.toggle('circle');
    
    const top = e.clientY;
    const left = e.clientX

    const offTop = e.target.offsetTop;
    const offLeft = e.target.offsetLeft;

    const circleTopPos = top - offTop;
    const circleLeftPos = left - offLeft;


    const circle = document.createElement('span');
    // circle.append(btn);
    circle.style.top = circleTopPos + 'px';
    circle.style.left = circleLeftPos + 'px';
    
    circle.classList.add('circle');
    
    e.target.append(circle)

    setTimeout(() => {
        circle.remove();
    }, 300)
}

btn.addEventListener('click',showAnimation)