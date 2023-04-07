function getDate() {
  var date = new Date();
  var y = date.getFullYear();
  y = y + "";
  var m = date.getMonth();
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var mi = date.getMinutes();
  mi = mi < 10 ? "0" + mi : mi;
  var s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  var now = y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
  return now;
}
var nowdate = getDate(); //获取当前时间

//判断是否位数组的两种方法
var arr = [];
// console.log(arr instanceof Array);
// console.log(Array.isArray(arr));
//字符重新赋值，是重新增加了一个内存空间，原内存空间还在，重复赋值字符串，会导致内存溢出，仅限于字符
function Person(color) {
  console.log(this);
  this.color = color;
  this.getColor = function () {
    console.log(this);
    return this.color;
  };
  this.setColor = function (color) {
    console.log(this);
    this.color = color;
  };
}

Person("red"); //this指向 window

var p = new Person("yello"); //this指向 p

p.getColor(); //this指向 p

var obj = {};
p.setColor.call(obj, "black"); //this指向 obj

var test = p.setColor;
test(); //this指向 window

function fun1() {
  function fun2() {
    console.log(this);
  }

  fun2(); //this指向 window
}
fun1();
