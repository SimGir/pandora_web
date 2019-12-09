<template>
    <div class="toast" :class="show?'show':''">{{toast}}</div>
</template>
<script>
export default {
    props:["show","toast"]
}
</script>
<style scoped>
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