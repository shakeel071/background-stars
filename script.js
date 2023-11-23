for(let i=1;i<=500;i++){
    let stars=document.createElement('div');
    stars.classList.add('star');
    let size=Math.random()*15;
    stars.style.fontSize=10+size+'px';
    stars.style.left=Math.random()* +innerWidth+'px';
    stars.style.top=Math.random()* +innerHeight+'px';
    stars.style.filter=`hue-rotate(${i*30}deg)`;
    document.querySelector('.sec').appendChild(stars)
}
function animateStars(){
    let allstars=document.querySelectorAll('.star');
    let num=Math.floor(Math.random()*allstars.length);
    allstars[num].classList.toggle('animate');
}
setInterval(animateStars,50);

// for nasheed
let btn=document.querySelector('.sec');
let body=document.querySelector('body');
let sound=document.getElementById('audio');
btn.onclick=function(){
    body.classList.toggle('on');
    if(body.classList.contains('on')){
        sound.play();
    }else{
        sound.pause();
    }
}