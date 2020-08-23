<template>
    <header>
        <div class="header">
            <div class="hd-left">
                <div class="hd-search">
                    <!-- <i class="iconfont icon-search"></i> -->
                    <img class="search" src="../../public/img/search.svg" alt="搜索icon" />
                    <input v-model="proName" type="search" placeholder="搜索/输入产品ID" />
                    <input type="submit" value="go"/>
                    <button @click="searchPro">搜索</button>
                </div>
                <div class="hd-right">
                    <div class="login-part">
                        <!-- <span>登录</span> -->
                        <img src="../../public/img/person.svg">
                        <div class="user-link">
                            <div class="buttons">
                                <div class="register" @click="()=>{this.$router.push({path:'/login'})}">
                                    登录
                                </div>
                                <div class="register" @click="()=>{this.$router.push({path:'/register'})}">
                                    注册
                                </div>
                                <div class="sel-order">
                                    <router-link to="/myorder">我的订单</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <router-link to="/love">
                            <img title="我的收藏" src="../../public/img/love.svg">
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/cart">
                            <img title="我的购物车" style="color:red" src="../../public/img/cart.svg">
                        </router-link>
                    </div>
                </div>
                <div class="logo">
                    <router-link to="/index">
                        <img src="../../public/img/logo.svg" alt="logo"/>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="nav-center">
                <span>新品上市</span>
                <span>人气礼物推荐</span>
                <span>串饰</span>
                <span>手链</span>
                <span>项链与吊坠</span>
                <span>戒指</span>
                <span>耳环</span>
                <span>产品系列</span>
                <router-link to="/gift">
                    <span>礼品</span>
                </router-link>
                <span>灵感</span>
            </div>
        </div>
    </header>
</template>
<script>
import funs from "../assets/js/funs.js"
export default {
    data(){
        return {
            proName:""
        }
    },
    methods:{
        //搜索商品
        searchPro(){
            if(this.proName===""){
                return;
            }else{
                var obj = {title: this.proName};
                funs.searchPro(obj).then(
                    (res)=>{
                        if(res.data.success){
                            var pid = res.data.data[0].product_id;
                            this.$router.push("/detail/"+pid);
                        }else{
                            this.$store.dispatch("showToast",res.data.msg)
                        }
                    }
                )
            }
        }
    }
}
</script>
<style scoped>
@import "../assets/css/index.css";
@import '../assets/css/header.css';
header{
    margin-bottom:100px;
}
</style>