"use strict";

//   查询购物车中的信息，获取数据
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
  id: "32951"
}).then(function (data) {
  console.log(data); // console.log(data.data[0].pimg);     

  var str1 = "";
  var str2 = "";

  for (var i in data.data) //data.data[i].
  {
    str1 += "\n            <tr>\n                <td id=\"td1\">\n                 <img src=\"".concat(data.data[i].pimg, "\" alt=\"\">\n                 <p>").concat(data.data[i].pdesc, "</p>\n                </td>\n                <td>\uFFE5").concat(data.data[i].pprice, "</td>\n                <td>").concat(data.data[i].pnum, "</td>\n                <td>\uFFE5").concat(data.data[i].pnum * data.data[i].pprice, "</td>\n                <td>\uFFE5").concat(data.data[i].pnum * data.data[i].pprice, "</td>\n            </tr>\n            ");
  }

  $("table").append(str1); // for(let i in data.data)             //data.data[i].
  // {
  //     str2 += `
  //         <div id="num1">商品合计：￥${data.data[i].pnum * data.data[i].pprice}</div>
  //         <p id="num2">应付总额￥${data.data[i].pnum * data.data[i].pprice}</p>
  //     `
  // } 
  // $(".shopp").append(str2);
});