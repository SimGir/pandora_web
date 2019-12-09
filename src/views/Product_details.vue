<template>
    <div>
        <pan-header></pan-header>
        <div class="container">
        <div class="headder"></div>
        <div class="breadcrumb">
            <ul>
                <li class="first">
                    <i class="iconfont icon-fangxiangjiantou-xiangzuo"></i>
                    <router-link to="/stringing" href="javascript:;">返回</router-link>
                    <span>|</span>
                </li>
                <li class="two">
                    <router-link to="/" href="javascript:;">主页</router-link>
                    <i class="iconfont icon-you"></i>
                </li>
                <li class="third">
                    <a href="javascript:;">串饰</a>
                    <i class="iconfont icon-you"></i>
                </li>
            </ul>
        </div>
        <div class="product">
            <div class="product-pic">
                <div class="thumb-container">
                    <div class="thumb select">
                        <img src="img/image_04.jpg"    onclick="change(this.src)" alt="">
                    </div>
                    <div class="thumb">
                        <img src="img/image_17.jpg"    onclick="change(this.src)" alt="">
                    </div>
                    <div class="thumb">
                        <img src="img/image_10.jpg"    onclick="change(this.src)" alt="">
                    </div>
                    <div class="thumb">
                        <img src="img/image_05.jpg"    onclick="change(this.src)" alt="">
                    </div>
                </div>
                <div class="zomimg">
                    <img src="img/image_04.jpg" id="datu"  alt="">
                    <div class="zomimg-hover"></div>
                </div>
                <div class="big-zomimg">
                    <img src="img/image_31.jpg" id='datu1' alt="">
                </div>
                <div class="product-det">
                    <h2 class="product-title"> 璀璨深蓝色串饰</h2>
                    <p class="product-price"> 598.00 CNY</p>
                    <p class="product-desc">金属色&nbsp;银</p>
                    <p class="product-desc">人气畅销</p>
                    <button class="shoppingcar">加入购物车</button>
                </div>
            </div>
        </div>
        <div class="service">
            <div class="service-left">
                <span>商品资料</span>
                <p>以这款迷人的月光蓝串饰照亮夜空。它以925银精心打造，镶嵌璀璨的深蓝色，环绕闪石。侧面心形镂空细节进一步提升美感。可搭配925银手链，亦可作为潘多拉项链上的耀眼吊坠。</p>
            </div>
            <div class="service-right">
                <ul class="section-content">
                    <li>
                        <span class="label">材质</span>
                        <span class="value">无其他特殊材质</span>
                    </li>
                    <li>
                        <span class="label">金属</span>
                        <span class="value">925银</span>
                    </li>
                    <li>
                        <span class="label">宝石</span>
                        <span class="value">Mixed stones</span>
                    </li>
                    <li>
                        <span class="label">主题</span>
                        <span class="value">闪耀的心</span>
                    </li>
                </ul>
                <ul class="section-content">
                    <li>
                        <span class="label">类目</span>
                        <span class="value">串饰</span>
                    </li>
                    <li>
                        <span class="label">商品编号</span>
                        <span class="value">797125NMB</span>
                    </li>
                    <li>
                        <span class="label">尺寸</span>
                        <span class="value">厚度：12.2毫米</span>
                        <span class="value">高度：11.4毫米</span>
                        <span class="value">厚度：11.4毫米</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <pan-footer></pan-footer>
    </div>
</template>

<script>
export default {
    mounted(){
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
            // 鼠标触摸的点与zomimg之间的距离
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
    }
}
</script>

<style scoped>
@import "../assets/css/product_detail.css";
</style>