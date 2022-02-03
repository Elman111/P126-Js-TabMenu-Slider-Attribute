

// let element = document.querySelector(".test");
// // console.log(element.getAttribute("class"))

// if(element.hasAttribute("data-id") && element.getAttribute("data-id") == "13"){
//     console.log("yes");
// }else{
//     console.log("no");
// }



//tab menu

// let headers = document.querySelectorAll(".tab-menu .header div");
// let contents = document.querySelectorAll(".tab-menu .content div");

// headers.forEach(header => {
//     header.addEventListener("click", function () {
//         let activeElem = document.querySelector(".active");
//         activeElem.classList.remove("active");
//         this.classList.add("active");

//         contents.forEach(content =>{
//             if(this.getAttribute("data-id") != content.getAttribute("data-id")){
//                 content.classList.add("d-none")
//             }else{
//                 content.classList.remove("d-none")
//             }
//         })


//     })
// })


//slider

let leftIcon = document.querySelector(".left");
let rightIcon = document.querySelector(".right");



rightIcon.addEventListener("click",function(){
    let activeImg = document.querySelector(".active");
    if(activeImg.nextElementSibling != null){
        activeImg.classList.remove("active");
        activeImg.nextElementSibling.classList.add("active");
    }else{
        let firstImg = document.querySelector(".img").firstElementChild;
        activeImg.classList.remove("active");
        firstImg.classList.add("active");
    }
})

leftIcon.addEventListener("click",function(){
    let activeImg = document.querySelector(".active");
    if(activeImg.previousElementSibling != null){
        activeImg.classList.remove("active");
        activeImg.previousElementSibling.classList.add("active");
    }else{
        let firstImg = document.querySelector(".img").lastElementChild;
        activeImg.classList.remove("active");
        firstImg.classList.add("active");
    }
})






