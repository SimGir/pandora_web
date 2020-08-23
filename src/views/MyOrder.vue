<template>
  <div class="outer">
    <pan-header></pan-header>
    <div class="box">
      <h1>我的订单</h1>
      <div v-if="hasOrders">
        <div class="border-bold px-3 py-5" v-for="(order,i) of orders" :key="i">
          <div class="row border-0 mx-5">
            <div class="col two">下单时间</div>
            <div class="col two">寄件时间</div>
            <div class="col two">收货时间</div>
            <div class="col">订单状态</div>
            <div class="col two">操作</div>
          </div>
          <div class="row border-0 pt-3 mx-5">
            <div class="col two">{{new Date(order.order_time).toLocaleString()}}</div>
            <div
              class="col two"
            >{{!!order.deliver_time?new Date(order.deliver_time).toLocaleString():"————"}}</div>
            <div
              class="col two"
            >{{!!order.received_time?new Date(order.deliver_time).toLocaleString():"————"}}</div>
            <div class="col">{{order.status|showStatus}}</div>
            <div class="col two">
              <button
                class="mr-2"
                style="padding: 0 3px;"
                :disabled="order.status!==1"
                @click="updateOrder(order.order_id,i,4)"
              >取消订单</button>
              <button
                style="padding: 0 3px;"
                :disabled="order.status===4||order.status===3"
                @click="updateOrder(order.order_id,i,3)"
              >确认收货</button>
            </div>
          </div>
          <div class="row mt-3 pt-3 mx-5">
            <div class="col">商品图片</div>
            <div class="col two">商品名称</div>
            <div class="col">商品规格</div>
            <div class="col">商品单价</div>
            <div class="col">商品数量</div>
          </div>
          <div class="row border-0 mx-5">
            <div class="col-12" v-for="(detail,m) of details" :key="m">
              <div v-if="detail.order_id===order.order_id">
                <div v-for="(pro,n) of pros" :key="n">
                  <div class="row border-0" v-if="pro.product_id===detail.product_id">
                    <div class="col">
                      <img class="img" :src="pro.img1" />
                    </div>
                    <div class="col two text title">{{pro.title}}</div>
                    <div class="col text">{{pro.spec}}</div>
                    <div class="col text">￥{{pro.price.toFixed(2)}}</div>
                    <div class="col text">{{detail.counts}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-3 mt-3 mx-5">
            <div class="col-1 px-0 text text-left">收货人:</div>
            <div class="col-11">
              <div :key="k" v-for="(ad,k) of adds">
                <div class="row border-0" v-if="ad.address_id===order.address_id">
                  <div class="col text-left">{{ad.receiver}}</div>
                </div>
              </div>
            </div>
            <div class="col-1 px-0 text text-left">收货地址:</div>
            <div class="col-11">
              <div :key="k" v-for="(ad,k) of adds">
                <div class="row border-0" v-if="ad.address_id===order.address_id">
                  <div class="col text-left">{{ad.address}}</div>
                </div>
              </div>
            </div>
            <div class="col-1 px-0 text text-left">手机号码:</div>
            <div class="col-11">
              <div :key="k" v-for="(ad,k) of adds">
                <div class="row border-0" v-if="ad.address_id===order.address_id">
                  <div class="col text-left">{{ad.cellphone}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="no-order">
        <img src="img/shopping.gif" />
        <h2>您还没有创建订单哦~</h2>
      </div>
    </div>
  </div>
</template>
<script>
import funs from "../assets/js/funs";

export default {
  data() {
    return {
      orders: [],
      details: [],
      adds: [],
      pids: [],
      pros: [],
      hasOrders: false,
    };
  },
    created() {
        document.documentElement.scrollTop = 0;
        this.getOrder();
    },
    methods: {
    //查找我的订单
    getOrder() {
      //获取我的订单列表
      funs.getOrder().then((res) => {
        if (res.data.code == -2) {
          var toLogin = confirm("您还未登录，请登录");
          if (toLogin) {
            this.$router.push("/login");
          } else {
            this.$router.push("/index");
          }
        } else {
          this.orders = res.data.data.orders || [];
          this.details = res.data.data.details || [];
          this.orders.length > 0 && (this.hasOrders = true);
          for (var i = 0; i < this.details.length; i++) {
            var bol = false;
            for (var j = 0; j < this.pids.length; j++) {
              if (this.pids[j] === this.details[i].product_id) {
                bol = true;
              }
            }
            if (!bol) {
              this.pids.push(this.details[i].product_id);
            }
          }

          this.getAddress();
          this.getProduct();
        }
      });
    },
    //查找订单地址
    getAddress() {
      // 查找用户地址
      funs.getAddress().then((res) => {
        if (res.data.code === 1) {
          this.adds = res.data.data;
          console.log(this.adds);
        }
      });
    },
    //查找商品信息
    getProduct() {
      // 查找商品详情
      var obj = {
        pids: this.pids,
      };
      this.pids.length > 0 &&
        funs.getProduct(obj).then((res) => {
          if (res.data.data.length > 0) {
            this.pros = res.data.data;
            //console.log(this.pros)
          }
        });
    },
    //取消订单，更新订单状态
    updateOrder(order_id, i, status) {
      var obj = {};
      //console.log(order_id)
      //取消订单
      if (status === 4) {
        obj = {
          order_id,
          deliver_time: "",
          received_time: "",
          status,
        };
      } else if (status === 3) {
        //确认收货
        var received_time = new Date().getTime();
        obj = {
          order_id,
          deliver_time: "",
          received_time,
          status: "",
        };
      }

      funs.updateOrder(obj).then((res) => {
        //更新视图中的订单状态
        this.orders[i].status = status;
        //console.log(res)
      });
    },
  },
  filters: {
    showStatus(val) {
      switch (val) {
        case 1: {
          return "等待发货";
          break;
        }
        case 2: {
          return "运输中";
          break;
        }
        case 3: {
          return "已签收";
          break;
        }
        case 4: {
          return "已取消";
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
.outer {
  margin-top: 165px;
}
.outer .no-order {
  text-align: center;
}
.outer .no-order > h2 {
  margin-top: 20px;
}
.f-16 {
  font-size: 16px;
}
.border-bold {
  border: 3px solid #ddd;
}
.border-bold + .border-bold {
  border-top: 0;
}
button:disabled {
  opacity: 0.6;
}
/* 购物车商品展示区域 */
.outer .box {
  width: 1000px;
  min-height: 320px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #dbd9d9;
  box-shadow: 0 0 5px 0px;
}
.outer .box > h1 {
  text-align: center;
  margin-bottom: 30px;
}
.outer .row {
  display: flex;
  margin: 0;
  align-items: center;
  border-top: 1px dashed;
}
.outer .col {
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
}
.outer .two {
  flex-grow: 2;
}
.outer .three {
  flex-grow: 3;
}
.outer .img {
  width: 60px;
  height: 60px;
}
.outer .text {
  width: 50px;
  font-size: 16px;
}
.outer .title {
  width: 100px;
}
</style>