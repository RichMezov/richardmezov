
//Menu control
let navMenu = document.querySelector(".nav-menu");
let IsMenuOpen = false;

let openMenu = document.querySelector(".menu").addEventListener("click", () => {
    if(IsMenuOpen == false) {
        navMenu.style.display = 'block';
        IsMenuOpen = true;
    }
    else if(IsMenuOpen == true) {
        navMenu.style.display = 'none';
        IsMenuOpen = false;
    }
})

//scroll animations
let sections = document.querySelectorAll('section');
let floatnav1 = document.querySelector('.floatItem1');
let floatnav2 = document.querySelector('.floatItem2');
let floatnav3 = document.querySelector('.floatItem3');
let floatnav4 = document.querySelector('.floatItem4');
let floatnav5 = document.querySelector('.floatItem5');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');

            if(top > 0 && top<1600 ) {
                floatnav1.classList.add('show-animate');
            }
            else
            floatnav1.classList.remove('show-animate');
            
            if(top > 1401 && top<2400 ) {
                floatnav2.classList.add('show-animate');
            }
            else
            floatnav2.classList.remove('show-animate');

            if(top>2401 && top < 3400) {
                floatnav3.classList.add('show-animate');
            }
            else
            floatnav3.classList.remove('show-animate');

            if(top>3401 && top < 4300) {
                floatnav4.classList.add('show-animate');
            }
            else
            floatnav4.classList.remove('show-animate');

            if(top>4300) {
                floatnav5.classList.add('show-animate');
            }
            else
            floatnav5.classList.remove('show-animate');
            
           
        }

        else {
            sec.classList.remove('show-animate');
        }
    })
};







//const slider = document.getElementsByClassName("slider");


function setColor() {
    const btn1 = document.querySelector(".btt1");
    btn1.style.paddingRight = "500px";
    btn1.style.backgroundColor = "aliceblue";
};

//New fucntion for projects

const disWebDev = document.querySelector(".disWebdev");
const disGamedev = document.querySelector(".disGamedev");
const disGraphic = document.querySelector(".disGraphic");
const disDisplay = document.querySelector('.pPhotoDis');

let backMenu = document.querySelector('.backMenu').addEventListener('click',()=> {

});



function setWebDev() {
    
    disWebDev.style.display = "block";
    disGamedev.style.display = "none";
    disGraphic.style.display = "none";
    disDisplay.style.display = "none";

    const btn1 = document.querySelector(".btt1");
    const btn2 = document.querySelector(".btt2");
    const btn3 = document.querySelector(".btt3");

    btn1.style.paddingRight = "200px";
    btn1.style.backgroundColor = "aliceblue";
    btn1.style.color = "black";
    
    btn2.style.paddingRight = "100px";
    btn2.style.backgroundColor = "#292929";
    btn2.style.color = "white";
    
    btn3.style.paddingRight = "100px";
    btn3.style.backgroundColor = "#292929";
    btn3.style.color = "white";
    
}
function setGameDev() {

    disWebDev.style.display = "none";
    disGamedev.style.display = "block";
    disGraphic.style.display = "none";
    disDisplay.style.display = "none";

    const btn1 = document.querySelector(".btt1");
    const btn2 = document.querySelector(".btt2");
    const btn3 = document.querySelector(".btt3");

    btn2.style.paddingRight = "200px";
    btn2.style.backgroundColor = "aliceblue";
    btn2.style.color = "black";
    
    btn1.style.paddingRight = "200px";
    btn1.style.backgroundColor = "#292929";
    btn1.style.color = "white";
    
    btn3.style.paddingRight = "200px";
    btn3.style.backgroundColor = "#292929";
    btn3.style.color = "white";
    
}
function setGraphicDesign() {
    
    disWebDev.style.display = "none";
    disGamedev.style.display = "none";
    disGraphic.style.display = "block";
    disDisplay.style.display = "none";

    const btn1 = document.querySelector(".btt1");
    const btn2 = document.querySelector(".btt2");
    const btn3 = document.querySelector(".btt3");

    btn3.style.paddingRight = "200px";
    btn3.style.backgroundColor = "aliceblue";
    btn3.style.color = "black";
    
    btn2.style.paddingRight = "100px";
    btn2.style.backgroundColor = "#292929";
    btn2.style.color = "white";
    
    btn1.style.paddingRight = "100px";
    btn1.style.backgroundColor = "#292929";
    btn1.style.color = "white";
}

let disDesc = document.querySelector('.photoRec');
let disElement = document.querySelector('.dis-element');
let desc = "";
let photoDesc = document.querySelector(".photoDesc");
let photoTit = document.querySelector(".photoTitle");
let photoBg = document.querySelector(".photoBg");

var disNum = 0;



function webSelect(num) {
   if(num == 1) {
    
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
       <li>html & Css</li>
       <li>Java Script</li>
       <li>PHP</li>
       <li>Photoshot</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `Digital Library`
    photoBg.src = "pics/projects/web1.png";
    photoDesc.innerHTML = `<span>Description:</span>A digital library that allows users to read and download books online. A university project made in collaboration with colleges.`

   }
   else if (num == 2) {
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
       <li>html</li>
       <li>Css</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `Photo Gallery`;
    photoBg.src = "pics/projects/web2.png";
    photoDesc.innerHTML = `<span>Description:</span> First solo project, a simple photo gallery made with web development fundamentals`


   }

   else if (num == 3) {
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
        <li>html & Css</li>
        <li>Java Script</li>
        <li>Photoshot</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `E-Commerce page Recreation`;
    photoBg.src = "pics/projects/web3.png";
    photoDesc.innerHTML = `<span>Description:</span> A recreation of a landing page from frontendpractice.com , made as an exercise to pratice frontend develpment. <br><br>Source: https://www.frontendpractice.com/projects/monogram`
   }
   else if (num == 4) {
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
        <li>html & Css</li>
        <li>Java Script</li>
        <li>Photoshot</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `Calendario Digital`;
    photoBg.src = "pics/projects/web4.png";
    photoDesc.innerHTML = `<span>Description:</span> Interview challenge. A digital calendar made with web dev fundamentals with the present date`
   }

   else if (num == 5) {
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
        <li>html & Css</li>
        <li>Java Script</li>
        <li>Photoshot</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `Restaurante Landing Page`;
    photoBg.src = "pics/projects/web5.png";
    photoDesc.innerHTML = `<span>Description:</span> Made for a client. A landing page to advertise a restaurant`
   }

   else if (num == 6) {
    disDisplay.style.display = "flex";
    disWebDev.style.display = "none";

    desc = `<ul>
        <h1 class="photoTitle">Resources</h1>
        <li>html & Css</li>
        <li>Java Script</li>
        <li>Photoshot</li>
        </ul>`;

    disDesc.innerHTML = desc;

    photoTit.innerHTML = `OG website`;
    photoBg.src = "pics/projects/web6.png";
    photoDesc.innerHTML = `<span>Description:</span> Website for a gamming company. Gives a brief introdution of the company, diplasy a gamming library with the download links.`
   }
}

function gameSelect(num) {
    if(num == 1) {
     
     disDisplay.style.display = "flex";
     disGamedev.style.display = "none";
 
     desc = `<ul>
         <h1 class="photoTitle">Resources</h1>
         <li>Unity Engine</li>
         <li>C#</li>
         <li>InkScape</li>
         <li>HitFilms Express</li>
         </ul>`;
 
     disDesc.innerHTML = desc;
 
     photoTit.innerHTML = `Banana Ninja Quiz`
     photoBg.src = "pics/projects/game1.jpeg";
     photoDesc.innerHTML = `<span>Description:</span> Quiz game contains the reading material and has an interactive gameplay.</br></br><span>Platforms: </span>PC`
 
    }
    else if (num == 2) {
     disDisplay.style.display = "flex";
     disGamedev.style.display = "none";
 
     desc = `<ul>
         <h1 class="photoTitle">Resources</h1>
        <li>Unity Engine</li>
        <li>C#</li>
        <li>InkScape</li>
        <li>HitFilms Express</li>
        <li>Unity 2d Animation</li>
         </ul>`;
 
     disDesc.innerHTML = desc;
 
     photoTit.innerHTML = `Bounce Man`;
     photoBg.src = "pics/projects/game2.png";
     photoDesc.innerHTML = `<span>Description:</span> Made by the OG group, made with original 2d assets, animation and soundtrack.</br></br><span>Platforms: </span>PC & Android`
 
    }

    else if (num == 3) {
        disDisplay.style.display = "flex";
        disGamedev.style.display = "none";
    
        desc = `<ul>
            <h1 class="photoTitle">Resources</h1>
           <li>Unity Engine</li>
           <li>C#</li>
           <li>InkScape & GIMP</li>
            </ul>`;
    
        disDesc.innerHTML = desc;
    
        photoTit.innerHTML = `Aprenda Circuitos Electricos`;
        photoBg.src = "pics/projects/game3.png"
        photoDesc.innerHTML = `<span>Description:</span> Interactive simulator and quiz for electrical circuitos.</br></br><span>Platforms: </span>PC`
        
       }

       else if (num == 4) {
        disDisplay.style.display = "flex";
        disGamedev.style.display = "none";
    
        desc = `<ul>
            <h1 class="photoTitle">Resources</h1>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>InkScape & GIMP</li>
            </ul>`;
    
        disDesc.innerHTML = desc;
    
        photoTit.innerHTML = `Charades`;
        photoBg.src = "pics/projects/game4.png"
        photoDesc.innerHTML = `<span>Description:</span>Charades category provider, up to 6 players.</br></br><span>Platforms: </span>pc & mobile`
        
       }

       else if (num == 5) {
        disDisplay.style.display = "flex";
        disGamedev.style.display = "none";
    
        desc = `<ul>
            <h1 class="photoTitle">Resources</h1>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>InkScape & GIMP</li>
            <li>Unity 2d Animation</li>
            </ul>`;
    
        disDesc.innerHTML = desc;
    
        photoTit.innerHTML = `K.O Fury`;
        photoBg.src = "pics/projects/game5.png"
        photoDesc.innerHTML = `<span>Description:</span>Local Multiplayer fighting game, with original 2D assets</br></br><span>Platforms: </span>PC  `
        
       }

       else if (num == 6) {
        disDisplay.style.display = "flex";
        disGamedev.style.display = "none";
    
        desc = `<ul>
            <h1 class="photoTitle">Resources</h1>
            <li>Unity Engine</li>
            <li>C#</li>
            <li>InkScape & GIMP</li>
            <li>Unity 2d Animation</li>
            </ul>`;
    
        disDesc.innerHTML = desc;
    
        photoTit.innerHTML = `Fenix Felix`;
        photoBg.src = "pics/projects/game6.png"
        photoDesc.innerHTML = `<span>Description:</span>Platformer with original assets , up to 4 levels and boss fight.</br></br><span>Platforms: </span>PC`
        
       }
 
 }


const garphPhotoSelect = document.querySelector('graphEl');

function graph1Element(num) {
    if(num == 1) {
        photoBg.src = "pics/projects/graphic11.png";
    }
    else if(num == 2) {
        photoBg.src = "pics/projects/graphic12.png";
    }
    else if(num == 3) {
        photoBg.src = "pics/projects/graphic13.png";
    }
    else if(num == 4) {
        photoBg.src = "pics/projects/graphic14.png";
    }
    else if(num == 5) {
        photoBg.src = "pics/projects/graphic15.png";
    }
    else if(num == 6) {
        photoBg.src = "pics/projects/graphic16.png";
    }
    else if(num == 7) {
        photoBg.src = "pics/projects/graphic17.png";
    }
}

function graph2Element(num) {
    if(num == 1) {
        photoBg.src = "pics/projects/graphic21.png";
    }
    else if(num == 2) {
        photoBg.src = "pics/projects/graphic22.png";
    }
    else if(num == 3) {
        photoBg.src = "pics/projects/graphic23.png";
    }
    else if(num == 4) {
        photoBg.src = "pics/projects/graphic24.png";
    }
    else if(num == 5) {
        photoBg.src = "pics/projects/graphic15.png";
    }
    else if(num == 6) {
        photoBg.src = "pics/projects/graphic16.png";
    }
    else if(num == 7) {
        photoBg.src = "pics/projects/graphic17.png";
    }
}

function graphicSelect(num) {
    if(num == 1) {
     
     disDisplay.style.display = "flex";
     disGraphic.style.display = "none";
 
     desc = `<ul>
         <h1 class="photoTitle">Items</h1>
        <li class="graphEl" onclick="graph1Element(1)">Logo</li>
        <li class="graphEl" onclick="graph1Element(2)">Flyers</li>
        <li class="graphEl" onclick="graph1Element(3)">Buisiness cards</li>
        <li class="graphEl" onclick="graph1Element(4)">Mock ups</li>
        <li class="graphEl" onclick="graph1Element(5)">Menu</li>
        <li class="graphEl" onclick="graph1Element(6)">Stamp</li>
         </ul>`;
 
     disDesc.innerHTML = desc;
 
     photoTit.innerHTML = `Kanduas Bar `
     photoBg.src = "pics/projects/graphic11.png";
     photoDesc.innerHTML = `<span>Description:</span>A bar-restaurant located in cazenga.`
 
    }
    else if (num == 2) {
     disDisplay.style.display = "flex";
     disGraphic.style.display = "none";
 
     desc = `<ul>
     <h1 class="photoTitle">Items</h1>
    <li class="graphEl" onclick="graph2Element(1)">Billboard</li>
    <li class="graphEl" onclick="graph2Element(2)">Posts</li>
    <li class="graphEl" onclick="graph2Element(3)">Football Team Emblem</li>
    <li class="graphEl" onclick="graph2Element(4)">Website Design</li>
     </ul>`;
 
     disDesc.innerHTML = desc;
 
     photoTit.innerHTML = `Clínica Global Diagnostic`;
     photoBg.src = "pics/projects/graphic21.png";
     photoDesc.innerHTML = `<span>Description:</span>Designs made while I was employed at the company`
 
 
    }
 }

 

function backToMenu() {
    disDisplay.style.display = "none";
    setWebDev();
}




