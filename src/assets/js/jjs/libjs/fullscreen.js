/**
 *
 * @param dom=》作用到dom点
 * @param type['full'=>全屏,'quit'=》"退出全屏"]
 */

function changeScreen(dom,type){
  var docElm = document.documentElement;
  if(type=="full"){
    dom.onclick=function(){
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
        //FireFox
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();

      }
      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  }else if(type=="quit"){
    dom.onclick=function(){
      if (document.exitFullscreen) {

        document.exitFullscreen();


      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();

      } else if (document.webkitCancelFullScreen) {

        document.webkitCancelFullScreen();

      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
  document.addEventListener("fullscreenchange", function() {
    // fullscreenState.innerHTML = (document.fullscreen) ? "" : "not ";
    console.log("1")
  }, false);

  document.addEventListener("mozfullscreenchange", function() {
    // fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";
    //
    console.log("2")
  }, false);

  document.addEventListener("webkitfullscreenchange", function() {
    // fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "" : "not ";
    console.log("3")
  }, false);

  document.addEventListener("msfullscreenchange", function() {
    // fullscreenState.innerHTML = (document.msFullscreenElement) ? "" : "not ";
  }, false);
}

//W3C

