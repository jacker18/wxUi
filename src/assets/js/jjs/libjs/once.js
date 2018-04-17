//运行一次的函数
function once(fn, context) {
  var result;

  return function() {
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

// Usage
var canOnlyFireOnce = once(function() {
  console.log('Fired!');
});
