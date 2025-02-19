let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
                  menuIcon.classList.toggle(' bx-time');
                  navbar.classList.toggle('active');
                
};





let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
                        navlinks.forEach(link => {
                            link.classList.remove('active');
                            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                        });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.toggle(' bx-times');
    navbar.classList.remove('active');  
};