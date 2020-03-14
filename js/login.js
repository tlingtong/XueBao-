$(function() {
    $("#loginBtn").click(function() {
      $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        username: $("#username").val(),
        password: $("#psw").val()
      }).then(data => {
        if (data.code == 1) {                    //如果输入用户名密码正确，则跳转到首页
          location.href = "index.html";
        } else {
          alert("用户名或者密码错误，请重试！");
        }
      });
    });
  });





  