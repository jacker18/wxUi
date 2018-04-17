/**
 * { function_description }
 *
 * @param      {<type>}  dom     需要操作的dom节点;
 * @param      {<type>}  opts    {minwidth:最小宽,minheight:最小高}
 */

function offsetMove(dom, opts) {
  this.WidW = Math.max(parseFloat(document.documentElement.clientWidth), parseFloat(document.body.clientWidth), parseFloat(window.outerWidth));
  this.WidH = Math.max(parseFloat(document.documentElement.clientHeight), parseFloat(document.body.clientHeight), parseFloat(window.outerHeight));
  this.Left = dom.offsetLeft;
  this.dom = dom;
  this.Top = dom.offsetTop;
  this.Width = dom.offsetWidth;
  this.Height = dom.offsetHeight;
  this.Right = this.Left + this.Width;
  this.Bottom = this.Top + this.Height;
  this.opts = opts;
  this.MinW = this.opts.minwidth || 80;
  this.MinH = this.opts.minheight || 80;
  this.foucusLine(dom);
  var self = this;
  this.bindMove(dom);
}

offsetMove.prototype.foucusLine = function (dom) {
  var self = this;
  dom.onmousemove = function (e) {
    var e = e || window.event;
    // console.log(self.Left,self.Right,self.Width,e.clientX)
    e.target.style.cursor = "pointer";
    if (e.clientX > self.Left - 8 && e.clientX < self.Left + 8) {
      e.target.style.cursor = "e-resize";
      self.bindMove(dom);
    } else if (e.clientX > self.Right - 8 && e.clientX < self.Right + 8) {
      e.target.style.cursor = "w-resize";
      self.bindMove(dom);
    } else if (e.clientY > self.Top - 8 && e.clientY < self.Top + 8) {
      e.target.style.cursor = "s-resize"
      self.bindMove(dom);
    } else if (e.clientY > self.Bottom - 8 && e.clientY < self.Bottom + 8) {
      e.target.style.cursor = "n-resize";
      self.bindMove(dom);
      console.log(self.Bottom,self.Top,self.Left,self.Right)
    }

  }

}

offsetMove.prototype.moveTo = function (e, dom) {
  var e = e || window.event;
  var self = this;
  if (e.type == "mousedown" && e.button == 0) {
    if (e.clientX > self.Left - 8 && e.clientX < self.Left + 8) {
      console.log(self.Left,e.clientX, "7779999")
      var x1 = e.clientX;
      document.onmousemove = function (ev) {
        e.target.style.cursor = "e-resize";
        var ev = ev || window.event;
        ev.preventDefault();
        ev.stopPropagation();
        var x2 = ev.clientX;
        var Width = self.Right - x2;
        if (Width < self.MinW) {
          dom.style.width = self.MinW + "px";
        } else {
          dom.style.width = Width + "px";
          dom.style.left = x2 + "px";
        }
      }
    } else if (e.clientX > self.Right - 8 && e.clientX < self.Right + 8) {
     dom.onmousemove = function (ev) {
        e.target.style.cursor = "w-resize";
        var ev = ev || window.event;
        ev.preventDefault();
        ev.stopPropagation();
        var x2 = ev.clientX;
        var Width = x2 - self.Left;

        if (Width < self.MinW) {
          dom.style.width = self.MinW + "px";
        } else {
          dom.style.width = Width + "px";
        }

      }
    } else if (e.clientY > self.Top - 8 && e.clientY < self.Top + 8) {
      dom.onmousemove = function (ev) {
        e.target.style.cursor = "s-resize";
        var ev = ev || window.event;
        ev.preventDefault();
        ev.stopPropagation();
        var x2 = ev.clientY;
        var Height = self.Bottom - x2;
        if (Height < self.MinH) {
          dom.style.height = self.MinH + "px";
        } else {
          dom.style.height = Height + "px";
          dom.style.top = x2 + "px";
        }

      }
    } else if (e.clientY > self.Bottom - 8 && e.clientY < self.Bottom + 8) {
      dom.onmousemove = function (ev) {
        e.target.style.cursor = "n-resize";
        var ev = ev || window.event;
        ev.preventDefault();
        ev.stopPropagation();
        var x2 = ev.clientY;
        var Height = x2 - self.Top;
        if (Height < self.MinH) {
          dom.style.height = self.MinH + "px";
        } else {
          dom.style.height = Height + "px";
        }

      }
    }
  } else if (e.type == "mouseup" && e.button == 0) {
    self.Left = dom.offsetLeft;
    self.dom = dom;
    self.Top = dom.offsetTop;
    self.Width = dom.offsetWidth;
    self.Height = dom.offsetHeight;
    self.Right = this.Left + this.Width;
    self.Bottom = this.Top + this.Height;
   dom.onmousemove = null;
    self.foucusLine(dom);
  }
}
offsetMove.prototype.bindMove = function (dom) {
 dom.onmousedown = function (e) {
    var e=e||window.event;
    self.moveTo(e, dom);
  }
  dom.onmouseup = function (e) {
   var e=e||window.event;
    self.moveTo(e, dom);

  }
}

module.exports = offsetMove;
