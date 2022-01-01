'use strict'
const home=document.querySelector('.home__container');
const nav=document.querySelector('#navbar');
const menu=document.querySelector('.navbar__menu');
const contact=document.querySelector('.home__contact');

const navtop=nav.getBoundingClientRect().height;
//바에 클래스 추가해서 고정되게하는것(기본을 고정으로 하고 기본색깔을 transparent로 통해 투명하게 그리고 내려오면 색깔을 넣어서 만든다)
const fixnav=()=>{
    if(window.scrollY>=nav.clientHeight)
        nav.classList.add('fix')
    else{
        nav.classList.remove('fix')
    }
    console.log(window.scrollY);
    
}
//클릭시 그곳으로 화면이동
const scrollmenu=(event)=>{
    const locate=event.target.dataset.link;
    const skill=document.querySelector(locate);
    if(locate)
        window.scrollTo( {top:skill.offsetTop-71, left:0, behavior: 'smooth',});
}
//home 투명도 스크롤 내릴때
const opa=()=>home.style.opacity=1-window.scrollY/(home.offsetHeight-71);











window.addEventListener('scroll',fixnav);
menu.addEventListener('click',scrollmenu);
contact.addEventListener('click',scrollmenu);
window.addEventListener('scroll',opa);
console.log()
