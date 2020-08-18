<template>
    <div>
        <div class="container">
            <!-- banner start -->
            <div class="banner">
                <div class="banner-top"><p>情人节浪漫礼物</p></div>
                        <router-link to="http://www.baidu.com">
                            <img src="img/hero.png" alt=""/>
                        </router-link>
                <div class="banner-middle">
                    <div class="content-box">
                        <p>情人节珠宝礼物，比言语更加"动听"</p>
                        <h1>真心流露</h1>
                        <button class="btn btn-outline-light w-60 dropdown-toggle">探索更多</button>
                    </div>
                </div> 
            </div>
            <!-- banner end -->

            <!-- 情人节套组 start-->
            <div id="valen" class="valentine">
                <h2>人气情人节套组</h2>
                <!-- 商品展示 -->
                <div class="my-big">
                    <div class="valen-prod d-flex d-inline-flex flex-nowrap">
                        <div class="prod_box border border-light pb-5" v-for="(pro,i) of pros.bracelet" :key="i">
                            <div class="po-abs-top" v-if="pro.mark" >人气畅销</div>
                            <router-link :to="`detail/${pro.product_id}`">
                                <img class="pro" :alt="pro.title" :title="pro.title" :src="pro.img1" @mouseover="imgChange($event,pro.img2)" @mouseout="imgRecovery($event,pro.img1,pro.img2)"/>
                            </router-link>
                            <p>{{pro.title}}</p>
                            <p>{{pro.price.toFixed(2)}} CNY</p>
                            <div :data-id="i" data-category="bracelet" class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark addcart">
                                    把整套添加到购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage('valen')" class="last_page"></div>
                    <div @click="nextPage('valen')" class="next_page"></div>
                </div>

                <a href="" class="btn btn-dark w-25 mt-5">立即选购</a>
            </div>
            <!-- 情人节套组 end-->

            <!-- 全新搭配串饰 start-->
            <div id="chuan" class="valentine mb-5">
                <h2>全新搭配串饰</h2>
                <!-- 串饰商品展示-->
                <div class="my-big">
                    <div class="valen-prod d-flex flex-nowrap">
                        <div class="prod_box border border-light pb-5" v-for="(pro,i) of pros.chuan" :key="i">
                            <div class="po-abs-top" v-if="pro.mark" >人气畅销</div>
                            <router-link :to="`detail/${pro.product_id}`">
                                <img class="pro" :alt="pro.title" :title="pro.title" :src="pro.img1" @mouseover="imgChange($event,pro.img2)" @mouseout="imgRecovery($event,pro.img1,pro.img2)"/>
                            </router-link>
                            <p>{{pro.title}}</p>
                            <p>{{pro.price.toFixed(2)}} CNY</p>
                            <div :data-id="i" data-category="chuan" class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark addcart">
                                    把整套添加到购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage('chuan')" class="last_page"></div>
                    <div @click="nextPage('chuan')" class="next_page"></div>
                </div>
            </div>
            <!-- 全新搭配串饰 end-->

            <!-- 按价格浏览 start-->
            <div class="bg-pink w-100 pt-4 pb-5">
                <h2 class="text-center my_font_family">按价格浏览</h2>
                <div class="d-flex justify-content-center mt-4">
                    <img src="img/right.png" /><span class="my_font_family font-20 mr-5">1000元以下礼品</span>
                    <img src="img/right.png" /><span class="my_font_family font-20">1000-2500元礼品</span>
                </div>
            </div>
            <!-- 按价格浏览 end-->

            <!-- 帮她搭配一副耳饰 start-->
            <div id="earring" class="valentine mb-5">
                <h2>帮她搭配一副耳饰</h2>
                <!-- 耳饰商品展示-->
                <div class="my-big">
                    <div class="valen-prod d-flex flex-nowrap">
                        <div class="prod_box border border-light pb-5" v-for="(pro,i) of pros.earring" :key="i">
                            <div class="po-abs-top" v-if="pro.mark" >人气畅销</div>
                            <router-link :to="`detail/${pro.product_id}`">
                                <img class="pro" :alt="pro.title" :title="pro.title" :src="pro.img1"  @mouseover="imgChange($event,pro.img2)" @mouseout="imgRecovery($event,pro.img1,pro.img2)"/>
                            </router-link>
                            <p>{{pro.title}}</p>
                            <p>{{pro.price.toFixed(2)}} CNY</p>
                            <div :data-id="i" data-category="earring" class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark addcart">
                                    把整套添加到购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage('earring')" class="last_page"></div>
                    <div @click="nextPage('earring')" class="next_page"></div>
                </div>
            </div>
            <!-- 帮她搭配一副耳饰 end-->


            <!--图片展示 start-->
            <div class="row mx-0 mt-4">
                <div class="col-lg-6 col-md-12 px-0">
                    <div class="mr-lg-2 mb-sm-3 my-big">
                        <img class="w-100" src="img/collage-tall.jpg" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <p>让她感动的更多方式</p>
                            <p>情人节礼物创意</p>
                            <button class="btn btn-dark text-white">查看我们的指南</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 px-0">
                    <div class="ml-lg-2 my-big">
                        <img class="w-100" src="img/collage-medium.png" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <button class="btn btn-dark text-white small_btn">
                                礼物套装
                            </button>
                        </div>
                    </div>
                    <div class="ml-lg-2 my-big">
                        <img class="w-100 mt-3" src="img/collage-small.png" alt=""/>
                        <div class="box_left po-abs-left-bottom">
                            <p>448.00 CNY 起</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--图片展示 end-->

            <!-- 她会喜欢的戒指  start-->
            <div id="ring" class="valentine mb-5">
                <h2>她会喜欢的戒指</h2>
                <div class="my-big">
                    <div class="valen-prod d-flex flex-nowrap">
                        <div class="prod_box border border-light pb-5" v-for="(pro,i) of pros.ring" :key="i">
                            <div class="po-abs-top" v-if="pro.mark">人气畅销</div>
                            <router-link :to="`detail/${pro.product_id}`">
                                <img class="pro" :alt="pro.title" :title="pro.title" :src="pro.img1"  @mouseover="imgChange($event,pro.img2)" @mouseout="imgRecovery($event,pro.img1,pro.img2)"/>
                            </router-link>
                            <p>{{pro.title}}</p>
                            <p>{{pro.price.toFixed(2)}} CNY</p>
                            <div :data-id="i" data-category="ring" class="d-flex buy justify-content-center mt-5">
                                <div class="bg-dark addcart">
                                    把整套添加到购物车
                                </div>
                                <div title="加入收藏" class="love">
                                    <img src="img/heart_1.png" alt=""/>
                                    <input type="hidden" value="false">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <!--左右切换的箭头-->
                    <div @click="lastPage('ring')" class="last_page"></div>
                    <div @click="nextPage('ring')" class="next_page"></div>
                </div>
            </div>
            <!-- 她会喜欢的戒指 end-->

            <!-- 仍在寻找完美礼物 start-->
            <div class="parent mt-5 w-75">
                <h1 class="text-center">仍在寻找完美礼物</h1>
                <!-- 您的预算 -->
                <div class="card mt-5">
                    <div data-toggle="collapse" data-target="#one" class="card-header py-4">
                        您的预算是多少？
                        <img src="img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="one" class="collapse mb-5">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <img src="img/right.png" /><span class="my_font_family font-20 ">1000元以下礼品</span>
                                </div>
                                <div class="col-4">
                                    <img src="img/right.png" /><span class="my_font_family font-20">1000-2500元礼品</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 想送给谁 -->
                <div class="card">
                    <div data-toggle="collapse" data-target="#two" class="card-header py-4">
                        想送给谁？
                        <img src="img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="two" class="collapse mb-5">
                        <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送母亲</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送老婆/女朋友</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送好友</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送儿童</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送毕业生</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">送伴娘</span>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

                <!-- 按主题浏览 -->
                <div class="card">
                    <div data-toggle="collapse" data-target="#three" class="card-header py-4">
                        按主题浏览
                        <img src="img/big_bottom.png" class="float-right" alt=""/>
                    </div>
                    <div id="three" class="collapse mb-5">
                        <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">生日祝福</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">新婚礼物</span>
                                    </div>
                                    <div class="col-4">
                                        <img src="img/right.png" /><span class="my_font_family font-20">浪漫爱情</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 仍在寻找完美礼物 end-->

            <!-- last part start-->
            <div class="last_part">
                <h1 class="text-center">送给她的情人节礼物</h1>
                <p class="text-center">了解我们的珠宝系列并找到适合女友、妻子或闺蜜的完美个性化情人节礼物。我们精美的手工制作珠宝不仅气质典雅，更采用了925银、18k金镀层925银芯和PANDORA Rose等上乘材料。</p>
            </div>
            <!-- last part end-->  
        </div>
    </div>
</template>

<script>
import funs from "@/assets/js/funs.js";
export default {
    data(){
        return {
            pros:{
                bracelet:[],
                chuan:[],
                ring:[],
                earring:[]
            }
        }
    },
    created(){
        var url = "/gift";
        var page_name="gift";
        var obj = {page_name};
        var callback = (result)=>{
            this.pros = result.data;
            //console.log(this.pros);
        }
        funs.getGift(obj).then(res=>{
            this.pros = res.data;
            //console.log(this.pros);
        }).then(this.fun1)

    },
    mounted(){
        window.addEventListener("resize",this.updateProWidth);  
    },
    beforeDestroy(){
        //当切换到其他页面时，移除窗口监听事件
        window.removeEventListener("resize",this.updateProWidth);
    },
    methods:{
        //上一页
        lastPage(sname){
            var obj = document.getElementById(sname);
            var valen_prod = obj.getElementsByClassName("valen-prod")[0];
            valen_prod.style.marginLeft = "0";
        },
        //下一页
        nextPage(sname){
            var obj = document.getElementById(sname);
            var valen_prod = obj.getElementsByClassName("valen-prod")[0];
            
            valen_prod.style.marginLeft = "-100%";
        },
        //鼠标悬停时切换图片
        imgChange(e,str){  //x表示当前对象
            //console.log(str)
            if(str!=null){
                e.target.src = str;
            }
        },
        //鼠标移除时变为原图
        imgRecovery(e,str1,str2){
            if(str2!=null){
                e.target.src = str1;
            }
        },
        //当窗口发生变化时，调整显示商品box的宽度，使每次显示3个商品
        updateProWidth(){
            //当网页中显示商品区域的宽度
            var my_big_width = document.getElementsByClassName("my-big")[0].offsetWidth;
            //重新设置商品框的宽度，等于显示商品区域的1/3
            var pro_box = document.getElementsByClassName("prod_box");
            for(var i=0;i<pro_box.length;i++){
                //!!!!注意，一定要拼接上长度单位，只有数值是不可以设置宽高的
                pro_box[i].style.width = 1/3*my_big_width + "px";
                //console.log(pro_box[i].style.width)
            }
        },
        fun1(){
            //dom树加载完成后，获取显示内容的宽度，给显示商品的box重新设置宽度
            this.updateProWidth();
            var prod_boxs= document.querySelectorAll("div.my-big>.valen-prod>div");
            for(var prod_box of prod_boxs){
                //鼠标悬停时显示购买框
                prod_box.onmouseenter = function(){
                    var buy = this.querySelector(".buy");
                    buy.style.visibility = "visible";
                }
                //鼠标移走时隐藏购买框
                prod_box.onmouseleave = function(){
                    //flag=false; 商品未加入收藏时，购买框随着鼠标移出而隐藏
                    //flag=true; 商品加入收藏后，购买框不随鼠标移出而隐藏
                    var flag = this.querySelector("input").value;
                    //console.log(flag);
                    var buy = this.querySelector(".buy");
                    if(flag=="false"){
                        buy.style.visibility = "hidden";
                    }
                }
            }
            //监听浏览器宽度的改变，已将其封装到updateProWidth方法中
            //window.addEventListener("resize",this.updateProWidth);
            /* window.onresize = ()=>{
                this.updateProWidth();
            } */

            //找到所有class = buy的元素，添加商品到购物车
            var addCarts = document.querySelectorAll(".addcart");
            //console.log(addCarts);
            for(var addCart of addCarts){
                addCart.onclick = (e)=>{
                    var cart = e.target;
                    //console.log(cart);
                    //获取商品的id
                    var i = cart.parentElement.dataset.id;
                    //获取商品所属的分类
                    var category=cart.parentElement.dataset.category;
                    //console.log(i,category)
                    var product_id = this.pros[category][i].product_id;
                    //console.log(product_id);
                    var obj = {product_id};
                    funs.addCart(obj).then((result)=>{
                        //console.log(result)
                        if(result.data.code==-2){
                            var toLogin = confirm("您还未登录，请登录");
                            if(toLogin){
                                this.$router.push("/login");
                            }else{
                                this.$router.push("/index");
                            }
                        }else{
                            this.$store.dispatch("showToast", result.data.msg)
                        }
                    })
                }
            }
            //找到所有class = love的元素
            var loves = document.querySelectorAll(".buy>.love");
            for(var love of loves){
                //鼠标悬停，显示收藏提示——黑色心
                love.onmouseenter = function(){
                    var imgChange = this.querySelector("img");
                    imgChange.src = "img/heart_2.png";
                }
                //鼠标移除，不显示收藏提示——白色心
                love.onmouseleave = function(){
                    var flag = this.querySelector("input").value;
                    var imgRecovery = this.querySelector("img");
                    if(flag == "false"){
                        imgRecovery.src = "img/heart_1.png";
                    }   
                }
                //商品添加收藏
                love.onclick = (e)=>{
                    //console.log(e.target);
                    //这里的e.target是img元素，具体就是那张图片
                    var img = e.target;

                    var flag = img.parentElement.querySelector("input").value;
                    //获取商品的id
                    var i = img.parentElement.parentElement.dataset.id;
                    //获取商品所属的分类
                    var category=img.parentElement.parentElement.dataset.category;
                    var product_id = this.pros[category][i].product_id;
                    //console.log(product_id);
                    if(flag == "false"){
                        img.src = "img/heart_2.png";
                        //加入收藏后，购买框不隐藏
                        img.parentElement.parentElement.style.visibility = "visible";
                        //flag置true，该元素鼠标移出时的变空心的事件不执行，父元素鼠标移出时购买框隐藏的事件不执行
                        img.parentElement.querySelector("input").value="true";
                        
                        //发送请求，将数据添加到数据库
                        var obj = {product_id};
                        funs.getLove(obj).then((result)=>{
                            //console.log(result.data);
                            if(result.data.code==-2){
                                var toLogin = confirm("您未登录，请登录");
                                if(toLogin){
                                    this.$router.push("/login");
                                }
                            }else{
                                this.$store.dispatch("showToast", result.data.msg)
                            }
                        })
                    }else{
                        //已收藏的商品，再次点击时取消收藏，黑心变白心
                        img.src = "img/heart_1.png";
                        img.parentElement.querySelector("input").value = "false";

                        //发送请求，将数据添加到数据库
                        var obj = {product_id};
                        funs.cancelLove(obj).then((result)=>{
                            //console.log(result.data);
                            if(result.data.code==-2){
                                var toLogin = confirm("您未登录，请登录");
                                if(toLogin){
                                    this.$router.push("/login");
                                }
                            }else{
                                this.$store.dispatch("showToast", result.data.msg)
                            }
                        })

                    }
                }
            }
        }
    }
}
</script>
<style scoped>
@import "../assets/css/gift.css";

</style>