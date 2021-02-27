function sleep() {
    i++;
        if (i >2) {
            i =0;
            arr = makeText();
        }
        scroll.innerHTML = "";
        start();
}
function makeText() {
    var text = 'Sublime Text';
    var text1 = 'Brackets';
    var text2 = 'Visual Studio Code';

    var stext = text.split('');
    var stext1 = text1.split('');
    var stext2 = text2.split('');

    var ourArray = [stext,stext1,stext2];
    return(ourArray);
}
var arr = makeText();
var scroll = document.getElementById('scroll');

var loop;
var i = 0;
function start() {
    if (arr[i].length > 0) {
        scroll.innerHTML += arr[i].shift() ;
        loop = setTimeout(start,200);
  
    }
    else {
        setTimeout(sleep,2000);    
    }
}
start();