"use strict";

// 点击二级导航，实现跳转详情页
$(".list").click(function () {
  //获取其中的二级导航元素
  location.href = "productList.html"; //加点击事件，跳转页面
}); //轮播图：
// 1.封装函数Slider

function Slider() {
  // 获取news区域
  this.news = document.querySelectorAll(".news")[0]; // 获取轮播区域mainBox

  this.mainBox = document.querySelectorAll(".mainBox")[0]; // 获取div 元素所在区域newListAll

  this.newListAll = this.mainBox.querySelectorAll(".newListAll")[0]; // 获取每个列表newlist  a

  this.newlist = this.newListAll.children; // 取列表newlist的长度，即a的个数

  this.length = this.newlist.length; // 获取newlist的单位宽度

  this.perWidth = this.newlist[0].offsetWidth; // 执行自动轮播

  this.autoPlay(); // 清除定时器，不自动轮播

  this.clear();
} // 2.添加自动轮播方法


Slider.prototype.autoPlay = function () {
  var _this = this;

  this.count = 0;
  this.timer = setInterval(function () {
    _this.move();
  }, 2000);
}; // 3.添加移动方法


Slider.prototype.move = function () {
  this.count++; // 对于轮播区域的运动的判断 

  if (this.count == this.length - 4) {
    //因为这个轮播图的范围是4个列表，每运动一个，都要保证后面的不为空
    this.newListAll.style.left = 0;
    this.count = 1; //最后一张添加的猫腻列表，如果达到条件，则位置到第二个位置即下标为1
  }

  if (this.count == -1) {
    this.count = this.length - 6;
    this.newListAll.style.left = -this.perWidth * (this.length - 4) + "px";
  } // 引用运动函数startMove，整体left值为 （宽度 + 15）* count
  // 加15是因为css中设置每个列a有15px的右边距


  startMove(this.newListAll, {
    "left": -(this.perWidth + 15) * this.count
  });
}; // 4.鼠标划入划出事件，清除、添加定时器函数


Slider.prototype.clear = function () {
  var _this2 = this;

  this.news.onmouseover = function () {
    clearInterval(_this2.timer);
  };

  this.news.onmouseout = function () {
    _this2.timer = setInterval(function () {
      _this2.move();
    }, 2000);
  };
}; // 5.左右按钮事件


Slider.prototype.addBtn = function () {
  var _this3 = this;

  // 获取按钮区域
  this.btns = document.querySelector(".btns"); // 获取左右按钮

  this.btnlr = this.btns.children; // 左箭头点击事件

  this.btnlr[0].onclick = function () {
    _this3.count -= 2;

    _this3.move();

    console.log("向左移动");
  }; // 右键头点击事件


  this.btnlr[1].onclick = function () {
    _this3.move();

    console.log("向右移动");
  };
};