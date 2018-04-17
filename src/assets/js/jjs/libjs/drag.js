const Ev=require('./Event');

function moveDrag(dom, movedom) {
  var self = this;
  this.WidW = Math.max(parseFloat(document.documentElement.clientWidth), parseFloat(document.body.clientWidth), parseFloat(window.outerWidth));
  this.WidH = Math.max(parseFloat(document.documentElement.clientHeight), parseFloat(document.body.clientHeight), parseFloat(window.outerHeight));


  window.onmousedown = function (e) {
    // self.Left=dom.offsetLeft;
    // self.Top=dom.offsetTop;
    // self.Right=self.Left+dom.offsetWidth;
    // self.Bottom=self.Top+dom.offsetHeight;
    // console.log(self.Left,self.Top,self.Right,self.Bottom)
    // console.log(e,"y277272")
    var e = e || window.event;
    e.stopPropagation();
    var x1 = e.clientX;
    var y1 = e.clientY;
    // Ev.bindEvent(document, 'mousemove', ,false)
    // if(x1>self.Left&&x1<self.Right&&y1>self.Top&&y1<self.Bottom){
    //
    // }
    if(e.target==dom){
      self.moveTo(x1, y1, movedom,true);
    }

  }
  window.onmouseup = function (e) {//可能会划出浏览器窗口，无法判断鼠标抬起事件，因此此处不能用document作为事件对象
    var e = e || window.event;
    e.stopPropagation();
    // e.preventDefault();
    var x1 = e.clientX;
    var y1 = e.clientY;
    // document.removeEventListener("mousemove", self.moveTo(dom))
    // Ev.removeEvent(document, 'mousemove', ),false)

    self.moveTo(x1, y1, movedom,false);
  }
}
moveDrag.prototype.moveTo = function (x, y, dom,bool) {
  var domLeft = dom.offsetLeft;
  var domTop = dom.offsetTop;
  var x1 = x;
  var y1 = y;
  if(bool==true){
    document.onmousemove = function (e) {
      var e = e || window.event;
      // e.preventDefault();
      e.stopPropagation();
      var X = e.clientX;
      var Y = e.clientY;
      var Left=dom.offsetLeft;
      var Top=dom.offsetTop;
      var Wid=dom.offsetWidth;
      var Hei=dom.offsetHeight;
      if(Y<0){
        dom.style.top ="0px";
      }else{
        dom.style.top = (domTop + Y - y1) + "px";
      }
      dom.style.left = (domLeft + X - x1) + "px";
      // if(X>Left&&X<Left+Wid&&Y>Top&&Y<Top+Hei){
      //   console.log(domTop + Y - y1,domLeft + X - x1)
      //   dom.style.top = (domTop + Y - y1) + "px";
      //   dom.style.left = (domLeft + X - x1) + "px";
      //   // y1=dom.offsetTop;
      //   // x1=dom.offsetLeft
      // }else{
      //   document.onmousemove =null;
      // }
    }
  }else{
    document.onmousemove =null;
  }

}
module.exports=moveDrag;
