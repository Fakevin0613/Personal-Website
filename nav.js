const navbutton = document.querySelector('.navother')

navbutton.addEventListener('click', function(){
    sideBarShow();
})

function sideBarShow(){
    if(document.getElementById("mySideBar-id").style.width != "100%"){
        navbutton.classList.toggle('is_active');
        document.getElementById("mySideBar-id").style.width = "100%";
    }
    else{
        navbutton.classList.toggle('is_active');
        document.getElementById("mySideBar-id").style.width = "0%";
    }
}