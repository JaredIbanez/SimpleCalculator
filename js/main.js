var stat = false;
var c = document.getElementById('input').value;

function dis(val){
    document.getElementById('input').value+=val;
    document.getElementById('input').focus();
    
}
function eq(val){

    let i = document.getElementById('input').value;
        let r = eval(i);
        document.getElementById('input').value = r;
        document.getElementById('input').focus();
}
function pow(val){
    document.getElementById('input').value+=val;
    document.getElementById('input').focus();
    stat = true;
}
function cl(){
    c = "";
    document.getElementById('input').value = c;
    document.getElementById('input').focus();
}
function del(){
    let x = document.getElementById('input').value;
        x = x.substring(0, x.length - 1);
    document.getElementById('input').value = x;
    document.getElementById('input').focus();
}
var p = document.getElementById('input');
p.addEventListener('input', validate);
function validate(){
    let val = this.value.replace(new RegExp (/[^\d\+\-\/\*\%\=]/), "");
    this.value = val;
}