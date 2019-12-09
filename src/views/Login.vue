<template>
    <div>
        <div class="container">
            <div class="parent2">
                <div class="d">
                <h3>登录</h3>
                <input class="input_1" type="email" placeholder="用户名*" v-model="uname">
                <input class="input_2" type="password" placeholder="密码*"  v-model="upwd">
                <div class="dd1">
                    <input id="rm" class="rm_1" type="checkbox">
                </div>
                <a href="javascript:;">忘记密码？</a>
                <div class="btn_login" @click="login"><a href="javascript:;" >登录</a></div>
                <router-link to="/register" class="reg">没有账号？注册</router-link>
                </div>
                <div class="d2" align="center">
                    <div class="cm_a1"><a  href="javascript:;">加入并获得福利</a></div>
                    <a class="cm_a2" href="javascript:;">作为PANDORA俱乐部会员，您可以享受轻松结账 专属优惠、特殊礼遇等更多服务</a>
                    <div class="btn_login1"><router-link to="/register">成为会员</router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import funs from "../assets/js/funs.js";
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            //获取到用户输入的用户名和密码
            var user_name = this.uname;
            var user_pwd = this.upwd;
            //创建正则表达式 3-12 字母数字
            var reg = /^[a-z0-9]{3,12}$/i;
            //验证用户名
            if(!reg.test(user_name)){
                alert("用户名格式有误,3-12位字母数字");
                return;
            }
            //验证密码
            if(!reg.test(user_pwd)){
                alert("密码格式有误,3-12位字母数字");
                return;
            }
            //发送ajax请求
            var url = "/login";
            var obj = {user_name,user_pwd};
            //console.log(obj);
            var callback = res=>{
                //console.log(res.data);
                if(res.data.code<0){
                    alert("用户名或密码有误")
                }else{
                    this.$router.push("/index");
                }
            }
            funs.login(url,obj,callback);
        }
    }
}
</script>

<style scoped>
@import '../assets/css/login.css';
h3{
    margin:0 auto;
    font-size:24px;
    letter-spacing: 10px;
}
</style>