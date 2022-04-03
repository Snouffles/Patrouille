let iconMenu = document.querySelector("header .icon--menu");
let iconMenuOpen = false;


iconMenu.addEventListener("click", e => {

    e.stopPropagation();
    if(iconMenuOpen === false){
        document.querySelector("header nav").style.display = "flex";
        iconMenuOpen = true;
    }else{
        document.querySelector("header nav").style.display = "none";
        iconMenuOpen = false;
    }
})

document.body.addEventListener("click", e => {
    //close the menu if user click somewhere else.
    document.querySelector("header nav").style.display = "none";
    iconMenuOpen = false;
})

document.querySelector("header nav").addEventListener("click", e=>{
    e.stopPropagation();
    
})

let carrouselRight = document.querySelectorAll(".icon--arrow__right");
let carrouselLeft = document.querySelectorAll(".icon--arrow__left");



carrouselRight.forEach(e => {
    e.addEventListener("click", e=>{
        for(let i = 1; i <= 4; i++){
            if(window.getComputedStyle(document.querySelector(`.slide${i}`)).display === "flex"){
                if(i === 4){
                    document.querySelector(`.slide${i}`).style.display = "none";
                    i = 1;
                    document.querySelector(`.slide${i}`).style.display = "flex";
                    break;
                }
                document.querySelector(`.slide${i}`).style.display = "none";
                document.querySelector(`.slide${i+1}`).style.display = "flex";
                break;
            }
        }
    })
})

carrouselLeft.forEach(e => {
    e.addEventListener("click", e=>{
        for(let i = 1; i <= 4; i++){
            if(window.getComputedStyle(document.querySelector(`.slide${i}`)).display === "flex"){
                if(i === 1){
                    document.querySelector(`.slide${i}`).style.display = "none";
                    i = 4;
                    document.querySelector(`.slide${i}`).style.display = "flex";
                    break;
                }
                document.querySelector(`.slide${i}`).style.display = "none";
                document.querySelector(`.slide${i-1}`).style.display = "flex";
                break;
            }
        }
    })
})


