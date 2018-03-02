<template>
    <div class="hero">
	<h2>The dragon takes you back to his cave and asks if you want to be his friend</h2>
	<p>
	<button v-on:click="yes">You agree and shake on it</button>
	<button v-on:click="no">You think he smells funny</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'rideHim',
     data () {
	 return {
	 }
     },
    methods:{
	yes:function(){
		this.$router.push("yes");
	},
	no:function(){
		this.$router.push("no");
	}
	}
 }
	
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }
</style>

