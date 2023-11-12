// class MobileNavBar{
//     constructor(mobileMenu) {
//         this.mobileMenu = document.querySelector(".mobileMenu");
//         this.menu = document.querySelector(".menu");
//         this.activeClass = "active";
//     }

//     addClickEvent(){
//         this.mobileMenu.addEventListener("click", () => console.log
//         ("Hey"));
//     }

//     Infinity(){
//         if (this.mobileMenu){
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavBar = new MobileNavBar(
//     ".mobileMenu",
//     ".menu",
//     ".menu li"
// );
// MobileNavBar.init();

let contador = 1;

setInterval(function(){
document.getElementById('slide'+ contador).checked = true;
contador ++;
if( contador > 3) {
    contador=1;
}
},  3000)
