const navbutton = document.querySelector('.navother')
let showSidebar = false;

navbutton.addEventListener('click', function(){
    showSidebar = !showSidebar
    sideBarShow();
})

function sideBarShow(){
    if(showSidebar){
        navbutton.classList.toggle('is_active');
        document.getElementById("mySideBar").style.width = "100px";
        document.getElementById("mySideBar").style.marginLeft = "-100px";
    }
    else{
        navbutton.classList.toggle('is_active');
        document.getElementById("mySideBar").style.width = "0px";
        document.getElementById("mySideBar").style.marginLeft = "0px";
    }
}