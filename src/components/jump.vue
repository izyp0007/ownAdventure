<template>
    <div class="hero">
	<h2>As the wind starts to rush by you realize this might not have been the best thing you could have done. But that's okay becaue after only a moment you hear the flapping of wings, and a dragon grabs you in his talons.</h2>
	<p>
	<button v-on:click="scream">You scream</button>
	<button v-on:click="rideHim">You climb up and ride him</button>
      </p>
    </div>
</template>

<script>
 export default {
     name: 'jump',
     data () {
	 return {
	 }
     },
    methods:{
	scream:function(){
		this.$router.push("scream");
	},
	rideHim:function(){
		this.$router.push("rideHim");
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

