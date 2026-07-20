const links = document.querySelectorAll("nav a");

links.forEach(link=>{
link.addEventListener("click",function(){
links.forEach(item=>item.style.fontWeight="normal");
this.style.fontWeight="bold";
});
});

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
sections.forEach(section=>{
const top=window.scrollY;
const offset=section.offsetTop-250;
if(top>offset){
section.style.opacity="1";
section.style.transform="translateY(0px)";
}
});
});