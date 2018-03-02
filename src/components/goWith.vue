<template>
    <div class="hero">
	<h2>"As you enter the forest the light fades. The shadows creep towards you. You look up and see eyes staring back at you"</h2>
	<p>
	<button v-on:click="screamRun">You let out your best scream and run deeper into the forest</button>
	<button v-on:click="HumanShield">You jump behind Sally hoping to use her as a human sheild</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'goWith',
     data () {
	 return {
	 }
     },
    methods:{
	screamRun:function(){
		this.$router.push("screamRun");
	},
	HumanShield:function(){
		this.$router.push("HumanShield");
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

