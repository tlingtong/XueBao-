
 let pid = location.search.slice(4);
//  console.log(pid);                    //输出此路径的商品id，通过这个id来获取商品详细信息

$.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
   
    id:pid                              //参数id，将pid传进去，得到data
}).then(data=>{
    // console.log(data);
    // console.log(data.data.pimg);     

    // 分别将取到的信息添加到str中
    var str1 = `<img src="${data.data.pimg}" alt="">`;
    var str2 =  `
        <h2>${data.data.pdesc}</h2>
        <div class="price1">
            <h4>售价：<span>${data.data.pprice}</span></h4>
            <h4>服务：• 全场满88包邮 • 部分地区无法配送</h4>
        </div>
        <div class="xian"></div>
        <p>
            数量：
            <span id="minus">-</span>
            <input type="text" value = "1" id = "num">
            <span id="plus">+</span>
        </p>
        <input type="button" value = "加入购物车" id = "btn">
        `;


    console.log(str1);
    console.log(str2);

    // 将str放进ul里，渲染页面
    $("#deleft").append(str1);
    $("#deright").append(str2);

     // 给加号减号添加点击事件，如果点击数量减少，最少为1
     $("#minus").click(function(){
        // console.log($("#num"));
        // console.log($("#num").val());
        $("#num").val($("#num").val()-1);

        if($("#num").val() <= 1){
            $("#num").val("1");
        }
    })

    
    // // 给加号添加点击事件，如果点击则数量增加，预设库存最大为10
    $("#plus").click(function(){
        $("#num").val(+($("#num").val())+1);
        if($("#num").val() >= 10 ){
            $("#num").val("10");
        }
    })

    // 删除购物车数据
    //   $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php",{
    //     uid:"32951",
    //     pid:data.data.pid,  
    // }).then(data=>{
    //     console.log(data);
    // })


    // 点击加入购物车，点击的同时，利用接口将商品信息、加入个数等数据添加到购物车中，最后跳转购物车页面
    $("#btn").click(function(){
        // 添加购物车数据   添加成功即可
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
            uid:"32951",
            pid:data.data.pid,
            pnum:$("#num").val()   
        }).then(data=>{
            console.log(data);
        })
        location.href = "shopping.html"
    })










})
















