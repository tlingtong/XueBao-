"use strict";

// 实现了在列表页点击商品进入对应详情页，通过接口取对应的数据渲染到详情页中
// 并且在详情页中用户可选择商品的数量来加入购物车，点击购物车将商品加入到购物车中，最后跳转购物车页面
var pid = location.search.slice(4); //从地址栏来获取详情页的id
//  console.log(pid);                    //输出此路径的商品id，通过这个id来获取商品详细信息
// 利用接口取商品详情的数据，再将取得的数据渲染到页面中

$.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
  id: pid //参数id，将pid传进去，得到data

}).then(function (data) {
  // console.log(data);
  // console.log(data.data.pimg);     
  // 分别将取到的信息添加到str中
  var str1 = "<img src=\"".concat(data.data.pimg, "\" alt=\"\">");
  var str2 = "\n        <h2>".concat(data.data.pdesc, "</h2>\n        <div class=\"price1\">\n            <h4>\u552E\u4EF7\uFF1A<span>").concat(data.data.pprice, "</span></h4>\n            <h4>\u670D\u52A1\uFF1A\u2022 \u5168\u573A\u6EE188\u5305\u90AE \u2022 \u90E8\u5206\u5730\u533A\u65E0\u6CD5\u914D\u9001</h4>\n        </div>\n        <div class=\"xian\"></div>\n        <p>\n            \u6570\u91CF\uFF1A\n            <span id=\"minus\">-</span>\n            <input type=\"text\" value = \"1\" id = \"num\">\n            <span id=\"plus\">+</span>\n        </p>\n        <input type=\"button\" value = \"\u52A0\u5165\u8D2D\u7269\u8F66\" id = \"btn\">\n        ");
  console.log(str1);
  console.log(str2); // 将str放进ul里，渲染页面

  $("#deleft").append(str1);
  $("#deright").append(str2); // 给加号减号添加点击事件，如果点击数量减少，最少为1

  $("#minus").click(function () {
    // console.log($("#num"));
    // console.log($("#num").val());
    $("#num").val($("#num").val() - 1);

    if ($("#num").val() <= 1) {
      $("#num").val("1");
    }
  }); // // 给加号添加点击事件，如果点击则数量增加，预设库存最大为10

  $("#plus").click(function () {
    $("#num").val(+$("#num").val() + 1);

    if ($("#num").val() >= 10) {
      $("#num").val("10");
    }
  }); // 删除购物车数据
  //   $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
  //     uid:"32951",
  //     pid:data.data.pid,  
  // }).then(data=>{
  //     console.log(data);
  // })
  // 点击加入购物车，点击的同时，利用接口将商品信息、加入个数等数据添加到购物车中，最后跳转购物车页面
  // 此处要先设置点击事件，在点击加入购物车后，才利用添加购物车数据，将用户想要的商品存在购物车中。

  $("#btn").click(function () {
    // 添加购物车数据   添加成功即可
    $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
      uid: "32951",
      //利用接口，参数用户uid,商品pid，加入商品的数量pnum
      pid: data.data.pid,
      pnum: $("#num").val()
    }).then(function (data) {
      console.log(data); //加入成功
    });
    location.href = "shopping.html"; //最后跳转到购物车页面
  }); // //同样的点击页面的二级导航，分别也会转到对应的路径，此处只展示了一个

  $(".list").click(function () {
    //获取其中的二级导航元素
    location.href = "productList.html"; //加点击事件，跳转页面
  });
});