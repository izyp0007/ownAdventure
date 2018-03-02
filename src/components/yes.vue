<template>
    <div class="hero">
	<h2>The dragon says his name is harold and wants to know if you'll be the drummer for his new heavy metal band?</h2>
	<p>
	<button v-on:click="yesJoin">You jump at the chance to join the band</button>
	<button v-on:click="noHate">Ummm No, you HATE heavy metal</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'yes',
     data () {
	 return {
	 }
     },
    methods:{
	yesJoin:function(){
		this.$router.push("yesJoin");
	},
	noHate:function(){
		this.$router.push("noHate");
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

