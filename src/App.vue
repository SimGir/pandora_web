<template>
	<div id="app">
    <pan-header></pan-header>
		<router-view/>
    <pan-footer></pan-footer>
    <toast :show="this.$store.getters.getToastShow" :toast="this.$store.getters.getToastText" />
	</div>
</template>

<style>
</style>
