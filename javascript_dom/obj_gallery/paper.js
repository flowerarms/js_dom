window.onload = function(){
    prepareLinks();
    prepareGallery();
    countBodyChildren();
}
function showPic(whichpic){
//    if(!document.getElementById('placeholder')) return false;
    var source = whichpic.getAttribute('href');
//    alert(source.length);
    var placeholder = document.getElementById('placeholder');
//    if(placeholder.nodeName != 'IMG') return false;
    placeholder.setAttribute('src', source);
    if(document.getElementById('description')){
        var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : ' ';
        var description = document.getElementById('description');
//        if(description.firstChild.nodeType == 3){
//           description.firstChild.nodeValue = text;
//        }
    }
    return true;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName('body')[0];
    alert(body_element.nodeType);
    var long = document.getElementsByTagName('a');
    alert(long.length);
}
//window.onload = prepareLinks;
//window.onload = countBodyChildren, prepareLinks;

function prepareLinks(){
    var links = document.getElementsByTagName('a');
    for (var i=0; i<links.length; i++){
        if (links[i].getAttribute('class') == 'popUp'){
            links[i].onclick = function(){
                popUp(this.getAttribute('href'));
                return false;
            }
        }
    }
}

function popUp(winURL){
    window.open(winURL, "popUp", "width=320, height=480");
}

function prepareGallery(){
//    if (!document.getElementId) return false;
//    alert(5);
//    if (!document.getElementsByTagName) return false;
//    if (!document.getElementId('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = document.getElementsByTagName('a');
//    alert(links.length);
    for(var i=0; i<links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//addLoadEvent(countBodyChildren);
//addLoadEvent(prepareGallery);
//addLoadEvent(prepareLinks);











