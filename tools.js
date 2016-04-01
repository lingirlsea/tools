
/**
 * 基于jQuery的常用工具类
 * @authors  (lingirlsea@126.com)
 * @date    2016-04-01 09:43:28
 * @version $Id$
 */

var tools = {
	/**
	 * 点击页面中的某个元素时，鼠标将滚到对应元素所在的位置
	 * @param  targetID {String} [目标元素ID，#id]
	 * @param  fromTop  {Number} [距顶部的距离]
	 * @param  time     {Number} [时间，毫秒，默认300]
	 */
	scrollToElem: function(targetID, fromTop, time) {
		clearInterval(window.ACC25548C59CA2A);

	  var top, scrollTop, range, step;
	  
	  top = $(targetID).offset().top + 11 - (fromTop || 0);
	  scrollTop = $(document).scrollTop();
	  range = scrollTop - top;
	  
	  window.ACC25548C59CA2A = 1;
	  window.ACC25548C59CA2A = setInterval(function() {
	    step = range >= 0 ? Math.floor(range/10) : Math.ceil(range/10);
	    range -= step;
	    if(range === 10 || range === -10) {
	      clearInterval(window.ACC25548C59CA2A);
	    } else {
	      $(document).scrollTop(range + top);
	    }
	  }, parseInt((time || 300) / 20) );
	}
	
};














