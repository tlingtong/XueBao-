  

//   查询购物车中的信息，获取数据
  $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
        id:"32951"                          //参数为id
    }).then(data=>{
        console.log(data);                 //可以获取加入购物车的信息
        // console.log(data.data[0].pimg);     
        var str1 = "";                      //定义空的字符串用来存放添加数据的标签
        for(let i in data.data)             //data.data[i].   循环添加
        {
            str1 += `
            <tr>
                <td id="td1">
                 <img src="${data.data[i].pimg}" alt="">
                 <p>${data.data[i].pdesc}</p>
                </td>
                <td>￥${data.data[i].pprice}</td>
                <td>${data.data[i].pnum}</td>
                <td>￥${data.data[i].pnum * data.data[i].pprice}</td>
                <td>￥<span class="danPrice">${data.data[i].pnum * data.data[i].pprice}</span></td>
            </tr>
            `
        } 
        // 将str渲染进table里
        $("table").append(str1);


        // 计算购物车总价
        var count =  0;                                      //定义空的变量count，用来存放总价的值    
        $(".danPrice").each(function(){                     //循环遍历表格中存放单个总价的标签
            // console.log(parseInt($(this).text()));       //264  0  输出添加购物车商品的单个总价
             count += parseInt($(this).text());             //转为数字 +=给count赋值
        })
        // console.log(count);                               //264  计算结果无误  

        $(".totalPrice").text(count);                       //将count值赋给页面中的总价
        

    })















































