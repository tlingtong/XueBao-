"use strict";

$(function () {
  $("#loginBtn").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
      username: $("#username").val(),
      password: $("#psw").val()
    }).then(function (data) {
      if (data.code == 1) {
        location.href = "index.html";
      } else {
        alert("用户名或者密码错误，请重试！");
      }
    });
  });
});