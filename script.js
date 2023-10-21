let p3 = document.getElementById('p3');
let p2 = document.getElementById('p2');

let gamingProductContent = document.getElementById('gaming-products-content');
let gaming = document.getElementById('gaming');

let appleProductsContent = document.getElementById('apple-products-content');
let mac = document.getElementById('mac');

let accessoriesPictures = document.getElementById('accessories-pictures');
let keyboard = document.getElementById('keyboard');
let mouse = document.getElementById('mouse');

const verifyScreenWidth = setInterval(() => {
    if (window.innerWidth <= 840){
        p3.style.width = '400px';
        p2.style.width = '400px';
        gamingProductContent.style.flexWrap = 'wrap';
        gaming.style.width = '400px';
        appleProductsContent.style.flexWrap = 'wrap';
        mac.style.width = '400px'
        accessoriesPictures.style.flexWrap = 'wrap';
        keyboard.style.width = '400px';
        mouse.style.width = '400px';
    } else {
        p3.style.width = '600px';
        p2.style.width = '600px';
        gamingProductContent.style.flexWrap = 'nowrap';
        gaming.style.width = '500px';
        appleProductsContent.style.flexWrap = 'nowrap';
        mac.style.width = '600px'
        accessoriesPictures.style.flexWrap = 'nowrap';
        keyboard.style.width = '500px';
        mouse.style.width = '600px';
    }
}, 10);
