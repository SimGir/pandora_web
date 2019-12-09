<template>
    <header>
        <div class="header">
            <div class="hd-left">
                <div class="hd-search">
                    <i class="iconfont icon-search"></i>
                    <input v-model="proName" type="search" placeholder="搜索/输入产品ID" style="padding-left:10px;"/>
                    <input type="submit" value="go"/>
                    <button @click="searchPro">搜索</button>
                </div>
                <div class="hd-right">
                    <ul class="list-unstyled">
                        <li>
                            <a href="">查找店铺</a>
                        </li>
                        <li>
                            <router-link to="">登录</router-link>
                            <div class="user-link">
                                <div class="user-link-brank"></div>
                                <div class="buttons">
                                    <div class="login">
                                        <router-link to="/login">登录</router-link>
                                    </div>
                                    <div class="register">
                                        <router-link to="/register">注册新账号</router-link>
                                    </div>
                                    <div class="sel-order">
                                        <router-link to="/myorder">我的订单</router-link>
                                    </div>
                                </div>
                                <div class="text">
                                    <p>注册潘多拉官方账号，您将享受快捷结账、专享优惠，还有愿望清单等更多定制服务</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <router-link to="/love">
                                <img title="我的收藏" src="../../public/img/love.png">
                                <!-- <i title="我的收藏" class="iconfont icon-02"></i> -->
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/cart">
                                <img title="我的购物车" style="color:red" src="../../public/img/cart.png">
                                <!-- <i class="iconfont icon-56"></i> -->
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="logo">
                    <a href="">
                        <img src="https://cn.pandora.net/on/demandware.static/Sites-zh-CN-Site/-/default/dw7e89e471/images/Pandora_Logo.svg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="nav-center">
                <ul class="list-unstyled">
                    <li class="n-li1">
                        <a href="">
                            <span>新品上市</span>
                            <i></i>
                        </a>
                        <div class="menu">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu-left">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="">2019初秋系列</a>
                                    </li>
                                    <li>
                                        <a href="">2019活力盛夏系列</a>
                                    </li>
                                    <li>
                                        <a href="">浪漫桃花系列</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src="img/menu1.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li2">
                        <a href="">
                            <span>人气礼物推荐</span>
                            <i></i>
                        </a>
                        <div class="menu1">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu1-left">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="">畅销手链套组</a>
                                    </li>
                                    <li>
                                        <a href="">畅销项链套组</a>
                                    </li>
                                    <li>
                                        <a href="">优惠套装</a>
                                    </li>
                                    <li>
                                        <a href="">关晓彤同款</a>
                                    </li>
                                    <li>
                                        <a href="">爱情主题珠宝推荐❤</a>
                                    </li>
                                    <li>
                                        <a href="">人气单品</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src="img/menu2.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li3">
                        <router-link to="/stringing">
                            <span>串饰</span>
                            <i></i>
                        </router-link>
                        <div class="menu2">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu2-left">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="">最受欢迎串饰</a>
                                    </li>
                                    <li>
                                        <a href="">串饰</a>
                                    </li>
                                    <li>
                                        <a href="">PANDORA Reflexions 系列串饰</a>
                                    </li>
                                    <li>
                                        <a href="">小串饰</a>
                                    </li>
                                    <li>
                                        <a href="">吊饰</a>
                                    </li>
                                    <li>
                                        <a href="">固定夹</a>
                                    </li>
                                    <li>
                                        <a href="">安全链</a>
                                    </li>
                                    <li>
                                        <a href="">小装饰</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="d1">
                                <div class="d1-menu1">
                                    <p>闪耀的心</p>
                                    <p>花卉</p>
                                    <p>爱</p>
                                    <p>童话</p>
                                    <p>字母数字</p>
                                </div>
                                <div class="d1-menu2">
                                    <p>迪士尼</p>
                                    <p>旅行</p>
                                    <p>星空</p>
                                    <p>几何光辉</p>
                                    <p>星座</p>
                                </div>
                                <div class="d1-menu3">
                                    <p>亲情友情</p>
                                    <p>雪花与圣诞</p>
                                    <p>象征符号</p>
                                    <p>动物</p>
                                </div>
                                <ul class="list-unstyled menu-ul">
                                    <li>925银</li>
                                    <li>14K</li>
                                    <li>双色</li>
                                    <li>琉璃</li>
                                    <li>Pandora Rose</li>
                                    <li>Pandora Shine</li>
                                </ul>
                            </div>
                            <div class="ig">
                                <img src="img/menu3.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li4">
                        <a href="">
                            <span>手链</span>
                            <i></i>
                        </a>
                        <div class="menu3">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu3-left">
                                <ul class="list-unstyled">
                                    <li><a href="">手链套组推荐</a></li>
                                    <li><a href="">最受欢迎手链</a></li>
                                    <li><a href="">串饰手链</a></li>
                                    <li><a href="">PANDORA Reflexions系列手链</a></li>
                                    <li><a href="">手镯</a></li>
                                    <li><a href="">手链</a></li>
                                    <li><a href="">开口式手链</a></li>
                                    <li><a href="">尺寸指南</a></li>
                                    <li><a href="">手链挑选指南</a></li>
                                </ul>
                            </div>
                            <div class="menu3-center">
                                <ul class="list-unstyled">
                                    <li><a href="">925银</a></li>
                                    <li><a href="">14K金</a></li>
                                    <li><a href="">双色</a></li>
                                    <li><a href="">织物</a></li>
                                    <li><a href="">皮革</a></li>
                                    <li><a href="">Pandora Rose</a></li>
                                    <li><a href="">Pandora Shine</a></li>
                                </ul>
                            </div>
                            <div class="menu3-right">
                                <img src="img/menu4.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li5">
                        <a href="">
                            <span>项链与吊坠</span>
                            <i></i>
                        </a>
                        <div class="menu4">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu4-left">
                                <ul class="list-unstyled">
                                    <li><a href="">项链套组推荐</a></li>
                                    <li><a href="">最受欢迎项链</a></li>
                                    <li><a href="">项链</a></li>
                                    <li><a href="">基础链</a></li>
                                    <li><a href="">串饰项链</a></li>
                                    <li><a href="">吊坠</a></li>
                                    <li><a href="">吊坠盒及小装饰</a></li>
                                    <li><a href="">尺寸指南</a></li>
                                </ul>
                            </div>
                            <div class="menu4-center">
                                <ul class="list-unstyled">
                                    <li>925银</li>
                                    <li>14K</li>
                                    <li>双色</li>
                                    <li>珐琅</li>
                                    <li>Pandora Rose</li>
                                    <li>Pandora Shine</li>
                                </ul>
                            </div>
                            <div class="menu4-right">
                                <img src="img/menu5.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li6">
                        <a href="">
                            <span>戒指</span>
                            <i></i>
                        </a>
                        <div class="menu5">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu5-left">
                                <ul class="list-unstyled">
                                    <li><a href="">最受欢迎戒指</a></li>
                                    <li><a href="">戒指</a></li>
                                    <li><a href="">可叠带戒指</a></li>
                                    <li><a href="">生日石戒指</a></li>
                                    <li><a href="">尺寸指南</a></li>
                                </ul>
                            </div>
                            <div class="menu5-center">
                                <ul class="list-unstyled">
                                    <li>925银</li>
                                    <li>14K金</li>
                                    <li>双色</li>
                                    <li>宝石</li>
                                    <li>珐琅</li>
                                    <li>Pandora Rose</li>
                                    <li>Pandora Shine</li>
                                </ul>
                            </div>
                            <div class="menu5-right">
                                <img src="img/menu6.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li7">
                        <a href="">
                            <span>耳环</span>
                            <i></i>
                        </a>
                        <div class="menu6">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu6-left">
                                <ul class="list-unstyled">
                                    <li><a href="">最受欢迎耳环</a></li>
                                    <li><a href="">耳钉</a></li>
                                    <li><a href="">耳坠</a></li>
                                    <li><a href="">耳钉沟</a></li>
                                </ul>
                            </div>
                            <div class="menu6-center">
                                <ul class="list-unstyled">
                                    <li>925银</li>
                                    <li>珐琅</li>
                                    <li>宝石</li>
                                    <li>Pandora Rose</li>
                                    <li>Pandora Shine</li>
                                </ul>
                            </div>
                            <div class="menu6-right">
                                <img src="img/menu7.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li8">
                        <a href="">
                            <span>产品系列</span>
                            <i></i>
                        </a>
                        <div class="menu7">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu7-left">
                                <ul class="list-unstyled">
                                    <li><a href="">初秋珠宝系列</a></li>
                                    <li><a href="">夏季珠宝系列</a></li>
                                    <li><a href="">浪漫桃花系列</a></li>
                                    <li><a href="">Pandora Garden系列</a></li>
                                    <li><a href="">挚真美愿系列</a></li>
                                    <li><a href="">PANDORA ROSE系列</a></li>
                                    <li><a href="">PANDORA SHINE系列</a></li>
                                    <li><a href="">PANDORA Reflexions系列</a></li>
                                    <li><a href="">PANDORA经典系列</a></li>
                                    <li><a href="">迪士尼系列</a></li>
                                    <li><a href="">亲朋好友系列</a></li>
                                    <li><a href="">美好时刻系列</a></li>
                                    <li><a href="">旅行系列</a></li>
                                </ul>
                            </div>
                            <div class="menu7-right">
                                <img src="img/menu8.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li9">
                        <router-link to="/gift">
                            <span>礼品</span>
                        </router-link>
                        <div class="menu8">
                            <div class="blank"></div>
                            <!-- <i class="iconfont icon-xiajiantou"></i> -->
                            <div class="menu8-left">
                                <p>礼物挑选指南</p>
                                <ul class="list-unstyled">
                                    <li><a href="">送礼指南 — 情人节礼物推荐</a></li>
                                    <li><a href="">送礼指南 — 圣诞礼物推荐</a></li>
                                    <li><a href="">送礼指南 — 婚礼礼物推荐</a></li>
                                    <li><a href="">送礼指南 — 生日礼物推荐</a></li>
                                    <li><a href="">送礼指南 — 祝贺她的重要成就</a></li>
                                    <li><a href="">送礼指南 — 给最特别的人</a></li>
                                    <li><a href="">送礼指南 — 纪念日礼物推荐</a></li>
                                    <li><a href="">送礼指南 — 祝贺新生儿和新妈妈</a></li>
                                    <li><a href="">送礼指南 — 母亲节礼物推荐</a></li>
                                </ul>
                            </div>
                            <div class="menu8-center">
                                <p>挑选合适的礼物</p>
                                <div class="menu8-ct-left">
                                    <p>礼品套装</p>
                                    <p>生日礼物</p>
                                    <p>浪漫爱情</p>
                                    <p>拼出密语</p>
                                    <p>新婚礼物</p>
                                </div>
                                <div class="menu8-ct-right">
                                    <p>送母亲</p>
                                    <p>送朋友</p>
                                    <p>送新生儿</p>
                                    <p>送老婆/女友</p>
                                    <p>送毕业生</p>
                                    <p>伴娘赠礼</p>
                                </div>
                            </div>
                            <div class="menu8-right">
                                <img src="img/menu9.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                    <li class="n-li10">
                        <a href="">
                            <span>灵感</span>
                            <i></i>
                        </a>
                        <div class="menu9">
                            <div class="blank"></div>
                            <i class="iconfont icon-xiajiantou"></i>
                            <div class="menu9-left">
                                <ul class="list-unstyled">
                                    <li><a href="">关晓彤 爱不可挡</a></li>
                                    <li><a href="">Pandora珠宝品牌宣传片</a></li>
                                    <li><a href="">搜索你的时尚风格</a></li>
                                    <li><a href="">致敬迪士尼狮子王</a></li>
                                    <li><a href="">蓝色迷情风格</a></li>
                                    <li><a href="">漫游几何纹理风格</a></li>
                                    <li><a href="">前卫优雅风格</a></li>
                                    <li><a href="">都市冒险系列</a></li>
                                    <li><a href="">打破成规系列</a></li>
                                    <li><a href="">小贝拉家族的新朋友-恐龙迪诺</a></li>
                                    <li><a href="">探索Pandora Reflextions系列</a></li>
                                    <li><a href="">手链挑选指南</a></li>
                                    <li><a href="">浪漫桃花系列</a></li>
                                    <li><a href="">更多品牌灵感故事</a></li>
                                </ul>
                            </div>
                            <div class="menu9-right">
                                <img src="img/menu10.jpg" alt=""/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div> 
        <div class="toast" :class="show?'show':''">{{msg}}</div>
    </header>
</template>
<script>
import funs from "../assets/js/funs.js"
export default {
    data(){
        return {
            proName:"",
            show:false,
            msg:""
        }
    },
    methods:{
        //搜索商品
        searchPro(){
            if(this.proName==""){
                return;
            }else{
                var url = "/searchpro";
                var obj = {title:this.proName};
                var callback = (res)=>{
                    //console.log(res)
                    if(res.data.code==1){
                        var pid = res.data.data[0].product_id;
                        this.$router.push("/detail/"+pid);
                    }else{
                        this.show = true;
                        this.msg = "没有查找到该商品";
                        setTimeout(()=>{
                            this.show = false;
                        },3000);
                    }
                }
                funs.searchPro(url,obj,callback);
            }
        }
    }
}
</script>
<style scoped>
@import "../assets/css/index.css";
@import '../assets/css/header.css';
@import "//at.alicdn.com/t/font_1357872_a69stxrzzv.css";
header{
    margin-bottom:100px;
}
.toast{
    width:150px;
    height:35px;
    line-height: 35px;
    border-radius: 5px;
    font-size:16px;
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin:auto;
    background: rgba(0,0,0,0.7);
    color:#fff;
    z-index:2000;
    text-align: center;
    display:none;
}
.show{
    display:block;
}
</style>