(function() {
  var toString = Object.prototype.toString;
  var fnToString = Function.prototype.toString;
  // 构造函数，数组
  var reHostCtor = /^\[object .+?Constructor\]$/;

  var reNative = RegExp('^' +
    // 强制转换（Object-toString）为字符串
    String(toString)
    // 转移特殊字符
      .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
      // 替换 `toString` 为 `.*?`， 保持模板通用
      // 替换 `for ...` 等字符来支持添加了额外信息的环境
      .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  function isNative(value) {
    var type = typeof value;
    return type == 'function'
      // 使用 `Function#toString` 来绕过value原生的 `toString` 方法，避免误判
      ? reNative.test(fnToString.call(value))
      // 回退到宿主对象检查。因为某些环境中，会将类型数组当做DOM方法。
      : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
  }

  module.exports = isNative;
}());

// Usage
isNative(alert); // true
isNative(myCustomFunction); // false
