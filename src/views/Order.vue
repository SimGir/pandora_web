<template>
  <div class="outer">
    <pan-header></pan-header>
    <div class="box">
      <h1>确认订单</h1>
      <div class="address f-16 mx-5">
        <span class="f-16 mr-3">选择收货地址</span>
        <select class="add-select mr-3" v-model="selected">
          <option
            v-for="(ad,i) of address"
            :key="i"
            :value="ad.address_id"
          >{{ad.address}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ad.cellphone}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ad.receiver}}</option>
        </select>
        <button class="add-btn" data-target="#addressModal" data-toggle="modal">新增收货地址</button>
        <div id="addressModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title f-16">添加地址</div>
              </div>
              <div class="modal-body">
                <div class="row border-0 my-2">
                  <p class="col-3 mb-0">收件人：</p>
                  <input v-model="newReceiver" class="col-9" type="text" />
                </div>
                <div class="row border-0 my-2">
                  <p class="col-3 mb-0">电话：</p>
                  <input v-model="newCellphone" class="col-9" type="text" />
                </div>
                <div class="row border-0 my-2">
                  <p class="col-3 mb-0">地址：</p>
                  <input v-model="newAddress" class="col-9" type="text" />
                </div>
                <div class="row border-0 my-2">
                  <p class="col-3 mb-0">邮政编码：</p>
                  <input v-model="newPostcode" class="col-9" type="text" />
                </div>
                <div class="row border-0 mt-3">
                  <div class="col-12 d-flex align-items-center">
                    <span>是否设置为默认地址：</span>
                    <input v-model="isDefault" type="checkbox" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="cancel-btn" data-dismiss="modal">取消</button>
                <button
                  :disabled="!canSave"
                  :title="!canSave?'输入后才能保存':''"
                  @click="addAddress"
                  class="add-btn"
                  data-dismiss="modal"
                >保存</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mx-5">
          <div class="col pb-4 two">图片</div>
          <div class="col pb-4 three">标题</div>
          <div class="col pb-4 two">规格</div>
          <div class="col pb-4 two">单价</div>
          <div class="col pb-4">数量</div>
          <div class="col pb-4 three">小计</div>
        </div>
        <div v-for="(pro,i) of orderPros" :key="i" class="row mx-5">
          <div class="col two">
            <img class="img" :src="pro.img1" alt />
          </div>
          <div class="col three">{{pro.title}}</div>
          <div class="col two">{{pro.spec}}</div>
          <div class="col two">￥{{pro.price.toFixed(2)}}</div>
          <div class="col">
            <span class="f-16">{{pro.counts}}</span>
          </div>
          <div class="col three">￥{{(pro.price*pro.counts).toFixed(2)}}</div>
        </div>
        <div class="mx-5 my-4 order">
          <h2>
            总计：
            <span class="total">￥{{total.toFixed(2)}}</span>
          </h2>
          <button
            @click="addOrder"
            :disabled="!canSubmit"
            class="go-order"
            :title="!canSubmit?'请添加收货地址':''"
          >提交订单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import funs from "../assets/js/funs";
export default {
  data() {
    return {
      orderPros: [], // 订单中的商品
      address: [], // 所有的地址
      selected: 1, // 选中的地址项
      canSave: false, // 模态框中的保存按钮，是否禁用
      canSubmit: false, // 提交订单按钮是否禁用
      newAddress: "", // 新增的地址
      newReceiver: "", // 新增的收货人
      newCellphone: "", // 新增的电话
      newPostcode: "", // 新增的邮政编码
      isDefault: false, // 是否设置为默认地址
    };
  },
  created() {
    this.getAddress();
    //console.log("created中的this：",this)
    //为一个自定义的事件名to_order绑定一个方法，to_order事件在Cart.vue中调用
    this.bus.$on("to_order", this.refresh.bind(this));
  },
  beforeDestroy() {
    //解决this.bus.$on()被多次触发
    this.bus.$off("to_order");
  },
  updated() {
    // 如果用户每一项都输入了，就可以去掉保存按钮的禁用状态了
    if (
      this.newPostcode !== "" &&
      this.newAddress !== "" &&
      this.newReceiver !== "" &&
      this.newCellphone !== ""
    ) {
      this.canSave = true;
    } else {
      this.canSave = false;
    }
  },
  computed: {
    // 商品总价
    total() {
      // 统计所有被选中的商品的合计价格
      return this.orderPros.reduce((total, val, i) => {
        if (val.checked) {
          return (total += val.price * val.counts);
        } else {
          return total;
        }
      }, 0);
      //console.log(sum)
    },
  },
  methods: {
    //兄弟间传参，接收从Cart.vue中传递过来的数据
    refresh(orders) {
      //console.log("refresh中的this:",this)
      //console.log(orders);
      //接收从购物车页面传递过来的数据，渲染到页面
      this.orderPros = orders;
      //console.log(this.orderPros)
    },
    //查找该用户的收货地址
    getAddress() {
      funs.getAddress().then((res) => {
        if (res.data.code === 1) {
          this.canSubmit = true;
          this.address = res.data.data;
          for (var ad of this.address) {
            // 查找默认地址
            if (ad.is_default === 1) {
              this.selected = ad.address_id;
              return;
            }
          }
        } else if(res.data.code === -1) {
          // 当前用户还未添加收货地址，禁用提交订单按钮
          this.canSubmit = false;
        }else {
          this.$store.dispatch("showToast", res.data.msg)
        }
      });
    },
    //添加收货地址
    addAddress() {
      var obj = {
        receiver: this.newReceiver,
        address: this.newAddress,
        cellphone: this.newCellphone,
        postcode: this.newPostcode,
        isDefault: this.isDefault,
      };

      funs.addAddress(obj).then((res) => {
        //console.log(res)
        this.$store.dispatch("showToast", res.data.msg)
        //重新查找地址
        this.getAddress();
        //重置输入框
        this.newCellphone = "";
        this.newAddress = "";
        this.newReceiver = "";
        this.newPostcode = "";
        this.isDefault = false;
      });
    },
    //创建订单
    addOrder() {
      // 下单时间
      var order_time = new Date().getTime();
      var obj = {
        order_time,
        address_id: this.selected, // 订单地址
        proStr: JSON.stringify(this.orderPros), // 订单中的商品
      };

      funs.addOrder(obj).then(() => {
        //跳转到我的订单页
        this.$router.push("/myorder");
      });
    },
  },
};
</script>
<style scoped>
.outer {
  margin-top: 165px;
}
.f-16 {
  font-size: 16px;
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
  border-bottom: 1px dashed;
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
.outer .checkbox > p {
  margin: 0;
}
.outer .img {
  width: 60px;
  height: 60px;
}
.outer .detail-btn {
  background-color: #f08080;
  color: #fff;
  padding: 6px 15px;
  border-radius: 5px;
  font-size: 15px;
  border: 0;
}
.outer .detail-btn + .detail-btn {
  margin-left: 15px;
}
.outer .detail-btn:hover {
  color: #fff;
  opacity: 0.8;
}
.outer .detail-btn:focus {
  outline: 0;
}
.outer .no-love {
  text-align: center;
}
.outer .no-love > h2 {
  margin-top: 20px;
}

/* 结算区域 */
.outer .order {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.outer .total {
  color: #f08080;
  font-size: 20px;
}
/* 提交订单按钮 */
.outer .go-order {
  font-size: 18px;
  color: #fff;
  background-color: #f08080;
  padding: 5px 15px;
  margin-left: 20px;
  border-radius: 5px;
  border: 0;
}
.outer .go-order:disabled {
  opacity: 0.6;
}
.address {
  margin-bottom: 40px;
}
.add-select {
  width: 500px;
}
.cancel-btn {
  background: #fff;
  color: #f08080;
  border: 1px solid #f08080;
  padding: 4px 15px;
  border-radius: 5px;
}
.add-btn {
  background-color: #f08080;
  padding: 4px 15px;
  color: #fff;
  border: 0;
  border-radius: 5px;
}
.add-btn:disabled {
  opacity: 0.5;
}
.add-btn:focus {
  outline: 0;
}
/* 模态框中 */
.modal-input {
  width: 400px;
}
</style>