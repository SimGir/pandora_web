<template>
    <div class="outer">
        <pan-header></pan-header>
        <div class="box">
            <h1>收藏夹</h1>
            <div v-if="hasLove">
                <div class="row mx-5">
                    <div class="col pb-4">商品图片</div>
                    <div class="col pb-4 two">商品标题</div>
                    <div class="col pb-4 three">商品操作</div>
                </div>
                <div v-for="(love,i) of loves" :key="i" class="row mx-5">
                    <div class="col">
                        <img class="img" :src="love.img1" alt="">
                    </div>
                    <div class="col two">{{love.title}}</div>
                    <div class="col three">
                        <router-link class="detail-btn" :to="`/detail/${love.product_id}`">查看详情</router-link>
                        <button class="detail-btn" @click="cancelLove(love.product_id)">取消收藏</button>
                    </div>
                </div>
            </div>
            <div v-else class="no-love">
                <img src="img/shopping.gif"/>
                <h2>您还没有收藏商品哦~</h2>
            </div>
        </div>
    </div>
</template>
<script>
import funs from "../assets/js/funs";

export default {
    data(){
        return{
            loves:[],
            hasLove:false
        }
    },
    mounted(){
        this.load();
    },
    methods:{
        // 获取页面数据
        load(){
            funs.allLove(url).then((res)=>{
                //console.log(res);
                if(res.data.code===1){
                    if(res.data.data.length!==0){
                        this.hasLove = true;
                        this.loves = res.data.data;
                    }else{
                        this.hasLove=false;
                    }
                }else if(res.data.code===-2){
                    //用户未登录
                    var toLogin = confirm("您还未登录，请登录");
                    if(toLogin){
                        this.$router.push("/login");
                    }else{
                        this.$router.push("/index");
                    }
                }
            })
        },
        // 取消收藏
        cancelLove(pid){
            //console.log("pid:"+pid)
            let obj = {
                product_id:pid
            }
            funs.cancelLove(obj).then(()=>{
                this.load();
            })
        }
    }
}
</script>
<style scoped>
.outer{
    margin-top:165px;
}
.outer .box{
    width:720px;
    min-height:320px;
    margin:0 auto;
    padding:30px;
    border:1px solid #dbd9d9;
    box-shadow:0 0 5px 0px;
}
.outer .box>h1{
    text-align: center;
    margin-bottom: 30px;
}
.outer .row{
    display:flex;
    margin:0;
    align-items: center;
    border-bottom: 1px dashed;
}
.outer .col{
    flex-grow: 1;
    text-align: center;
    font-size: 16px;
}
.outer .two{
    flex-grow: 2;
}
.outer .three{
    flex-grow: 3;
}
.outer .img{
    width:60px;
    height:60px;
}
.outer .detail-btn{
    background-color:#F08080;
    color:#fff;
    padding:8px 12px;
    border-radius: 5px;
    font-size: 15px;
    border:0;
}
.outer .detail-btn+.detail-btn{
    margin-left:15px;
}
.outer .detail-btn:hover{
    color:#fff;
    opacity: 0.8
}
.outer .no-love{
    text-align: center;
}
.outer .no-love>h2{
    margin-top:20px;
}
</style>