"use strict";

$(function () {
  $("#regBtn").click(function () {
    // 1 验证用户名是否存在 获取接口
    $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
      username: $("#username").val()
    }, function (data) {
      if (data.code === 1) {
        // 如果code等于1说明用户名不重名，可以注册
        // 获取注册的接口
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
          username: $("#username").val(),
          password: $("#psw").val()
        }, function (data) {
          if (data.code == 1) {
            //注册成功，跳转到登录页面
            location.href = "login.html";
          }
        });
      } else {
        // 用户名不可用
        alert("用户重名");
      }
    });
  });
});