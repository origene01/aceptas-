 function aceptar() {
     var dialog = document.querySelector('.mensaje');
     var visD = document.querySelector('#button');
     visD.style.display = "none";

     setTimeout(() => {
         dialog.style.display = "block";
     }, 5500)

     function bug() {
         var progrees = document.querySelector('.pr');
         progrees.style.opacity = "1";
         progrees.style.width = "250px";
         setInterval(() => {
             progrees.style.opacity = "0";
             progrees.style.width = "50px";
         }, 5200)
     }
     setTimeout(bug(), 500);
 }