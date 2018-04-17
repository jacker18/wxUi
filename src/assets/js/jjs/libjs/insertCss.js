var sheet = (function() {
  var style = document.createElement('style');

  // WebKit 兼容
  style.appendChild(document.createTextNode(''));

  document.head.appendChild(style);
  return style.sheet;
})();

// Usage
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);
