var addFile={
  js:function(path){
    var a=document.createElement("script");
    a.type = "text/javascript";
    a.src=path;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(a);
  },
  css:function(){
    var head = document.getElementsByTagName('HEAD').item(0);
    var style = document.createElement('link');
    style.href = path;
    style.rel = 'stylesheet';
    style.type = 'text/css';
    head.appendChild(style);
  }
}
function setStyleSheet(title){
  // 找到head
  var doc_head = document.head;
  // 找到所有的link标签
  var link_list = document.getElementsByTagName("link");
  if ( link_list ){
    for ( var i=0;i<link_list.length;i++ ){
      // 找到我们需要替换的link，
      // 一般情况下有些样式是公共样式，我们可以写到功能样式文件中，不用来做替换；
      // 这样可以避免每次替换的时候样式文件都很大；可以节省加载速度；
      if ( link_list[i].getAttribute("ty") === "theme" ){
        // 找到后将这个link标签重head中移除
        doc_head.removeChild(link_list[i]);
      }
    }
  }
  // 创建一个新link标签
  var link_style = document.createElement("link");
  // 对link标签中的属性赋值
  link_style.setAttribute("rel","stylesheet");
  link_style.setAttribute("type","text/css");
  link_style.setAttribute("href",title);
  link_style.setAttribute("ty","theme");
  // 加载到head中最后的位置
  doc_head.appendChild(link_style);
};
