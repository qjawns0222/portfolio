'use strict'
const home=document.querySelector('.home__container');
const nav=document.querySelector('#navbar');
const menu=document.querySelector('.navbar__menu');
const contact=document.querySelector('.home__contact');
const arrow=document.querySelector(".up__arrow");
const work=document.querySelectorAll(".project");
const workbtn=document.querySelector(".work__catergories");
const section=document.querySelectorAll("section");
const navtop=nav.getBoundingClientRect().height;
//바에 클래스 추가해서 고정되게하는것(기본을 고정으로 하고 기본색깔을 transparent로 통해 투명하게 그리고 내려오면 색깔을 넣어서 만든다)
const fixnav=()=>{
    if(window.scrollY>=nav.offsetHeight)
        nav.classList.add('fix')
    else{
        nav.classList.remove('fix')
    }
    //console.log(window.scrollY);
    
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

// 화살표 클릭 가능 불가능 보이는거 안보이는거
const arrvis=()=>{   
    if(window.scrollY>=nav.clientHeight)
    {
        arrow.style.opacity=1;
        arrow.style.pointerEvents = "auto";
    
    }
    else
    {

        arrow.style.opacity=0;
        arrow.style.pointerEvents = "none";
        
    }}

// 제위로 당기는거
const uptotop=()=>window.scrollTo(0,0);
//target 이름으로 프로젝트 숨기고 보이게 하는것 그리고 내려갔다 올라오는 애니매이션+ 다사라졌다가 다시 올라옴
const proofilter=(event)=>{
    
    const filter=event.target.innerText.split(' ')[0];
    if(event.target.classList.contains('active'))
        return;  
    setTimeout(()=>
    {
        setTimeout(()=>
            {        
                work.forEach((work)=>
                {
                    if(filter==='All'|| filter===work.attributes.target.value)
                    {
                        work.style.transition="all  1s ease ";
                        work.style.opacity=1;
                        work.style.transform= "translateY(0px)";
                    }           
                })
                
            },500)
        work.forEach((work)=>
            {
                if(filter==='All'|| filter===work.attributes.target.value)
                {
                    work.style.display="flex";
                }     
            })
    },501)
    setTimeout(()=>{work.forEach((work)=>  work.style.display="none")},500)
    work.forEach((work)=>
    {
        work.style.transition="all  1s ease";
        work.style.opacity=0;
        work.style.transform="translateY(100px)";
    })
} 

//프로젝트 버튼 갯수 수정
const probtncoutn=()=>{
    var countA=0;
    var countH=0;
    var countC=0;
    var countJ=0;
    
    work.forEach((work)=> 
    {
        if(work.attributes.target.value)
            countA++;
        if('HTML'===work.attributes.target.value)
            countH++;           
        else if('CSS'===work.attributes.target.value)
            countC++;  
        else if('JS'===work.attributes.target.value)
            countJ++;   
    })
    workbtn.children[1].children[0].innerText=countH;
    workbtn.children[2].children[0].innerText=countC;
    workbtn.children[3].children[0].innerText=countJ;
    workbtn.children[0].children[0].innerText=countA;

};
//project active
const worbtnactive=(event)=>{
    const child=[...workbtn.children];
    child.forEach(btn=>
            {
                btn.classList.remove('active')
            }
        )
    event.target.classList.add('active')  
}
//nav menu active
const navbtnactive=(event)=>
{
    const child=[...menu.children];
    child.forEach(btn=>btn.classList.remove('active'))
    event.target.classList.add('active')   
}
//scroll nav menu active //a<b<c는 무조건 true가 나온다
const scrnavactive=()=>{
    const child=[...menu.children];
    
    child.forEach(btn=>{btn.classList.remove('active')})
    for(let i=0;i<section.length;i++)

    if(i===0)
    {
        if( section[i].offsetHeight/2 >= window.scrollY)
            child[i].classList.add("active"); 
    }
    else
    {        
        if(section[i].offsetTop-(section[i-1].offsetHeight/2)<= window.scrollY && window.scrollY<= section[i].offsetTop+(section[i].offsetHeight/2))   
            child[i].classList.add("active");      
    }  
}
window.addEventListener('scroll',fixnav);
menu.addEventListener('click',scrollmenu);
contact.addEventListener('click',scrollmenu);
window.addEventListener('scroll',opa);
window.addEventListener('scroll',arrvis);
arrow.addEventListener('click',uptotop);
workbtn.addEventListener('click',proofilter);
probtncoutn();
workbtn.addEventListener('click',worbtnactive);
menu.addEventListener('click',navbtnactive);
window.addEventListener('scroll',scrnavactive);
console.log(5<10<9)