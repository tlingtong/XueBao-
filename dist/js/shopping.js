"use strict";

// 实现了通过接口把购物车数据取出，渲染到购物车页面，同时结算添加到购物车中的商品  
//   查询购物车中的信息，获取数据
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
  id: "32951" //参数为id

}).then(function (data) {
  console.log(data); //可以获取加入购物车的信息
  // console.log(data.data[0].pimg);     

  var str1 = ""; //定义空的字符串用来存放添加数据的标签

  for (var i in data.data) //data.data[i].   循环添加
  {
    str1 += "\n            <tr>\n                <td id=\"td1\">\n                 <img src=\"".concat(data.data[i].pimg, "\" alt=\"\">\n                 <p>").concat(data.data[i].pdesc, "</p>\n                </td>\n                <td>\uFFE5").concat(data.data[i].pprice, "</td>\n                <td>").concat(data.data[i].pnum, "</td>\n                <td>\uFFE5").concat(data.data[i].pnum * data.data[i].pprice, "</td>\n                <td>\uFFE5<span class=\"danPrice\">").concat(data.data[i].pnum * data.data[i].pprice, "</span></td>\n            </tr>\n            ");
  } // 将str渲染进table里


  $("table").append(str1); // 计算购物车总价

  var count = 0; //定义空的变量count，用来存放总价的值    

  $(".danPrice").each(function () {
    //循环遍历表格中存放单个总价的标签
    // console.log(parseInt($(this).text()));       //264  0  输出添加购物车商品的单个总价
    count += parseInt($(this).text()); //转为数字 +=给count赋值
  }); // console.log(count);                               //264  计算结果无误  

  $(".totalPrice").text(count); //将count值赋给页面中的总价
}); // //同样的点击页面的二级导航，分别也会转到对应的路径，此处只展示了一个

$(".list").click(function () {
  //获取其中的二级导航元素
  location.href = "productList.html"; //加点击事件，跳转页面
});