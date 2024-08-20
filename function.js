let homenav =  document.querySelector('.home-class');
let deliverynav =  document.querySelector('.delivery-class');
let appnav =  document.querySelector('.app-class');
let aboutnav =  document.querySelector('.about-class');
let contactnav =  document.querySelector('.contact-class');

let shopid  = document.getElementById('shop-id');

homenav.onclick = () =>{
    homenav.classList.toggle('bx-x');

}
deliverynav.onclick = () =>{
    delivery.classList.toggle('bx-x');

}
appnav.onclick = () =>{
    appnav.classList.toggle('bx-x');

}
aboutnav.onclick = () =>{
   aboutnav.classList.toggle('bx-x');

}
contact.onclick = () =>{
    contact.classList.toggle('bx-x');

}

window.onscroll = ()=> {
    homenav.classList.remove('bx-x');
    deliverynav.classList.remove('bx-x');
    appnav.classList.remove('bx-x');
    aboutnav.classList.remove('bx-x');
    contactnav.classList.remove('bx-x');
   
}

shopid.onclick = ()=> {
    window.open('shop.html', '_blank');
}

