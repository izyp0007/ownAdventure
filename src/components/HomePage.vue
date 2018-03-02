<template>
    <div class="hero">
	<h2>"Hey, come on" yelled Sally. "Let's go before they come"</h2>
	<p>
	<button v-on:click="goWith">Go with Sally</button>
	<button v-on:click="inside">Go back inside</button>
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
	goWith:function(){
		this.$router.push("goWith");
	},
	inside:function(){
		this.$router.push("inside");
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

