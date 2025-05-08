let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('.navbar');

menu.onclick = () => {

menu.classList.toggle('fa-times');

navbar.classList.toggle('active');

}
let section = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

menu.classList.remove('fa-times');

navbar.classList.remove('active');

section.forEach(sec => {

let top= window.scrollY;

let height = sec.offsetHeight;

let offset = sec.offsetTop-150;

let id = sec.getAttribute('id');
if (top=> offset && top < offset + height){

navLinks.forEach(links =>{

links.classList.remove('active');

document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

});
};
});
}

window.onscroll = () => {

menu.classList.remove('fa-times');

navbar.classList.remove('active');

}

document.querySelector('#search-icon').onclick = () => {

document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () => {

document.querySelector('#search-form').classList.remove('active');

}
var swiper = new Swiper(".home-slider", {

spaceBetween: 30,

centeredSlides: true,

autoplay: {

delay: 7500,

disableOnInteraction: false,

},

pagination: {

el: ".swiper-pagination",

clickable: true,

},

loop:true,

});

 var total = 0;

document.querySelector('#quantity1').onkeyup = calculateTotal;
document.querySelector('#Order').onchange = calculateTotal;
document.querySelector('#quantity2').onkeyup = calculateTotal;
document.querySelector('#AddlOrder').onchange = calculateTotal;

function calculateTotal() {
    total = 0; // Reset total before recalculating

    var order = document.getElementById("Order");
    var value1 = parseFloat(order.options[order.selectedIndex].value) || 0;
    var quantity1 = parseInt(document.querySelector('#quantity1').value) || 0;

    if (value1 != 0) {
        total += value1 * quantity1;
    }

    var addlOrder = document.getElementById("AddlOrder");
    var value2 = parseFloat(addlOrder.options[addlOrder.selectedIndex].value) || 0;
    var quantity2 = parseInt(document.querySelector('#quantity2').value) || 0;

    if (value2 != 0) {
        total += value2 * quantity2;
    }

    document.querySelector('#cartValue').value = total.toFixed(2); // Format total to 2 decimal places if needed
}

