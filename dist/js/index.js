"use strict";

// 点击二级导航中的其中一个，跳转到列表页，以其中的一个为例
var list = document.getElementById("list"); //获取其中的一个二级导航元素

list.onclick = function () {
  //加点击事件，跳转页面
  location.href = "productList.html";
};