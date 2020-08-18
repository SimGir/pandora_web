import axios from "axios";

export default {
    //得到gift页商品并展示
    getGift(obj) {
        return axios.get("/gift", { params: obj });
    },
    //得到detail页商品详情并展示
    getDetail(obj) {
        return axios.get("/detail", { params: obj });
    },
    //根据商品编号，查找多个商品的信息
    getProduct(obj) {
        return axios.get("/getproduct", { params: obj });
    },
    //商品添加收藏
    getLove(obj) {
        return axios.get("/love", { params: obj });
    },
    //商品取消收藏
    cancelLove(obj) {
        return axios.get("/cancellove", { params: obj });
    },
    //商品添加购物车
    addCart(obj) {
        return axios.get("/addcart", { params: obj });
    },
    //购物车删除商品
    delCart(obj) {
        return axios.get("/delcart", { params: obj });
    },
    //修改购物车中商品数量
    changeCartNum(str) {
        return axios.post("/changecartnum", str);
    },
    //添加收货地址
    addAddress(obj) {
        return axios.get("/addaddress", { params: obj });
    },
    //查找用户收货地址
    getAddress() {
        return axios.get("/getaddress");
    },
    //创建订单
    addOrder(obj) {
        return axios.get("/addorder", { params: obj });
    },
    //查找订单
    getOrder() {
        return axios.get("/getorder");
    },
    //更新订单状态
    updateOrder(obj) {
        return axios.get("/updateorder", { params: obj });
    },
    //用户登录
    login(obj) {
        //这里接收的数据会以查询字符串的形式传值: ?uname=tom&upwd=123
        return axios.get("/login", { params: obj });
    },
    //用户注册
    register(str) {
        return axios.post("/register", str);
    },
    //展示购物车
    allCart() {
        return axios.get("/getcart");
    },
    // 展示收藏
    allLove() {
        return axios.get("/getlove");
    },
    //搜索商品
    searchPro(obj) {
        return axios.get('/searchpro', { params: obj });
    }
}