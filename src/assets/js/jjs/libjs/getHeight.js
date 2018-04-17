/**
 *
 * @param dom 类型包括{window,docuemnt,document.docuemntElement,一般性到dom}
 * @returns {{wid: *, hei: *}}
 */

function getWH(dom) {
	var Wid, Hei;
	if (dom.navigator !== undefined) {
		//窗口高度是取消了菜单的高度；
		if (dom.innerWidth !== undefined) {
			Wid = window.innerWidth; //可视区宽度
			Hei = window.innerHeight; //可视区高度
		} else if (document.compatMode === "CSS1Compat") {
			Wid = document.documentElement.clientWidth; //可视区宽度
			Hei = document.documentElement.clientHeight; //可视区高度
		} else {
			Wid = document.body.clientWidth; //可视区宽度
			Hei = document.body.clientWidth; //可视区高度
		}
	} else {
		var Name = dom.nodeName;
		Name = Name.toLowerCase();
		if (Name.indexOf("document") > -1 || Name.indexOf("html") > -1) {
			if (document.compatMode === "CSS1Compat") {
				Wid = document.documentElement.clientWidth; //可视区宽度
				Hei = document.documentElement.clientHeight; //可视区高度
			} else {
				Wid = document.body.clientWidth; //可视区宽度
				Hei = document.body.clientWidth; //可视区高度
			}
		} else {
			Wid = dom.offsetWidth;
			Hei = dom.offsetHeight;
		}

	};
	return { wid: Wid, hei: Hei }
}
