<template>
    <div class="hero">
	<h2>When you stop to catch your breath you realize you are terrible lost. After what seems like hours you find a sign that says "Take a leap of faith" next to a cliff. </h2>
	<p>
	<button v-on:click="jump">You take a deep breath and jump</button>
	<button v-on:click="leave">You aren't that stupid.</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	 }
     },
    methods:{
	jump:function(){
		this.$router.push("jump");
	},
	leave:function(){
		this.$router.push("leave");
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

