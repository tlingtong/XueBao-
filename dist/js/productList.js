"use strict";

//  1.通过接口添加数据 
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//     pname:"洗护商品2",
//     pprice:88,
//     pimg:"../img/01002.png",
//     pdesc:"标志LOGO浴巾 魔兽世界",s
//     uid:"32951"
// }).then(data=>{
//     console.log(data);
// })
// 取数据 进行操作，将取到的数据渲染到商品列表页面 ，  只演示了"洗护"的跳转页面
$.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
  uid: "32951"
}).then(function (data) {
  // console.log(data);      //这个可以取到data值
  // console.log(data.data[1].pname);  
  var str = "";

  for (var i in data.data) // data.data[i]
  {
    // 分别将取到的信息添加到str中
    str += "\n        <li>\n            <a href=\"detail.html?id=".concat(data.data[i].pid, "\"><img src=\"").concat(data.data[i].pimg, "\"></a>\n            <p>").concat(data.data[i].pdesc, "</p>\n            <p>\u5546\u57CE\u4EF7\uFF1A<span>").concat(data.data[i].pprice, "</span></p>\n        </li>\n        ");
  }

  ;
  console.log(str); // 将str放进ul里，渲染页面

  $("#proList").append(str);
}); //同样的点击列表页面的导航，分别也会转到对应的路径，此处只展示了一个

var list = document.getElementById("list");

list.onclick = function () {
  location.href = "productList.html";
}; // 点击列表，跳转到详情页