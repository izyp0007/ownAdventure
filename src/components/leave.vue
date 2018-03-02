<template>
    <div class="hero">
	<h2>As you turn to leave a tiger jumps from the underbush and knocks you over the edge...You fall backwards the wind rushing by. As your arms reach and touch nothing you realize this could be your final moments. But before your experience your life flashing before your eyes a dragon flies by and grabs you. </h2>
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

