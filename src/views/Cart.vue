<template>
    <div class="outer">
        <pan-header></pan-header>
        <div class="box">
            <h1>购物车</h1>
            <div v-if="hasPro">
                <div class="row mx-5">
                    <div class="col p-0 checkbox">
                        <p>全选</p>
                        <input v-model="allChecked" type="checkbox">
                    </div>
                    <div class="col pb-4 two">图片</div>
                    <div class="col pb-4 three">标题</div>
                    <div class="col pb-4 two">规格</div>
                    <div class="col pb-4 two">单价</div>
                    <div class="col pb-4 three">数量</div>                    
                    <div class="col pb-4 three">小计</div>                    
                    <div class="col pb-4 two">操作</div>
                </div>
                <div v-for="(pro,i) of carts" :key="i" class="row mx-5">
                    <div class="col p-0">
                        <input @change="changeAllChecked" v-model="pro.checked" type="checkbox">
                    </div>
                    <div class="col two">
                        <img class="img" :src="pro.img1" alt="">
                    </div>
                    <div class="col three">{{pro.title}}</div>
                    <div class="col two">
                        {{pro.spec}}
                    </div>
                    <div class="col two">￥{{pro.price.toFixed(2)}}</div>
                    <div class="col three change-num">
                        <button :data-i="i" data-num="-1" :disabled="pro.counts==1" @click="numChange($event)">-</button>
                        <input type="text" :data-i="i" @change="numChange($event)" v-model="pro.counts" @keyup="testInput($event)">
                        <button :data-i="i" data-num="+1" @click="numChange($event)">+</button>
                    </div>
                    <div class="col three">￥{{(pro.price*pro.counts).toFixed(2)}}</div>
                    <div class="col two">
                        <button class="detail-btn" @click="delCart(i,pro.product_id,pro.title)">删除</button>
                    </div>
                </div>
                <div class="mx-5 my-4 order">
                    <h2>总计：<span class="total">￥{{total.toFixed(2)}}</span></h2>
                    <button @click="toOrder" class="go-order">结算({{buyNum}})</button>
                </div>
            </div>
            <div v-else class="no-love">
                <img src="img/shopping.gif"/>
                <h2>您还没有加购商品哦~</h2>
            </div>
        </div>
        <toast :show="show" :toast="toast"></toast>
    </div>
</template>
<script>
import funs from "../assets/js/funs";
export default {
    data(){
        return{
            carts:[{price:0}],  // 购物车中的商品
            hasPro:false,  // 购物车是否有商品
            toast:"",  // toast的内容
            show:false,  // 控制toast的显示与隐藏
            allChecked:false,  // 全选按钮的值
            orders:[]  // 勾选的商品，传递给订单页的数据
        }
    },
    mounted(){
        this.load();
    },
    computed:{
        // 商品总价
        total(){
            // 统计所有被选中的商品的合计价格
            return this.carts.reduce((total,val,i)=>{
                if(val.checked){
                    return total += val.price*val.counts;
                }else{
                    return total;
                }

            },0);
            //console.log(sum)
        },
        // 商品购买的件数
        buyNum(){
            var buyNum = 0;
            this.carts.forEach((val,i)=>{
                if(val.checked){
                    buyNum++;
                }
            })
            return buyNum;
        }
    },
    watch:{
        // 如果全选按钮被选中，将影响下面每一个商品选项
        allChecked(){
            if(this.allChecked){
                this.carts.forEach((val,i)=>{
                    val.checked = true;
                })
            }else{
                //检查是否每一个商品都被勾选了
                var allChecked = this.carts.every((val,i)=>{
                    return val.checked===true
                })
                // 如果每个商品都被勾选，那么全选按钮取消勾选时所有的商品也取消勾选
                if(allChecked){
                    this.carts.forEach((val,i)=>{
                        val.checked = false;
                    })
                }
            }
        }
    },
    methods:{
        // 连接服务器，获取页面数据
        load(){
            let url = "/getcart";
            let callback = (res)=>{
                //console.log(res);
                if(res.data.code===1){
                    if(res.data.data.length!==0){
                        this.hasPro = true;
                        var list = [];
                        list = res.data.data;
                        // forEach()在原数组上进行操作
                        list.forEach((value,i,arr)=>{
                            value["checked"] = false;
                        })
                        this.carts = list;
                        //console.log(this.carts)
                    }else{
                        this.hasPro=false;
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
            }
            funs.allCart(url,callback);
        },
        // 删除购物车中的商品
        cancelLove(pid){
            //console.log("pid:"+pid)
            let url = "/cancellove";
            let obj = {
                product_id:pid
            }
            let callback = (res)=>{
                //console.log(res)
                this.load();
            }
            funs.cancelLove(url,obj,callback);
        },
        // 商品数量操作，改变购买商品的件数
        numChange(e){
            // 获取我正在修改的是哪个商品的数量
            var i = e.target.dataset.i;
            var newCounts;
            if(e.target.tagName==="BUTTON"){
                var num = e.target.dataset.num;
                if(num==="-1"){
                    newCounts = parseInt(this.carts[i].counts)-1;
                }else if(num==="+1"){
                    newCounts = parseInt(this.carts[i].counts)+1;
                }
            }else if(e.target.tagName==="INPUT"){
                newCounts = parseInt(e.target.value);
                var reg = new RegExp("^\d+$");
                if(!reg.test(newCounts)){
                    console.log(this.carts[i].counts)
                    return;
                }
            }
            //console.log(newCounts)

            //修改数据库中的数据
            var url = "/changecartnum";
            var str = `product_id=${this.carts[i].product_id}&counts=${newCounts}`;
            
            var callback = (res)=>{
                //console.log(res);
                if(res.data.code===1){
                    //数据库中数据修改成功，才更新页面上的数据
                    this.carts[i].counts = newCounts;
                }else{
                    //修改失败，弹出提示框
                    funs.toast.call(this,res.data.msg)
                    //console.log("修改数量失败")
                }
            }
            funs.changeCartNum(url,str,callback);  
        },
        // 验证商品数量的输入框中输入的是否是非数字，如若是非数字，就替换成空字符
        testInput(e){
            var i = e.target.dataset.i;
            // \D表示非数字等同于[^0-9]，\W表示非字符
            this.carts[i].counts = e.target.value.replace(/\D/g,'');
            //console.log(this.carts[i].counts)
        },
        // 每一个复选框都影响全选按钮，每次点击复选框，都要判断全选按钮的勾选情况
        changeAllChecked(e){
            var checked = e.target.checked;
            //如果这个按钮已经没有被选择，就可以直接取消全选按钮的选中
            if(!checked){
                this.allChecked = false;
            }
            //判断所有的商品的按钮选中情况
            var allChecked = this.carts.every((val,i)=>{
                return val.checked===true;
            })
            //如果所有的商品都被选中了，全选按钮也要是选中状态
            if(allChecked){
                this.allChecked = true;
            }else{
                //并非所有商品都被选中，全选按钮不是选中状态
                this.allChecked = false;
            }
        },
        // 删除购物车的商品
        delCart(i,pid,title){
            var del = confirm("确认删除商品："+title);
            if(del){
                var url = "/delcart";
                var obj = {
                    product_id:pid
                }
                var callback = (res)=>{
                    this.carts.splice(i,1);
                    //console.log(res)
                }
                funs.delCart(url,obj,callback);
            }
        },
        // 跳转到订单页
        toOrder(){
            // 统计勾选的商品，即添加到订单的商品有哪些
            var arr = [];
            this.carts.forEach((val,i)=>{
                if(val.checked){
                    arr.push(val)
                }
            })
            this.orders = arr;
            //console.log(this.orders);
            /* 这个顺序不能变，要保证bus.$emit()发射数据的时候，bus.$on()已经存在才能接收数据，所以要用promise保证异步执行顺序 */

            /* 
            // 错误做法
            this.$router.push("/order");
            this.bus.$emit("to_order",this.orders); */
            
            // 正确做法
            new Promise((resolve)=>{
                this.$router.push("/order");
                resolve();
            }).then(()=>{
                this.bus.$emit("to_order",this.orders);
            }) 
        }
    }
}
</script>
<style scoped>
.outer{
    margin-top:165px;
}

/* 购物车商品展示区域 */
.outer .box{
    width:1000px;
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
.outer .checkbox>p{
    margin:0;
}
.outer .img{
    width:60px;
    height:60px;
}
.outer .detail-btn{
    background-color:#F08080;
    color:#fff;
    padding:6px 15px;
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
.outer .detail-btn:focus{
    outline:0;
}
.outer .no-love{
    text-align: center;
}
.outer .no-love>h2{
    margin-top:20px;
}

/* 加减数量 */
.outer .change-num{
    font-size: 18px;
}
.outer .change-num button{
    width:30px;
    background-color: #F08080;
    border:1px solid #f08080;
    color:#fff;
}
.outer .change-num button:focus{
    outline: 0;
}
.outer .change-num button:disabled{
    border-color: #F08080;
    background-color: #FFF;
    color:#F08080;
}
.outer .change-num input{
    width:30px;
    text-align: center;
    border:0;
    border-top: 1px solid #f08080;
    border-bottom: 1px solid #f08080;
}
/* 结算区域 */
.outer .order{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.outer .total{
    color:#F08080;
    font-size: 20px;
}
/* 结算按钮 */
.outer .go-order{
    font-size:18px;
    color:#fff;
    background-color: #F08080;
    padding:5px 15px;
    margin-left: 20px;
    border-radius:5px;
    border:0;
}
.outer .go-order:focus{
    outline:0;
}
</style>