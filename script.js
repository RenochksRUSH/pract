// let header_button=document.querySelector(".ikon");
// header_button.addEventListener("click", function(){
//     let header=document.querySelector("header");
//     if (header.classList.contains("open")){
//         close_p();
//     }
//     else{
//     header.classList.add("open");
//     header_button.querySelector("img").src="im/close.png";
//     } 
// }); 
// function close_p(){
//     document.querySelector("header").classList.remove("open");
//     header_button.querySelector("img").src="im/menu.png";
// }
// document.querySelector("#grid").addEventListener("click", close_p, false);
// document.querySelector("header .p").addEventListener("click",close_p, false);

document.querySelector("#show_new_ph").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click", function (e) {
    e.preventDefault(); 
    document.querySelector("#add_new_photo").classList.remove("open");
});

function open_photo(){
    let src=this.querySelector("img").src;
    open_photo=document.querySelector("#p_ph");
    open_photo.querySelector("img").src=src;
    open_photo.classList.add("open");
}
let photos=document.querySelectorAll(".photo");
for (let photo of photos){
    photo.addEventListener("click", open_photo, false);
}
document.querySelector("#p_ph").addEventListener("click", function(){
    this.classList.remove("open");
});
