function showPic(whichpic) {
    var source = whichpic.getAttribute('href'); //获取href的数值
    var placeholder = document.getElementById('placeholder'); //获得placeholder的元素
    var text = whichpic.getAttribute('title');
    var description = document.getElementById('description');
    placeholder.setAttribute('src',source);
    description.firstChild.nodeValue = text;
}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName('body')[0];
//     alert(body_element.nodeType);
// }
// window.onload = countBodyChildren;
