<template>
    <div class="hero">
	<h1>Each day is made of small choices that make a whole. Small strands weave together to make up the tapastry. Have some fun and choose your own adventure</h1>
	<p>
	<button v-on:click="HomePage">Accept the challenge</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'start',
     data () {
	 return {
	 }
     },
    methods:{
	HomePage:function(){
		this.$router.push("HomePage");
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

