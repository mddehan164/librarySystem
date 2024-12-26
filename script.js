// handle menu button

let menuBtn = document.getElementById('menuBtn');
let closeBtn = document.getElementById('closeBtn');
let sideBar = document.querySelector('.side-bar');

menuBtn.addEventListener('click', function(){
    sideBar.style.display = 'flex';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', function(){
    sideBar.style.display = 'none';
    menuBtn.style.display = 'initial';
})


function resisePageMobile(){

    if (window.innerWidth <= 576) { //Detect mobile 
        menuBtn.style.opacity = 1;
    }else if(window.innerWidth >= 577){
        sideBar.style.display = 'none';
        menuBtn.style.opacity = 0;
    };
  
  }
  //then attach to the event listener
  window.addEventListener('resize',resisePageMobile);

// handle the sign up box

let textBox = document.getElementById("vanishForSignup");
let signUpBox = document.getElementById("signUp");
let getBtn = document.getElementById('getStarted');
getBtn.addEventListener('click', function(){
    textBox.style.display = "none";
    signUpBox.style.display = "block";
})


// login handle

let navLogin = document.getElementById('navLogin');
let homePage = document.getElementById('home-page');
let loginBox = document.getElementById('login-box');
let sideBarLogin = document.getElementById('sideBarLogin');

navLogin.addEventListener('click', function(){
    homePage.style.display = 'none';
    loginBox.style.display = 'block';
    departments.style.display = 'none';
})

sideBarLogin.addEventListener('click', function(){
    homePage.style.display = 'none';
    loginBox.style.display = 'block';
    sideBar.style.display = 'none';
    menuBtn.style.display = 'initial';
    departments.style.display = 'none';
})

// click logo for home page

let logoBtn = document.getElementById('logo');

logoBtn.addEventListener('click', function(){
    window.location.reload();
})


// handle departments

let departmentBtn = document.getElementById('departmentBtn');
let departments = document.getElementById('departments');
let sideBarDepartments = document.getElementById('sideBarDepartments');


departmentBtn.addEventListener('click', function(){
    departments.style.display = 'block';
    homePage.style.display = 'none';
    loginBox.style.display = 'none';
    sideBar.style.display = 'none';

})

    sideBarDepartments.addEventListener('click', function(){
    homePage.style.display = 'none';
    loginBox.style.display = 'none';
    sideBar.style.display = 'none';
    menuBtn.style.display = 'initial';
    departments.style.display = 'block';
})

//handle department boxes

// let depChild = document.getElementsByClassName('dep-child');
// let arr = Array.from(depChild);

// arr.forEach(function(childs){
//     childs.addEventListener('click', function(){
//         childs.innerHTML = `<select>
//                             <option>1st Year</option>
//                             <option>2nd Year</option>
//                             <option>3rd Year</option>
//                             <option>4th Year</option>
//                             </select>`;
//     });
// });
