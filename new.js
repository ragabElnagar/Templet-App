let backgroundoption=true;
let backgrondinterval;
//make image change
 let landbag=document.querySelector(".landingbage");
let arrayimg=["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
function background() {
 if (backgroundoption===true) {
backgrondinterval  = setInterval(()=>{
    let roundomnum=Math.floor(Math.random()*arrayimg.length);
    landbag.style.backgroundImage='url("'+arrayimg[roundomnum]+'")';}
    ,4000);
}
 }
//end
//do slect bar
document.querySelector(".settingbox .fa").onclick= function() {
  this.classList.toggle("fa-spin");
  document.querySelector(".settingbox").classList.toggle("open");
};
//end
//make color active
let colorli=document.querySelectorAll(".colorlist li");
colorli.forEach(li => {
   li.addEventListener("click",(e) => {
    //make curent clor in main--color
 document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
 //put color in coloroption
 localStorage.setItem("coloroption", e.target.dataset.color);
 //e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
   // ele.classList.remove("active");
    //});
 //e.target.classList.add("active");
 handleactive(e);
});
});
//check local storge is empty or no
let localstroage=localStorage.getItem("coloroption");
if (localstroage!==null) {
 document.documentElement.style.setProperty("--main--color", localstroage);
    //remove active in current color    
  document.querySelectorAll(".colorlist li").forEach(ele=>{
    ele.classList.remove("active");
    //add active in current color    
    if (localstroage=== ele.dataset.color) {
       ele.classList.add("active");
    }
    });
}
//end
//local storage to background
let  backgroundlocalstorge=localStorage.getItem("backoption");
if (backgroundlocalstorge!==null) {
if (backgroundlocalstorge==="true") {
    backgroundoption=true;
}else{
     backgroundoption=false;

}
//end
//remove active in acttive imge
document.querySelectorAll(".rondomebackground span").forEach(element=>{
 element .classList.remove("active");
 });
//add active in back ground iamge

if (backgroundlocalstorge==="true") {
document.querySelector(".rondomebackground .yes").classList.add("active");
}else{
 document.querySelector(".rondomebackground .no").classList.add("active");

}

}
//end

//remove active from all background
let backgrounoption=document.querySelectorAll(".rondomebackground span");
backgrounoption.forEach(span => {
   span.addEventListener("click",(e) => {
 //e.target.parentElement.querySelectorAll(".active").forEach(ele=>{
   // ele.classList.remove("active");
    //});
 //end
 //add active clas in background
 //e.target.classList.add("active");
 handleactive(e);
 //end
 //check if (background click yes or no and do background change iff i lick yes and i when i click no stop change

 if (e.target.dataset.background==="yes") {
  backgroundoption=true;
  background();
  localStorage.setItem("backoption", true);
 }
 else{
    backgroundoption=false;
 clearInterval(backgrondinterval);
   localStorage.setItem("backoption", false);

 }
 
});
});
//end


background();



let ourskills=document.querySelector(".skills");
//make animation
window.onscroll=function(){
 //skills offset top
 let skillsoffsettop=ourskills.offsetTop;
 //skills outer heigth
 let skillsouterhieght=ourskills.offsetHeight;

 //windo height
 let windowheight=this.innerHeight;

 //window scroll top
 let windowscrolltop=this.pageYOffset;

 
 
 if (windowscrolltop>(skillsoffsettop + skillsouterhieght - windowheight)) {
   let allkills=document.querySelectorAll(".skillsbox .skillsprogres span");
   allkills.forEach(skill=>{
    skill.style.width=skill.dataset.progress;
    });
 }
};



let ourgallery=document.querySelectorAll(".gallary img");
ourgallery.forEach(img=>{
 img.addEventListener("click",(e)=>{
  let overlay=document.createElement("div");
  overlay.className="popoverlay";
  document.body.appendChild(overlay);
    let popupbox=document.createElement("div");
  popupbox.className="popupbox";
    if (img.alt!==null) {
    let heding=document.createElement("h3");
    let contains=document.createTextNode(img.alt);
    heding.appendChild(contains);
    popupbox.appendChild(heding);
  }
  let popupimg=document.createElement("img");
  popupimg.src=img.src;
  popupbox.appendChild(popupimg);
  document.body.appendChild(popupbox);
  let closebutton=document.createElement("span");
  let closecontaint=document.createTextNode("X");
  closebutton.appendChild(closecontaint);
  popupbox.appendChild(closebutton);
  closebutton.className="closebutton";
 
  });
 });
document.addEventListener("click",(e)=>{
 
 if (e.target.className=="closebutton") {
    e.target.parentNode.remove();
    document.querySelector(".popoverlay").remove();
 }
 
 });



let allbult=document.querySelectorAll(".navebullt .bullt");
let alllinke=document.querySelectorAll(".links a");

function scrolelement(elemnt) {
elemnt.forEach(ele=>{ 
 ele.addEventListener("click",(e)=>{
  e.preventDefault();
  //not worke forr kmodo
  document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior:'smooth'
});
  });
 
 });
}

scrolelement(allbult);
scrolelement(alllinke);

function handleactive(ev) {
     ev.target.parentElement.querySelectorAll(".active").forEach(ele=>{
    ele.classList.remove("active");
    });
 //end
 //add active clas in background
 ev.target.classList.add("active");
}

let bulltspan=document.querySelectorAll(".bulltoptions span");
let bulltcontainer=document.querySelector(".navebullt");
let bulltstorage=localStorage.getItem("storageoption");
if (bulltstorage !==null) {
 bulltspan.forEach(span=>{
  span.classList.remove("active");
  });
if (bulltstorage==="block") {
    bulltcontainer.style.display="block";
    document.querySelector(".bulltoptions .yes").classList.add("active");
}
else{
     bulltcontainer.style.display="none";
    document.querySelector(".bulltoptions .no").classList.add("active");
}
}
bulltspan.forEach(span => {
 span.addEventListener("click",(e)=>{
  if (span.dataset.display === "show") {
    bulltcontainer.style.display="block";
    localStorage.setItem("storageoption","block");
  }
  else{
       bulltcontainer.style.display="none";
    localStorage.setItem("storageoption","none");

  }
  handleactive(e);
 });
 });
document.querySelector(".buttonoption").onclick=function(){
 localStorage.removeItem("coloroption");
 localStorage.removeItem("backoption");
 localStorage.removeItem("storageoption");
 window.location.reload();
};



let togglebuttion=document.querySelector(".toggolemenu");
let togglelink=document.querySelector(".links");
togglebuttion.onclick=function(e){
 e.stopPropagation();
 this.classList.toggle("menuactive");
 togglelink.classList.toggle("open");

};
document.addEventListener("click",(e)=>{
if ((e.target!==togglebuttion)&&(e.target!==togglelink)) {
if (togglelink.classList.contains("open")) {
 togglebuttion.classList.toggle("menuactive");
 togglelink.classList.toggle("open");
 }    } });

togglelink.onclick=function(e){
 e.stopPropagation();
};