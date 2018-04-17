function htmlDecode(str) {      //对特殊符号编译
    var t = document.createElement("div");
    t.innerHTML = str;
    return t.innerText || t.textContent
}