
// 实现了通过接口添加数据，然后再将数据取出来渲染到页面中,以及点击列表页面的导航，分别也会转到详情页

//  1.通过接口添加数据 
// $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//     pname:"实用品",
//     pprice:128.00,
//     pimg:"../img/01004.png",
//     pdesc:"守望先锋玻璃水杯",
//     uid:"32951"
// }).then(data=>{
//     console.log(data);
// })                                                

//此处只演示添加了洗护商品的四组数据
// 0: {pid: "198251", pname: "实用品", pprice: "128.00", pimg: "../img/01004.png", pdesc: "守望先锋玻璃水杯", …}
// 1: {pid: "198250", pname: "床上用品", pprice: "468.00", pimg: "../img/01003.png", pdesc: "床上四件套 魔兽世界", …}
// 2: {pid: "197049", pname: "洗护商品2", pprice: "88.00", pimg: "../img/01002.png", pdesc: "标志LOGO浴巾 魔兽世界", …}
// 3: {pid: "197048", pname: "洗护商品1", pprice: "0.00", pimg: "../img/01001.png", pdesc: "魔兽世界 阵营牙刷套装", …}


// 取数据 进行操作，将取到的数据渲染到商品列表页面 
$.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{
    uid:"32951"
}).then(data=>{
    console.log(data);      //这个可以取到data值
    // console.log(data.data[1].pname);  
    var str = "";

    for(let i in data.data)           // data.data[i]
    {
        // 分别将取到的信息添加到str中
        str += `
        <li>
            <a href="detail.html?id=${data.data[i].pid}"><img src="${data.data[i].pimg}"></a>
            <p>${data.data[i].pdesc}</p>
            <p>商城价：<span>${data.data[i].pprice}</span></p>
        </li>
        `;
};
console.log(str);

// 将str放进ul里，渲染页面
$("#proList").append(str);
})



// //同样的点击页面的二级导航，分别也会转到对应的路径，此处只展示了一个
$(".list").click(function(){                       //获取其中的二级导航元素
    location.href = "productList.html";            //加点击事件，跳转页面
})




















