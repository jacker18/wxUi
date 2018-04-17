function center(dom){
    dom.style.position = 'absolute';
    dom.style.top = '50%';
    dom.style.left = '50%';
    dom.style['margin-top'] = - dom.offsetHeight / 2 + 'px';
    dom.style['margin-left'] = - dom.offsetWidth / 2 + 'px';
}