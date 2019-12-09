<template>
    <div>
        <my-header></my-header>
        <div class="container-fluid">
            <div class="headder"></div>
            <div class="describle">
                <div class="breadcrumb">
                    <router-link to="/">主页</router-link>
                    <span class="next-link">></span>
                    <span class="breadcrumb-elem">串饰</span>
                </div>
                <div class="brief-flex">
                    <h1>串饰<span class="product-count">(529)</span></h1>
                    <div class="desc-word">
                        <p class="desc-top">每一颗串饰都是一个故事，每一种组合都展现着与众不同的自我</p>
                        <p class="desc-bottom">Pandora精选手工925银、Pandora rose、Pandora Shina等材质，为你串联起人生的美好回忆</p>
                    </div>
                    <div class="product-kind">
                        <a href="javascript:;" title="最受欢迎串饰" class="product-link">最受欢迎串饰</a>
                        <a href="javascript:;" title="双色串饰" class="product-link">双色串饰</a>
                        <a href="javascript:;" title="PANDORA Reflexions系列串饰" class="product-link">PANDORA Reflexions系列串饰</a>
                        <a href="javascript:;" title="小串饰" class="product-link">小串饰</a>
                        <a href="javascript:;" title="吊饰" class="product-link">吊饰</a>
                        <a href="javascript:;" title="固定夹" class="product-link">固定夹</a>
                        <a href="javascript:;" title="安全链" class="product-link">安全链</a>
                        <a href="javascript:;" title="小装饰" class="product-link">小装饰</a>
                        <a href="javascript:;" title="PANDORA SHINE串饰" class="product-link">PANDORA SHINE串饰</a>
                        <a href="javascript:;" title="14K金串饰" class="product-link">14K金串饰</a>
                        <a href="javascript:;" title="PANDORA ROSE串饰" class="product-link">PANDORA ROSE串饰</a>
                        <a href="javascript:;" title="925银串饰" class="product-link">925银串饰</a>
                        <a href="javascript:;" title="双色串饰" class="product-link">双色串饰</a>
                        <a href="javascript:;" title="闪耀的心" class="product-link">闪耀的心</a>
                        <a href="javascript:;" title="几何光辉" class="product-link">几何光辉</a>
                        <a href="javascript:;" title="迪士尼串饰" class="product-link">迪士尼串饰</a>
                        <a href="javascript:;" title="爱串饰" class="product-link">爱串饰</a>
                        <a href="javascript:;" title="欢乐圣诞" class="product-link">欢乐圣诞</a>
                        <a href="javascript:;" title="童话" class="product-link">童话</a>
                        <a href="javascript:;" title="花卉" class="product-link">花卉</a>
                        <a href="javascript:;" title="亲情友情" class="product-link">亲情友情</a>
                        <a href="javascript:;" title="星空" class="product-link">星空</a>
                        <a href="javascript:;" title="象征性符号" class="product-link">象征性符号</a>
                        <a href="javascript:;" title="旅行串饰" class="product-link">旅行串饰</a>
                        <a href="javascript:;" title="字母与数字" class="product-link">字母与数字</a>
                        <a href="javascript:;" title="动物系列" class="product-link">动物系列</a>
                        <a href="javascript:;" title="琉璃串饰" class="product-link">琉璃串饰</a>
                        <a href="javascript:;" title="皇冠和公主串饰" class="product-link">皇冠和公主串饰</a>
                    </div>
                </div>
            </div>
            <!-- 过滤器 -->
            <div class="filter">
                <div class="filter-content">
                    <div class="filter-left">
                        <div class="filter-kind">
                            <span class="test">主题</span>
                            <div class="expend" style="display: none">
                                <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <p class="refinement-name">字母符号</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <p class="refinement-name">兴趣爱好</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <p class="refinement-name">自然</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <p class="refinement-name">童话</p>
                                                <input type="radio" class="input">
                                                <i>Disney</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <p class="refinement-name">爱情</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">宝石</span>
                            <div class="expend" style="display: none">
                                <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/No_stone.png" alt="">
                                                <p class="refinement-name">Diamond h/vs</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Other_Stone.png" alt="">
                                                <p class="refinement-name">其他宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/No_stone.png" alt="">
                                                <p class="refinement-name">无宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Pearl.png" alt="">
                                                <p class="refinement-name">珍珠</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">价格</span>
                            <div class="expend" style="display: none;">
                                <div class="expend-main">
                                    <ul class="expend-main-flex price">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>500CNY以下</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>501CNY-1000CNY</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>1001CNY-1500CNY</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>1500CNY-2500CNY</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>2500CNY以上</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">金属</span>
                            <div class="expend" style="display: none;">
                                <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Gold.png" alt="">
                                                <p class="refinement-name">14K金</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Silver.png" alt="">
                                                <p class="refinement-name">925银</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Two Tone.png" alt="">
                                                <p class="refinement-name">925银/14K金</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/PANDORA_Rose.png" alt="">
                                                <p class="refinement-name">PANDORA Rose</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Gold.png" alt="">
                                                <p class="refinement-name">PANDORA Shine</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">材质</span>
                            <div class="expend" style="display: none">
                                <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Glass.png" alt="">
                                                <p class="refinement-name">琉璃</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Enamel.png" alt="">
                                                <p class="refinement-name">珐琅</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">颜色</span>
                            <div class="expend" style="display: none">
                                <div class="expend-main">
                                    <ul class="expend-main-flex">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/No_stone.png" alt="">
                                                <p class="refinement-name">Diamond h/vs</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Other_Stone.png" alt="">
                                                <p class="refinement-name">其他宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/No_stone.png" alt="">
                                                <p class="refinement-name">无宝石</p>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <img src="img/Pearl.png" alt="">
                                                <p class="refinement-name">珍珠</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="filter-kind">
                            <span class="test">尺寸</span>
                            <div class="expend" style="display: none">
                                <div class="expend-main">
                                    <ul class="expend-main-flex price">
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>50MM</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>60MM</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>70MM</i>
                                            </a>
                                        </li>
                                        <li class="expend-flex-item">
                                            <a href="javascript:;">
                                                <input type="radio" class="input">
                                                <i>ONE SIZE</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="filter-right">
                        <span class="order" @click="od">排序方式</span>
                        <ul class="selector" style="display:none">
                            <li><a href="javascript:;">排序方式</a></li>
                            <li><a href="javascript:;">上市新品</a></li>
                            <li><a href="javascript:;">畅销商品</a></li>
                            <li><a href="javascript:;">人气商品</a></li>
                            <li><a href="javascript:;">价格(从高到低)</a></li>
                            <li><a href="javascript:;">价格(从低到高)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 商品列表 -->
            <div class="product">
                <div class="first-row">
                    <div class="first-row-items" v-for="(item,i) of product" :key="i">
                        <span class="flag-top">人气畅销</span>
                        <div class="product-img">
                            <a href="javascript:;" @mouseover="imgChange(i)" @mouseout="imgChange(i+1)">
                                <img v-if="id==i" class="product-img-hover" :src="`img/${item.pic1}`" alt="">
                                <img v-else class="product-img-hover" :src="`img/${item.pic}`" alt="">
                            </a>
                        </div>
                        <router-link to="/product_details" class="product-name">{{item.title}}</router-link>
                        <span class="product-price">￥{{item.price.toFixed(2)}}&nbsp;CNY</span>
                        <div class="add-shoppingcar">
                            <button>加入购物车</button>
                            <i class="iconfont icon-aixin"></i>
                        </div>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-items">
                        <span class="flag-top">人气畅销</span>
                        <div class="product-img">
                            <a href="javascript:;">
                                <img class="product-img-hover4" src="img/297205EN168-1.jpg" alt="">
                            </a>
                        </div>
                        <a class="product-name" href="javascript:;">璀璨深蓝色串饰</a>
                        <span class="product-price">￥598.00&nbsp;CNY</span>
                        <div class="add-shoppingcar">
                            <button>加入购物车</button>
                            <i class="iconfont icon-aixin"></i>
                        </div>
                    </div>
                    <div class="first-row-item">
                        <div class="product-center-img">
                            <!-- <a href="javascript:;"> -->
                            <img src="img/blue-pc.jpg" alt="" >
                            <!-- </a> -->
                        </div>
                    </div>
                    <div class="first-row-items">
                        <span class="flag-top">人气畅销</span>
                        <div class="product-img">
                            <a href="javascript:;">
                                <img class="product-img-hover5" src="img/267071-1.jpg" alt="">
                                <!-- <img src="../assets/img/267071-2.jpg" alt=""> -->
                            </a>
                        </div>
                        <router-link to="/product_details" class="product-name">璀璨深蓝色串饰</router-link>
                        <span class="product-price">￥598.00&nbsp;CNY</span>
                        <div class="add-shoppingcar">
                            <button>加入购物车</button>
                            <i class="iconfont icon-aixin"></i>
                        </div>
                    </div>
                </div>
                <div class="first-row">
                    <div class="first-row-items" v-for="(item1,i) of product1" :key="i">
                        <span class="flag-top">人气畅销</span>
                        <div class="product-img">
                            <a href="javascript:;" @mouseover="imgChange1(i)" @mouseout="imgChange1(i+4)">
                                <img v-if="id1==i" class="product-img-hover" :src="`img/${item1.pic1}`" alt="">
                                <img v-else class="product-img-hover" :src="`img/${item1.pic}`" alt="">
                            </a>
                        </div>
                        <a class="product-name" href="javascript:;">{{item1.title}}</a>
                        <span class="product-price">￥{{item1.price.toFixed(2)}}&nbsp;CNY</span>
                        <div class="add-shoppingcar">
                            <button>加入购物车</button>
                            <i class="iconfont icon-aixin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import header from '../components/Header.vue';
import footer from '../components/Footer.vue';
export default {
    data(){
        return {
            id:0,
            id1:0,
            product:[],
            product1:[]
        }
    },
    components:{
        "my-header" : header,
        "my-footer" : footer
    },
    mounted(){
        this.getData(),
        this.getData1();
        /*this.open(); */
    },
    methods:{
        od(){
            var selector=document.getElementsByClassName('selector')[0];
            if(selector.style.display=='block'){
                selector.style.display='none';
            }else{
                selector.style.display='block';
            }
        },
        imgChange(index){
            this.id = index;
        },
        imgChange1(index){
            this.id1 = index;
        },
        getData(){
            var url = "ring_pro";
            this.axios.get(url).then(res=>{
                if(res.data.code == 1){
                    this.product = res.data.data;
                }
            });
        },
        getData1(){
            var url = "ring_pro1";
            this.axios.get(url).then(res=>{
                if(res.data.code == 1){
                    this.product1 = res.data.data;
                }
            });
        },
        open(){
            var expend=document.getElementsByClassName('expend');
            var test=document.getElementsByClassName('test');
            //for(let key in test){
            for(var key=0;key<test.length;key++){
                console.log(test[key])
                test[key].onclick=function(){
                    if(expend[key].className=='open expend'){
                        expend[key].className='expend';
                        expend[key].style.display='none';
                    }else{
                        var openAlr=document.getElementsByClassName('open');
                        if(openAlr.length==0){
                            expend[key].style.display='block';
                            expend[key].className='open expend';
                        }else{
                            for(var prop of openAlr){
                                prop.className='expend';
                                prop.style.display='none';
                            }
                            expend[key].style.display='block';
                            expend[key].className='open expend';
                        }
                    }
                }
            } 
        }
    }
}
</script>

<style scoped>
@import '../assets/css/Stringing.css';
</style>