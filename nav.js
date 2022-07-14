//enable clicking behavior of sidebar
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

//active scroll button color

const sectionbuttons = document.querySelectorAll(".navclick")
const sections = document.querySelectorAll("section")

window.addEventListener('scroll', () => {
    let current = 'kevin-main';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.scrollY >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    sectionbuttons.forEach(btn => {
        btn.classList.remove('is_active');
        if(btn.classList.contains(current)){
            btn.classList.add('is_active');
        }
    })

    
})


