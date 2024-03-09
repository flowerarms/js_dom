function positionMessage(){
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = '50px';
    elem.style.top = '100px';
    moveElement('message',500,20,10);
}
function moveElement(elementID,final_x,final_y,interval){//移动元素函数
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";//为什么elementID左右有双引号
    movement = setTimeout(repeat, interval);
}
function addLoadEvent(func){//共享onload函数
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
addLoadEvent(positionMessage);

