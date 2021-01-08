const menu = document.getElementById('nav-toggle');
const activeMenu = document.querySelector(".active");
const navList = document.getElementById("nav-list");
// Functions

const toggleMenu = ()=>{

    if( navList.style.display === "" || navList.style.display === "none" ){
        navList.style.display = "block";
        menu.className = "active";
    } else {
        navList.style.display = "none"
        menu.className = "";
    }
};

const hideMenu = ()=>{

    console.log(navList);
    if( navList.style.display === "block"){
        navList.style.display = "none";
        hamburgerMenu.className = "";
    }
};

// event Listeners

menu.onclick = toggleMenu;


