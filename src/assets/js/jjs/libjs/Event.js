const Ev={
  bindEvent:function(dom,event,handler,capture){
    var capture=capture||false;
    // var hanlder=handler;
    console.log("正在绑定")
    if(document.addEventListener){
      dom.addEventListener(event,handler,capture);
    }else if (document.attachEvent){
      dom.attachEvent('on'+event,handler);
    }else{
      dom['on'+event]=fn;
    }
  },
  removeEvent:function(dom,event,handler,capture){
    // var hanlder=handler;
    var capture=capture||false;
    console.log("正在移除")
    if(window.removeEventListener){ // Mozilla, Netscape, Firefox
      dom.removeEventListener(event, handler, capture);
    } else if(window.attachEvent) { // IE
      dom.detachEvent('on'+event, handler);
    } else {
      dom['on'+event]=null;
    }
  }
}

module.exports=Ev;
