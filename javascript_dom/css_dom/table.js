function stripeTables(){
    var table = document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<table.length;i++){
        odd = false;
        rows = table[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd ==true){
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
window.onload = function(){
    stripeTables();
}