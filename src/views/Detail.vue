<template>
    <div>
        <div class="container-fluid">
            <div class="menu">
                <div class="menu_top d-flex justify-content-between align-items-center">
                    <img name="left_arrow" src="img/big-left.png" alt="上一条">
                    <span>马上选购2019年秋季系列</span><input type="hidden" value="0">
                    <img name="right_arrow" src="img/big-right.png" alt="下一条">
                </div>
                <hr class="m-0">
                <div class="menu_bottom d-flex justify-content-between align-items-center">
                    <div class="menu_left w-50">
                        <img src="img/icon_menu.png" alt="">
                        <img src="img/icon_add.png" alt="">
                        <img src="img/logo.png" alt="">
                    </div>
                    <div class="menu_right d-flex align-items-center">
                        <img src="img/icon_search.png">
                        <input type="text" placeholder="搜索/输入产品ID">
                        <router-link to="/cart">
                            <img src="../../public/img/cart.png" title="购物车">
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- 面包屑导航 -->
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="gift.html">主页</a></li>
                <li class="breadcrumb-item"><a href="#">商品详情</a></li>
            </ul>
        
            <div class="total row mx-0">
                <!-- 图片显示区域 -->
                <div class="photo col-lg-7 col-sm-12 px-0">
                    <div class="d-flex">
                        <div class="small_photo d-flex flex-column align-items-center">
                            <img v-for="(pic,i) of proDetail.pics" :key="i" :src="pic.pics_small" @click="bigPhoto(i)" class="w-100"/>
                        </div>
                        <div class="big_photo">
                            <img :src="big_img"/>
                        </div>
                    </div>
                </div>
                <!-- 文字描述区域 -->
                <div class="text col-lg-5 col-sm-12 px-0">
                    <div>
                    <h2 class="text-center mt-5 mb-3">{{proDetail.product.title}}</h2>
                    <h5 class="text-center mb-5">{{proDetail.product.price.toFixed(2)}}</h5>
                    <div>
                        <div>
                            <div class="d-flex justify-content-between py-3 my-2 border-top font_small">
                                <span class="ml-0">选择尺寸</span>
                                <span class="mr-0">尺寸指南</span>
                            </div>
                            <div class="sel d-flex justify-content-between ">
                                <img :src="right_img"/>
                                <select name="size" id="size" v-model="pid" @change="toPage">
                                    <option v-for="(spec,i) of proDetail.specs" :key="i" :value="spec.product_id">
                                        {{spec.spec}}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <button class="btn btn-danger btn-pink w-100" @click="addCart">添加到购物车</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <!-- 详情描述 -->
            <div class="w-100">
                <img v-for="(detail,i) of proDetail.details" :key="i" :src="detail.details_img" alt="" class="w-100">
            </div>
            <toast :toast="toast" :show="show"></toast>
        </div>
    </div>
</template>
<script>
import funs from '../assets/js/funs.js';
export default {
    props:["product_id"],
    data(){
        return{
            proDetail:{
                pics:[],
                details:[],
                specs:[{spec:""}],
                product:{price:0}
            },
            pid:"1",
            big_img:"",
            right_img:"",
            toast:"",
            show:false
        }
    },
    watch:{
        product_id(){
            this.getAjax();
        }
        /* 在监视函数这里写this.$router.push()跳转，会报错 
        ,
        pid(){
            this.$router.push(`/detail/${this.pid}`);
        } */
    },
    created(){
        this.getAjax();
    },
    mounted(){
        this.load();
        window.addEventListener("scroll",this.handleScroll);
    },
    destroyed(){
        //切换到其他组件时，要移除鼠标滚动监听事件
        window.removeEventListener("scroll",this.handleScroll);
    },
    methods:{
        toPage(){
            this.$router.push("/detail/"+this.pid);
        },
        getAjax(){
            var url = "/detail";
            var product_id = this.product_id;
            var callback = (result)=>{  //!!!!!因为函数内部要用到this，所以必须用箭头函数
                //console.log(result.data);
                this.proDetail = result.data;
                this.pid = this.product_id;
                //将第一张大图保存下来当默认大图
                this.big_img = this.proDetail.pics[0].pics_big;
                //将第一张小图保存下来作为选择规格处的显示图片
                this.right_img = this.proDetail.pics[0].pics_small;
            };
            var obj = {product_id};
            funs.getDetail(url,obj,callback);
        },
        //商品添加到购物车
        addCart(){
            var url = "/addcart";
            var obj = {product_id:this.product_id};
            var callback = (result)=>{
                //console.log(result)
                this.toast = result.data.msg;
                if(result.data.code==-2){
                    var toLogin = confirm("您还未登录，请登录");
                    if(toLogin){
                        this.$router.push("/login");
                    }
                }else{
                    funs.toast.call(this);
                }
            }
            funs.addCart(url,obj,callback);
        },
        bigPhoto(i){
            var img = document.querySelector(".big_photo>img");
            var img_src = this.proDetail.pics[i].pics_big;
            //console.log(img_src);
            img.src = img_src;
        },
        handleScroll(){
            //鼠标滚动时，菜单栏固定在窗口
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
        },
        load(){
            var bigPhoto = document.querySelector(".big_photo");
            var imge = document.querySelector(".big_photo>img");
            //获取图片外面的div的宽度
            var wid = window.getComputedStyle(bigPhoto,null).width; //getPropertyValue("width");
            bigPhoto.style.cssText = `width:${wid};height:${wid}`;

            bigPhoto.onmousemove = function(e){
                imge.style.width = "180%";
                var x = -0.43*e.offsetX;  //获取鼠标相对于元素左上角的坐标
                var y = -0.43*e.offsetY;
                
                imge.style.marginLeft = x+"px";
                imge.style.marginTop = y+"px";
            }
            bigPhoto.onmouseleave = function(){
                imge.style.width = "100%";
                imge.style.margin = "0 auto";
            }

            
            var menu_top = document.getElementsByClassName("menu_top")[0];
            var input = menu_top.getElementsByTagName("input")[0];
            var span = menu_top.getElementsByTagName("span")[0];
            var arr= ["马上选购2019年秋季系列","购物满880元免邮费","提供礼品包装服务","七天无理由退换货"];
            menu_top.addEventListener("click",function(e){
                var n = input.value;
                //console.log(n);
                
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

        }
    }
}
</script>
<style scoped>
@import "../assets/css/gift_pro_detail.css";
</style>