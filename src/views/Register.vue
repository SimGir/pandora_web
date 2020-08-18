<template>
    <div>
        <div class="container">
            <div class="parent1"> 
                <div class="d">
                    <h3>注册</h3>
                    <input class="input_1" type="text" placeholder="姓名*" name="cname" v-model="uname">
                    <div class="nesscity ">姓名只能输入3-12个字母数字</div>
                    <input class="input1" type="password" placeholder="密码*" name="password" v-model="upwd">
                    <div class="nesscity">密码只能输入6-18个字母、数字</div>
                    <input class="input_2" type="password" placeholder="确认密码*" name="isPassword" v-model="upwd1">
                    <div class="nesscity">两次密码输入不一致</div>
                    <div>
                        <input id="cb_yes"  class="c1" type="checkbox">
                       
                    </div>
                    <div class="btn_register" @click="register"><p>创建账户</p></div>
                    <router-link to="/login">已有账号？登录</router-link>
                </div>
                <div class="d2">
                    <p class="p1">加入并获得福利</p>
                    <p class="p2">作为PANDORA俱乐部会员，您可以享受轻松结账、专属优惠、特殊礼遇等更多服务。</p>
                    <div class="btn_login1"><router-link to="/login">前往登录</router-link></div>
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
            upwd:"",
            upwd1:""
        }
    },
    methods:{
        register(){
            var user_name = this.uname;
            var user_pwd = this.upwd;
            var str = `user_name=${user_name}&user_pwd=${user_pwd}`;
            funs.register(str).then((res)=>{
                //console.log(res);
                if(res.data.code==-1){
                    console.log("注册失败")
                }else{
                    alert("注册成功，前往登录");
                    this.$router.push("/login");
                }
            })
        }
    },
    mounted(){
        var cname=document.getElementsByName("cname")[0];
        var pwd=document.getElementsByName("password")[0];
        var isPwd=document.getElementsByName("isPassword")[0];
        function vali(txt,reg){
            var div=txt.nextElementSibling;
            if(reg.test(txt.value)){
                div.className="";
                div.innerHTML="";
            }else{
                div.className="nesscity";
                div.style.display="block";
                txt.style.marginBottom="2px";
                div.style.margin="6px 0 23px 0";
            }  
        }	
        pwd.onblur=function(){
            var reg=/^[a-z0-9]{3,12}$/;
            vali(this,reg);
        }
        cname.onblur=function(){
            var reg=/^[a-z0-9]{3,12}$/i;
            vali(this,reg);
        }
        isPwd.onblur=function(){
            var div=this.nextElementSibling;
            if(this.value==pwd.value){
                div.className="";
                div.innerHTML="";
            }else{
                div.className="nesscity";
                div.style.display="block";
                this.style.marginBottom="2px";
                div.style.margin="6px 0 23px 0";
            }
        }
    }
}
</script>

<style scoped>
@import '../assets/css/register.css';
h3{
    margin:0 auto;
    font-size:24px;
    letter-spacing: 10px;
}
a{
    color:#fff;
    font-size:16px;
}
</style>