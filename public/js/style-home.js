document.addEventListener('DOMContentLoaded', function(){
    var btnMenu = document.querySelector('.btn-menu');
    btnMenu.addEventListener('click', function(){
        getMenu();
    });

    var btnClose = document.querySelector('#btn-close');
    btnClose.addEventListener('click', function(){
        closeMenu();
    })
});





function getMenu(){
    document.querySelector('.container-nav-menu').style.left = 0;
    document.querySelector('#menu').style.opacity = 0;
    var el = document.querySelector('.container-header-home');
    if(!document.querySelector('.bgTrans')){
        var newEl = document.createElement('div');
        newEl.setAttribute("class", "bgTrans");
        el.appendChild(newEl);
    }
    
}

function closeMenu(){
    document.querySelector('.container-nav-menu').style.left = '-100%';
    document.querySelector('#menu').style.opacity = 1;
    if(document.querySelector('.bgTrans')){
        var el = document.querySelector('.bgTrans').removeAttribute('class')        
    }
}