window.onscroll = function(){
    if(pageYOffset > 0){
        headerScrollOn()
    }else{
        headerScrollOff()
    }
}
function getID(a){
    return document.getElementById(`${a}`)
}
function scrolling(id){
    $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top-80
    }, 1000);
}
function testt(){
    getID('testtt').classList.add('testt')
    getID('testtt2').classList.add('testt')
    setTimeout(() => {
        getID('testtt').classList.add('testt2')
        getID('testtt2').classList.add('testt2')
    }, 500);
}
function retestt(){
    getID('testtt').classList.remove('testt')
    getID('testtt2').classList.remove('testt')
    getID('testtt').classList.remove('testt2')
    getID('testtt2').classList.remove('testt2')
}
var navLi = document.getElementsByClassName('header_nav-li--row')
function headerOpen(){
    getID('headerside-js').style.transition = 'all 1s';
    getID('headerside-js').style.left = 'calc(100% - 290px)';
    getID('headerside-modalexit').style.left = '0px';
    getID('headerside-modalexit').style.opacity = 1;
    getID('headerside-modalexit').style.transitionDelay = 'opacity 2s';
}
function headerClose(){
    getID('headerside-js').style.left = '100%';
    getID('headerside-modalexit').style.left = '100%';
    getID('headerside-modalexit').style.opacity = 0;
}
function headerScrollOn(){
    getID(`header-js`).style.backgroundColor = "#fff";
    getID(`header-js`).style.boxShadow = '1px 1px 5px #bbb';
    getID(`header-logo-fff`).style.display = "none";
    getID(`header-logo-000`).style.display = "block";
    getID(`header-verticalline`).style.backgroundColor = "#eee";
    getID(`header-verticalline`).style.marginTop = "0%";
    getID(`header-verticalline`).style.height = "100%";
    for(i=1;i<=6;i++){
        getID(`header-nav-li-line-${i}`).style.backgroundColor = "#000";
    };
    for(i=1;i<=3;i++){
        getID(`header-icon-unit-${i}`).style.backgroundColor = "#000";
    };
    for(i=1;i<=6;i++){
        getID(`header-nav-li-${i}`).style.color = "#000";
    }
}
function headerScrollOff(){
    getID(`header-js`).style.backgroundColor = "#0000";
    getID(`header-js`).style.boxShadow = '0px 0px 0px #0000';
    getID(`header-logo-fff`).style.display = "block";
    getID(`header-logo-000`).style.display = "none";
    getID(`header-verticalline`).style.backgroundColor = "#fff";
    getID(`header-verticalline`).style.marginTop = "calc(4.5vw - 3vw/2)";
    getID(`header-verticalline`).style.height = "3vw";
    for(i=1;i<=6;i++){
        getID(`header-nav-li-line-${i}`).style.backgroundColor = "#fff";
    };
    for(i=1;i<=3;i++){
        getID(`header-icon-unit-${i}`).style.backgroundColor = "#fff";
    };
    for(i=1;i<=6;i++){
        getID(`header-nav-li-${i}`).style.color = "#fff";
    }
}
function headerNavHover(a){
    getID(`header-nav-li-line-${a}`).style.width = "100%";
    getID(`header-nav-li-line-${a}`).style.marginLeft = "0%";
}
function headerNavOut(a){
    getID(`header-nav-li-line-${a}`).style.width = "0%";
    getID(`header-nav-li-line-${a}`).style.marginLeft = "50%";
}
function heroText(){
    getID('heroportfolio-title').classList.add('animation_left');
    getID('heroportfolio-subtitle').classList.add('animation_opacity');
}
function heroBottom(a){
    scrolling(a)
}
function imageHover(a,b){
    getID(`portfolio-image-hover-${a}-${b}`).style.opacity = 1;
}
function imageOut(a,b){
    getID(`portfolio-image-hover-${a}-${b}`).style.opacity = 0;
}
function galleryOpen(a,b){
    getID(`modal-gallery`).style.display = "block";
    getID('modal-gallery-box').classList.add('animation_scale');
    getID('modal-gallery-img').src = getID(`portfolio-image-${a}-${b}`).src
}
function galleryClose(){
    getID(`modal-gallery`).style.display = "none";
    getID('modal-gallery-box').classList.remove('animation_scale');
    getID('modal-gallery-img').src = "";
}
function portfolioLabel(a){
    if(a == 'residencial'){
        getID('label-span-residencial').style.color = '#555';
        getID('label-span-commercial').style.color = '#ccc';
        getID('category-choosed').innerHTML = 'res';
        portfolioCategoryAll('res');
    }
    if(a == 'commercial'){
        getID('label-span-residencial').style.color = '#ccc';
        getID('label-span-commercial').style.color = '#555';
        getID('category-choosed').innerHTML = 'com';
        portfolioCategoryAll('com');
    }
}
function portfolioCategoryAll(a){
        portfolioCategoryOn(a, 'demo');
        portfolioCategoryOn(a, 'dry');
        portfolioCategoryOn(a, 'painting');
        portfolioCategoryOn(a, 'flooring');
        portfolioCategoryOn(a, 'metals');
        portfolioCategoryOn(a, 'tile');
        portfolioCategoryOn(a, 'shower');
        portfolioMultiplesOff();
        portfolioCategoryLabel('all')
    if(a == 'com'){
        portfolioCategoryOff('res', 'demo');
        portfolioCategoryOff('res', 'dry');
        portfolioCategoryOff('res', 'painting');
        portfolioCategoryOff('res', 'flooring');
        portfolioCategoryOff('res', 'metals');
        portfolioCategoryOff('res', 'tile');
        portfolioCategoryOff('res', 'shower');
    }else if(a == 'res'){
        portfolioCategoryOff('com', 'demo');
        portfolioCategoryOff('com', 'dry');
        portfolioCategoryOff('com', 'painting');
        portfolioCategoryOff('com', 'flooring');
        portfolioCategoryOff('com', 'metals');
        portfolioCategoryOff('com', 'tile');
        portfolioCategoryOff('com', 'shower');
    }
}
function portfolioCategory(a){
    portfolioCategoryLabel(a);
    var type = getID('category-choosed').innerHTML
    var images = document.getElementsByClassName(`${type}-${a}`).length;
    for(i=1;i<=images;i++){
        getID(`portfolio-unit-${type}-${a}-${i}`).classList.remove('scaleoff');
        getID(`portfolio-unit-${type}-${a}-${i}`).classList.remove('sizeoff');
    }
    if(type == 'com'){
        portfolioCategoryOff('res', 'demo');
        portfolioCategoryOff('res', 'dry');
        portfolioCategoryOff('res', 'painting');
        portfolioCategoryOff('res', 'flooring');
        portfolioCategoryOff('res', 'metals');
        portfolioCategoryOff('res', 'tile');
        portfolioCategoryOff('res', 'shower');
        if(a == 'all'){
            portfolioMultiplesOff();
            portfolioCategoryOn('com', 'demo');
            portfolioCategoryOn('com', 'dry');
            portfolioCategoryOn('com', 'painting');
            portfolioCategoryOn('com', 'flooring');
            portfolioCategoryOn('com', 'metals');
            portfolioCategoryOn('com', 'tile');
            portfolioCategoryOn('com', 'shower');
        }else{
            portfolioMultiplesOn();
            if(a == 'demo'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'dry'){
                portfolioCategoryOff('com', 'demo');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'painting'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'demo');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'flooring'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'demo');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'metals'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'demo');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'tile'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'demo');
                portfolioCategoryOff('com', 'shower');
            }else if(a == 'shower'){
                portfolioCategoryOff('com', 'dry');
                portfolioCategoryOff('com', 'painting');
                portfolioCategoryOff('com', 'flooring');
                portfolioCategoryOff('com', 'metals');
                portfolioCategoryOff('com', 'tile');
                portfolioCategoryOff('com', 'demo');
            }
        } 
    }else if(type == 'res'){
        portfolioCategoryOff('com', 'demo');
        portfolioCategoryOff('com', 'dry');
        portfolioCategoryOff('com', 'painting');
        portfolioCategoryOff('com', 'flooring');
        portfolioCategoryOff('com', 'metals');
        portfolioCategoryOff('com', 'tile');
        portfolioCategoryOff('com', 'shower');
        if(a == 'all'){
            portfolioMultiplesOff();
            portfolioCategoryOn('res', 'demo');
            portfolioCategoryOn('res', 'dry');
            portfolioCategoryOn('res', 'painting');
            portfolioCategoryOn('res', 'flooring');
            portfolioCategoryOn('res', 'metals');
            portfolioCategoryOn('res', 'tile');
            portfolioCategoryOn('res', 'shower');
        }else{
            portfolioMultiplesOn();
            if(a == 'demo'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'dry'){
                portfolioCategoryOff('res', 'demo');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'painting'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'demo');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'flooring'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'demo');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'metals'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'demo');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'tile'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'demo');
                portfolioCategoryOff('res', 'shower');
            }else if(a == 'shower'){
                portfolioCategoryOff('res', 'dry');
                portfolioCategoryOff('res', 'painting');
                portfolioCategoryOff('res', 'flooring');
                portfolioCategoryOff('res', 'metals');
                portfolioCategoryOff('res', 'tile');
                portfolioCategoryOff('res', 'demo');
            }
        } 
    }
    
}
function portfolioCategoryOff(typeA,cat){
    var imagesA = document.getElementsByClassName(`${typeA}-${cat}`).length;
    for(i=1;i<=imagesA;i++){
        getID(`portfolio-unit-${typeA}-${cat}-${i}`).classList.add('scaleoff');
        getID(`portfolio-unit-${typeA}-${cat}-${i}`).classList.add('sizeoff');
    }
}
function portfolioCategoryOn(typeA,cat){
    var imagesA = document.getElementsByClassName(`${typeA}-${cat}`).length;
    for(i=1;i<=imagesA;i++){
        getID(`portfolio-unit-${typeA}-${cat}-${i}`).classList.remove('scaleoff');
        getID(`portfolio-unit-${typeA}-${cat}-${i}`).classList.remove('sizeoff');
    }
}
function portfolioMultiplesOff(){
    var images = document.getElementsByClassName('portfolio_gallery-multiplesimages--unit')
    for(i=0;i<images.length;i++){
        images[i].style.display = "none";

    }
}
function portfolioMultiplesOn(){
    var images = document.getElementsByClassName('portfolio_gallery-multiplesimages--unit')
    for(i=0;i<images.length;i++){
        images[i].style.display = "block";
    }
}
function portfolioCategoryLabel(a){
    getID(`portfolio-gallery-category-label-${a}`).style.color = '#222';
    if(a == 'all'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'flooring',
            'demo',
            'metals',
            'tile',
            'shower'
        )
    }else if(a == 'painting'){
        portfolioCategoryLabelEffect(
            'all',
            'dry',
            'flooring',
            'demo',
            'metals',
            'tile',
            'shower'
        )
    }else if(a == 'dry'){
        portfolioCategoryLabelEffect(
            'painting',
            'all',
            'flooring',
            'demo',
            'metals',
            'tile',
            'shower'
        )
    }else if(a == 'flooring'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'all',
            'demo',
            'metals',
            'tile',
            'shower'
        )
    }else if(a == 'demo'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'flooring',
            'all',
            'metals',
            'tile',
            'shower'
        )
    }else if(a == 'metals'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'flooring',
            'demo',
            'all',
            'tile',
            'shower'
        )
    }else if(a == 'tile'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'flooring',
            'demo',
            'metals',
            'all',
            'shower'
        )
    }else if(a == 'shower'){
        portfolioCategoryLabelEffect(
            'painting',
            'dry',
            'flooring',
            'demo',
            'metals',
            'tile',
            'all'
        )
    }
}
function portfolioCategoryLabelEffect(a,b,c,d,e,f,g){
    getID(`portfolio-gallery-category-label-${a}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${b}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${c}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${d}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${e}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${f}`).style.color = '#ccc';
    getID(`portfolio-gallery-category-label-${g}`).style.color = '#ccc';

}