/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

// SHOW (Création d'une classe 'show' lors du clique sur le logo menu et qui apparait grâce au propriétés css)
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

// HIDDEN (Suppression de la classe 'show' lors du clique sur la croix)
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});

/*===== ACTIVE AND REMOVE MENU =====*/ 
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active');
        }
        else{
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active');
        }
    });
}

/* DARK THEME */
const switchThemeBtn = document.querySelector('.changeThemeButton');
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', ()=>{
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--first-color-lighten', '#29282b');
        document.documentElement.style.setProperty('--first-color-darken', '#FFFAFA');
        document.documentElement.style.setProperty('--text-color', '#FFFAFA');
        toggleTheme++;
    } else{
        document.documentElement.style.setProperty('--first-color-lighten', '#FFFAFA');
        document.documentElement.style.setProperty('--first-color-darken', '#29282b');
        document.documentElement.style.setProperty('--text-color', '#54423D');
        toggleTheme--;   
    }
})