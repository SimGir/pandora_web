var bigPhoto = document.querySelector(".big_photo");
var imge = document.querySelector(".big_photo>img");
//获取图片外面的div的宽度
var wid = window.getComputedStyle(bigPhoto,null).width;//getPropertyValue("width");
bigPhoto.style.cssText = `width:${wid};height:${wid}`;

bigPhoto.onmousemove = function(){
    imge.style.width = "180%";
    var x = -0.43*e.offsetX;  //获取鼠标相对于元素左上角的坐标
    var y = -0.43*e.offsetY;
    console.log("鼠标过来了")
    
    imge.style.marginLeft = x+"px";
    imge.style.marginTop = y+"px";
}
bigPhoto.onmouseout = function(){
    console.log("鼠标离开了")
    imge.style.margin = "0 auto";
}

//鼠标滚动时，菜单栏固定在窗口
window.onscroll = function(){
    //鼠标滚动的距离
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var menu = document.getElementsByClassName("menu")[0];
    var hr = menu.getElementsByTagName("hr")[0];
    if(scrollTop>100){
        hr.style.visibility = "visible";
        menu.style.cssText = "position:fixed;top:0;width:90%;";
    }else{
        hr.style.visibility = "hidden";
        menu.style.cssText = "position:static;width:100%;";
    }
}

var menu_top = document.getElementsByClassName("menu_top")[0];
var input = menu_top.getElementsByTagName("input")[0];
var span = menu_top.getElementsByTagName("span")[0];
var arr= ["马上选购2019年秋季系列","购物满880元免邮费","提供礼品包装服务","七天无理由退换货"];
menu_top.addEventListener("click",function(e){
    var n = input.value;
    console.log(n);
    
    if(e.target.nodeName === "IMG"){
        if(e.target.name === "left_arrow"){
            n--;
            if(n<0) n=3;
        }else{
            n++;
            if(n>3) n=0;
        }
        input.value = n;
        span.innerHTML = arr[n];
    }
});
//定时器，轮播服务
setInterval(function(){
    var n = input.value;n++;
    if(n>3) n=0;
    input.value = n;
    span.innerHTML = arr[n];
},2000);
