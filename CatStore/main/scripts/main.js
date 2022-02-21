function loadPage(){
let a = Math.floor(Math.random() * 20) +2;
document.getElementById("demo1").innerHTML = "Updated " +a+ " days ago";
let b = Math.floor(Math.random() * 20) +2;
document.getElementById("demo2").innerHTML = "Updated " +b+ " days ago";
let c = Math.floor(Math.random() * 20) +2;
document.getElementById("demo3").innerHTML = "Updated " +c+ " days ago";
}

const animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
  window.addEventListener('scroll', animScroll);
function animScroll(){
  for(let index = 0; index < animItems.length; index++){
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if(animItemHeight > window.innerHeight  ){
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }
    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
      animItem.classList.add('_active');
    } else {
        animItem.classList.remove('_active');
    }
  }
}

function offset(el){
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset  || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
}
animScroll();

function on(){
  mI = document.querySelector('.move-items');
  mI.classList.add('__active');
}
function off(){
  mI = document.querySelector('.move-items.__active');
  mI.classList.remove('__active');
}
document.addEventListener('keypress', play);
if(key=="m"){
  function play(){
    audio.setAtribute('loop', loop);
  }
}
