var datu=document.getElementById("datu");
var datu1=document.getElementById('datu1');
var zomimg=document.getElementsByClassName('zomimg')[0];
var bigZomimg=document.getElementsByClassName('big-zomimg')[0];
var zomimgHover=document.getElementsByClassName('zomimg-hover')[0];
var thumb=document.getElementsByClassName('thumb');
var select=document.getElementsByClassName('select');

//点击缩略图添加黑色边框
for(var key of thumb){
    key.onclick=function(){
        if(select.length==0){
            this.className='thumb select';
        }else{
           select[0].className='thumb';
           this.className='thumb select';
        }
    }
}

//点击缩略图切换大图
function change(src){
    datu1.src=src;
    datu.src=src;
}


//  1.鼠标覆盖显示zomimg和f放大图
zomimg.onmouseover = function(){
    bigZomimg.style.display = "block";
    zomimgHover.style.display = "block";
}
//  离开时隐藏
zomimg.onmouseout = function(){
    bigZomimg.style.display = "none";
    zomimgHover.style.display = "none";
}
//  2. 放大镜的移动范围
zomimg.onmousemove = function(e){
    //获取事件
    var e = e || window.event;
//       鼠标触摸的点与zomimg之间的距离
//鼠标与zomimg的边框之间的距离        放大镜宽度的一半//有问题，图片总是闪动回到top：0，left：0的位置
    var x=e.offsetX-zomimgHover.offsetWidth/2;
    var y=e.offsetY-zomimgHover.offsetHeight/2;
//鼠标与文档显示器之间的距离-zomimg与product-pic之间的距离-放大镜宽度的一半//有问题：鼠标不在放大镜的中心
    var x = e.clientX-zomimg.offsetLeft-zomimgHover.offsetWidth/2;
    var y = e.clientY-zomimg.offsetTop-zomimgHover.offsetHeight;
    console.log(e.offsetX);//
    console.log(e.offsetY);
    // console.log(zomimg.offsetLeft);//134
    // console.log(zomimg.offsetTop);//10
    // console.log(zomimgHover.offsetWidth);//200
    // console.log(zomimgHover.offsetHeight);//200
//       最大移动距离
    var maxX = zomimg.clientWidth-zomimgHover.offsetWidth;
    var maxY = zomimg.clientHeight-zomimgHover.offsetHeight;
//       边界判断
    if (x <= 0){
        x = 0;
    }else if (x >= maxX) {
        x = maxX;
    }
    if (y <= 0){
        y = 0;
    }else if(y >= maxY){
        y = maxY;
    }
//        fd的位置
    zomimgHover.style.left = x+'px';
    zomimgHover.style.top = y+'px';
    //zomimgHover/zomimg = bigZoming/datu1
    //移动比例
    var moveX = x/maxX;
    var moveY = y/maxY;
//      移动
//  3. bigzomimg的对应显示
//  对于大图而言,放大镜在小图上移动的比例相当于img在可显示区域上移动的比例
//  放大镜右移等于图片左移
//  也就是本质上为img-bigZoming 但是我们需要负值,则简化后为bigzomimg-datu1
    datu1.style.left = moveX*(bigZomimg.clientWidth - datu1.offsetWidth) + 'px';
    datu1.style.top = moveY*(bigZomimg.clientHeight - datu1.offsetHeight) + 'px';
}
