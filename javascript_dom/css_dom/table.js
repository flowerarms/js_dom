function stripeTables(){
    var table = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<table.length;i++){
        odd = false;                           //首先odd是false
        rows = table[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd ==true){                               //第一个tr即tr[0]odd为false，走else把odd改为true
                addClass(row[j], "intro");                //使用addclass函数，置换文本css，方便以后调整时直接去css里调
            //  rows[j].style.backgroundColor = "#ffc";   //tr[1]的odd为true,走条件一将backgroundcolor改为#ffc
                odd = false;                              //
            }else{                                        //以此来实现偶数行变色的斑马效果。
                odd = true;
            }
        }
    }
}
function addClass(element, value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}
window.onload = function(){
    stripeTables();
}
