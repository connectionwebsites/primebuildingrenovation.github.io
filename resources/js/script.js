/*/////////// ///////////*/
window.onscroll = function(){
    if(pageYOffset > 0){
        headerScrollOn()
    }else{
        headerScrollOff()
    }
    if(pageYOffset > 80){
        getID('whatwedo-js').style.opacity = 0;
    }
    if(pageYOffset > 300){
        getID('whatwedo-js').style.opacity = 1;
    }
    if(pageYOffset > 300){
        getID('homegrid-js').style.opacity = 0;
    }
    if(pageYOffset > 600){
        getID('homegrid-js').style.opacity = 1;
    }
    /* if(pageYOffset > 1000){
        getID('ourprojects-text1').classList.add('animation_opacity')
    }
    if(pageYOffset > 1400){
        getID('ourprojects-text2').classList.add('animation_opacity')
    } */
}
var navLi = document.getElementsByClassName('header_nav-li--row')

function getID(a){
    return document.getElementById(`${a}`)
}
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
///////////////HERO
var heroFlow = getID('hero-flow').innerHTML;
var flowFunction;
function heroAuto(heroCount){
    clearTimeout(flowFunction);

    if(heroCount == '1'){
        heroTextOn('1');
        flowFunction = setTimeout(() => {
            getID('hero-img-1').style.opacity = 0;
            heroTextOff('1');

            heroAuto('2');
            getID('hero-img-2').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('2')};
            getID('hero-arrowright').onclick = function(){heroSlideL('2')};
            heroTextOn('2');
        }, 8000);
        
    }else if(heroCount == '2'){
        flowFunction = setTimeout(() => {
            getID('hero-img-2').style.opacity = 0;
            heroTextOff('2');

            heroAuto('3');
            getID('hero-img-3').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('3')};
            getID('hero-arrowright').onclick = function(){heroSlideL('3')};
            heroTextOn('3');
        }, 8000);
    }else if(heroCount == '3'){
        flowFunction = setTimeout(() => {
            getID('hero-img-3').style.opacity = 0;
            heroTextOff('3');

            heroAuto('4');
            getID('hero-img-4').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('4')};
            getID('hero-arrowright').onclick = function(){heroSlideL('4')};
            heroTextOn('4');
        }, 8000);
    }else if(heroCount == '4'){
        flowFunction = setTimeout(() => {
            getID('hero-img-4').style.opacity = 0;
            heroTextOff('4');

            heroAuto('1');
            getID('hero-img-1').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('1')};
            getID('hero-arrowright').onclick = function(){heroSlideL('1')};
            heroTextOn('1');
        }, 8000);
    }
}

var flowArrow;
function heroSlideR(heroCount){
    clearTimeout(flowFunction);
    heroTextOff(heroCount);
    if(heroCount == '1'){
        flowArrow = setTimeout(() => {
            getID('hero-img-1').style.opacity = 0;

            heroAuto('2');
            getID('hero-img-2').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('2')};
            getID('hero-arrowright').onclick = function(){heroSlideR('2')};
        }, 300);
        heroTextOn('2');
    }else if(heroCount == '2'){
        flowArrow = setTimeout(() => {
            getID('hero-img-2').style.opacity = 0;

            heroAuto('3');
            getID('hero-img-3').style.opacity = 1;
            getID('hero-arrowleft').onclick = function(){heroSlideL('3')};
            getID('hero-arrowright').onclick = function(){heroSlideR('3')};
        }, 300);
        heroTextOn('3');
    }else if(heroCount == '3'){
        flowArrow = setTimeout(() => {
            getID('hero-img-3').style.opacity = 0;

            getID('hero-img-4').style.opacity = 1;
            heroAuto('4');
            getID('hero-arrowleft').onclick = function(){heroSlideL('4')};
            getID('hero-arrowright').onclick = function(){heroSlideR('4')};
        }, 300);
        heroTextOn('4');
    }else if(heroCount == '4'){
        flowArrow = setTimeout(() => {
            getID('hero-img-4').style.opacity = 0;

            getID('hero-img-1').style.opacity = 1;
            heroAuto('1');
            getID('hero-arrowleft').onclick = function(){heroSlideL('1')};
            getID('hero-arrowright').onclick = function(){heroSlideR('1')};
        }, 300);
        heroTextOn('1');
    }
}
function heroSlideL(heroCount){
    clearTimeout(flowFunction);
    heroTextOff(heroCount);
    if(heroCount == '1'){
        flowArrow = setTimeout(() => {
            getID('hero-img-1').style.opacity = 0;

            getID('hero-img-4').style.opacity = 1;
            heroAuto('4');
            getID('hero-arrowleft').onclick = function(){heroSlideL('4')};
            getID('hero-arrowright').onclick = function(){heroSlideR('4')};
        }, 300);
        heroTextOn('4');
    }else if(heroCount == '2'){
        flowArrow = setTimeout(() => {
            getID('hero-img-2').style.opacity = 0;

            getID('hero-img-1').style.opacity = 1;
            heroAuto('1');
            getID('hero-arrowleft').onclick = function(){heroSlideL('1')};
            getID('hero-arrowright').onclick = function(){heroSlideR('1')};
        }, 300);
        heroTextOn('1');
    }else if(heroCount == '3'){
        flowArrow = setTimeout(() => {
            getID('hero-img-3').style.opacity = 0;

            getID('hero-img-2').style.opacity = 1;
            heroAuto('2');
            getID('hero-arrowleft').onclick = function(){heroSlideL('2')};
            getID('hero-arrowright').onclick = function(){heroSlideR('2')};
        }, 300);
        heroTextOn('2');
    }else if(heroCount == '4'){
        flowArrow = setTimeout(() => {
            getID('hero-img-4').style.opacity = 0;

            getID('hero-img-3').style.opacity = 1;
            heroAuto('3');
            getID('hero-arrowleft').onclick = function(){heroSlideL('3')};
            getID('hero-arrowright').onclick = function(){heroSlideR('3')};
        }, 300);
        heroTextOn('3');
    }
}
function heroTextOn(a){
    getID(`hero-text-${a}`).style.opacity = 1;
    getID(`hero-text-${a}`).style.top = '39vh';
    getID(`hero-text-${a}`).style.transition = 'all 2s';
    getID(`hero-text-${a}`).style.transitionDelay = '1.5s';
}
function heroTextOff(a){
    getID(`hero-text-${a}`).style.opacity = 0;
    getID(`hero-text-${a}`).style.top = '52vh';
    getID(`hero-text-${a}`).style.transition = 'all 0s';
}