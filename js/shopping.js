  

//   查询购物车中的信息，获取数据
  $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{
        id:"32951"                     
    }).then(data=>{
        console.log(data);
        // console.log(data.data[0].pimg);     
        var str1 = "";
        var str2 = "";
        for(let i in data.data)             //data.data[i].
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
                <td>￥${data.data[i].pnum * data.data[i].pprice}</td>
            </tr>
            `
        } 
        $("table").append(str1);

        
        // for(let i in data.data)             //data.data[i].
        // {
        //     str2 += `
        //         <div id="num1">商品合计：￥${data.data[i].pnum * data.data[i].pprice}</div>
        //         <p id="num2">应付总额￥${data.data[i].pnum * data.data[i].pprice}</p>
        //     `
        // } 
       
        // $(".shopp").append(str2);


    })















































