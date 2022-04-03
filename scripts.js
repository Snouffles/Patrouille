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