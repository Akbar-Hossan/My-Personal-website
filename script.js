var tablinks = document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

const sidemen = document.getElementById("side-menu");

function openmenu(){
    sidemen.style.right = "0px";
}
function closemenu(){
    sidemen.style.right= "-200px";
}