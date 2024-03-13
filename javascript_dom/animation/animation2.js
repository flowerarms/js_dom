function prepareSlideshow(){
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "topics.gif");
    preview.setAttribute("alt", "building block of web design");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
//获取所有链接
    var links = document.getElementsByTagName('a');
//为mouseover事件添加动画效果
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,1);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,1);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,1);
    }
}
function moveElement(elementID,final_x,final_y,interval){
    var elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left = "0px";
    }
    if(!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos<final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
//        xpos++;
    }
    if(xpos>final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
//        xpos--;
    }
    if(ypos<final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
//        ypos++;
    }
    if(ypos>final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
//        ypos--;
    }
//    clearTimeout(elem.movement);
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat, interval);
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
addLoadEvent(prepareSlideshow);