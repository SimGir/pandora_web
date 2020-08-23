<template>
	<div id="app">
    <pan-header></pan-header>
		<router-view/>
    <pan-footer></pan-footer>
    <div class="linkme">
      <img class="small" src="../public/img/wechat.svg">
      <div class="big">
        <img src="../public/img/wechat.jpeg">
        <div class="discribe">
          扫码联系作者
        </div>
      </div>
    </div>
    <toast :show="this.$store.getters.getToastShow" :toast="this.$store.getters.getToastText" />
	</div>
</template>

<style scoped>
.linkme {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(calc(-50% + 74px));
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border: 1px solid black;
  border-radius: 50%;
}
.linkme .small {
  width: 40px;
}
.linkme:hover .big {
  display: block;
  box-shadow: 0 0 8px 3px #aaa;
  
}
.linkme .big {
  position: absolute;
  right: 60px;
  display: none;
}
.linkme .big img {
  width: 200px;
}
.linkme .big .discribe {
  background: #fff;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
}
</style>
