function showPic(whichpic) {
    if (!document.getElementById('placeholder')) return false;
        var source = whichpic.getAttribute('href'); //获取href的数值
        var placeholder = document.getElementById('placeholder'); //获得placeholder的元素
        placeholder.setAttribute('src',source);
    if (document.getElementById('description')) {
        var text = whichpic.getAttribute('title');
        var description = document.getElementById('description');
        description.firstChild.nodeValue = text;
    } return true;

}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName('body')[0];
//     alert(body_element.nodeType);
// }
// window.onload = countBodyChildren;

// function popUp(winurl) {
//     window.open(winurl,'popUp','width=320,height=480');
// }

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function prepareGallery() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);

        }
    }
}
addLoadEvent(prepareGallery);
