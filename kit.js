



// 处理整型
var foo = (8.7/2)|0; // 4
var bar = ~~(9.1/3); // 3

// 字符串查重
function hasAnother(str) {
	return !/^.*(.).*\1/i.test(str);
}

// http://stackoverflow.com/questions/7202157/why-does-return-the-string-10
++[[]][+[]]+[+[]] == 10 // true

Array.apply(null, Array(3)).map(Function.prototype.call.bind(Number)); // [0, 1, 2]
