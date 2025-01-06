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
//department btn is a faculty btn

let departmentBtn = document.getElementById('departmentBtn');
let departments = document.getElementById('departments');
let sideBarDepartments = document.getElementById('sideBarDepartments');


departmentBtn.addEventListener('click', function(){
    departments.style.display = 'block';
    homePage.style.display = 'none';
    loginBox.style.display = 'none';
    sideBar.style.display = 'none';
    facParent.style.display = 'flex';
    depDialog.style.display = 'none';
    document.getElementById('minimize').style.display = 'initial';
    deparBoxArr.forEach((e)=>{
        e.style.display = 'none';
        document.getElementById('choose').innerText = 'Faculty';
    })

})

    sideBarDepartments.addEventListener('click', function(){
    homePage.style.display = 'none';
    loginBox.style.display = 'none';
    sideBar.style.display = 'none';
    menuBtn.style.display = 'initial';
    departments.style.display = 'block';
    facParent.style.display = 'flex';
    deparBoxArr.forEach((e)=>{
        e.style.display = 'none';
        document.getElementById('choose').innerText = 'Faculty';
    })
})



//faculty boxes handle

let facParent = document.querySelector('.dept-faculty-parent');
let facultyBox = document.getElementsByClassName('faculty-box');
let departBoxes = document.getElementsByClassName('depart-box');
let departParent = document.querySelector('.depart-parent');
let depDialog = document.querySelector('.dept-dialog-parent');
let facultyArr = Array.from(facultyBox);
let deparBoxArr = Array.from(departBoxes);

    facultyArr.forEach((e)=>{
        e.addEventListener('click', ()=>{
            document.getElementById('choose').innerText = 'Department';
            depDialog.style.display = 'none';
            semesterBox.style.display = 'none';
        })
    })
    facultyArr[0].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[0].style.display = 'block';
    })
    facultyArr[1].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[1].style.display = 'block';
    })
    facultyArr[2].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[2].style.display = 'block';
    })
    facultyArr[3].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[3].style.display = 'block';
    })
    facultyArr[4].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[4].style.display = 'block';
    })
    facultyArr[5].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[5].style.display = 'block';
    })
    facultyArr[6].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[6].style.display = 'block';
    })
    facultyArr[7].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[7].style.display = 'block';
    })
    facultyArr[7].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[7].style.display = 'block';
    })
    facultyArr[8].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[8].style.display = 'block';
    })
    facultyArr[9].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[9].style.display = 'block';
    })
    facultyArr[10].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[10].style.display = 'block';
    })
    facultyArr[11].addEventListener('click', ()=>{
        facParent.style.display = 'none';
        departParent.style.display = 'flex';
        deparBoxArr[11].style.display = 'block';
    })

    deparBoxArr.forEach(e=>{
        e.addEventListener('click', ()=>{
        depDialog.style.display = 'flex';
        document.getElementById('minimize').addEventListener('click',()=>{
            depDialog.style.display = 'none';
        })
        })
    })


    //handle year
    let semesterBox = document.querySelector('.semester-box');
    let years = document.getElementsByClassName('dept-years');
    let yearsArr = Array.from(years);
    
    yearsArr.forEach((e)=>{
        e.addEventListener('click',()=>{
            semesterBox.style.display = 'flex';
            document.getElementById('minimize').style.display = 'none';
            document.getElementById('minimize2').addEventListener('click',()=>{
                semesterBox.style.display = 'none';
                document.getElementById('minimize').style.display = 'initial';
            })
        })
    })


    // handle semester btn


    let semesterBtn1 = document.getElementById('semesterBtn1');
    let semesterBtn2 = document.getElementById('semesterBtn2');
    let semesterMessage = document.getElementById("semesterMessage");
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


