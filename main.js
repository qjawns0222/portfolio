'use strict'
//바에 클래스 추가해서 고정되게하는것(기본을 고정으로 하고 기본색깔을 transparent로 통해 투명하게 그리고 내려오면 색깔을 넣어서 만든다)
const nav=document.querySelector('#navbar');
const navtop=nav.getBoundingClientRect().height;
const fixnav=()=>{
    if(window.scrollY>=nav.clientHeight)
        nav.classList.add('fix')
    else{
        nav.classList.remove('fix')
    }
    console.log(window.scrollY);
    console.log(navtop);
}









window.addEventListener('scroll',fixnav);