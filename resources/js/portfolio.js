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
    getID(`portfolio-image-hover-${b}-${a}`).style.opacity = 1;
}
function imageOut(a,b){
    getID(`portfolio-image-hover-${b}-${a}`).style.opacity = 0;
}
function galleryOpen(a,b){
    getID(`modal-gallery`).style.display = "block";
    getID('modal-gallery-box').classList.add('animation_scale');
    getID('modal-gallery-img').src = getID(`portfolio-image-${b}-${a}`).src
}
function galleryClose(){
    getID(`modal-gallery`).style.display = "none";
    getID('modal-gallery-box').classList.remove('animation_scale');
    getID('modal-gallery-img').src = "";
}
function portfolioLabel(a){
    galleryAnimation(a);
    if(a == 'all'){
        getID('label-span-all').style.color = '#555';
        getID('label-span-residencial').style.color = '#ccc';
        getID('label-span-commercial').style.color = '#ccc';
    }
    if(a == 'residencial'){
        getID('label-span-all').style.color = '#ccc';
        getID('label-span-residencial').style.color = '#555';
        getID('label-span-commercial').style.color = '#ccc';
    }
    if(a == 'commercial'){
        getID('label-span-all').style.color = '#ccc';
        getID('label-span-residencial').style.color = '#ccc';
        getID('label-span-commercial').style.color = '#555';
    }
}
function galleryAnimation(a){
    if(a == 'all'){
        getID(`portfolio-gallery-box-residencial`).style.opacity = 0;
        getID(`portfolio-gallery-box-commercial`).style.opacity = 0;
        setTimeout(() => {
            getID(`portfolio-gallery-images-residencial`).style.display = 'none';
            getID(`portfolio-gallery-images-commercial`).style.display = 'none';
            setTimeout(() => {
                getID(`portfolio-gallery-box-all`).style.opacity = 1;
            }, 250);
            getID(`portfolio-gallery-images-all`).style.display = 'block';
        }, 250);
    }
    if(a == 'residencial'){
        getID(`portfolio-gallery-box-all`).style.opacity = 0;
        getID(`portfolio-gallery-box-commercial`).style.opacity = 0;
        setTimeout(() => {
            getID(`portfolio-gallery-images-all`).style.display = 'none';
            getID(`portfolio-gallery-images-commercial`).style.display = 'none';
            setTimeout(() => {
                getID(`portfolio-gallery-box-residencial`).style.opacity = 1;
            }, 250);
            getID(`portfolio-gallery-images-residencial`).style.display = 'block';
        }, 250);
    }
    if(a == 'commercial'){
        getID(`portfolio-gallery-box-residencial`).style.opacity = 0;
        getID(`portfolio-gallery-box-all`).style.opacity = 0;
        setTimeout(() => {
            getID(`portfolio-gallery-images-residencial`).style.display = 'none';
            getID(`portfolio-gallery-images-all`).style.display = 'none';
            setTimeout(() => {
                getID(`portfolio-gallery-box-commercial`).style.opacity = 1;
            }, 250);
            getID(`portfolio-gallery-images-commercial`).style.display = 'block';
        }, 250);
    }
}