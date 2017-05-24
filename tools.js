
/**
 * 基于jQuery的常用工具类
 * @authors  (lingirlsea@126.com)
 * @date    2016-04-01 09:43:28
 * @version $Id$
 */

var tools = {
	isIE: function(ver) {
		var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
	};

};














