import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import start from '@/components/start'
import inside from '@/components/inside'
import goWith from '@/components/goWith'
import screamRun from '@/components/screamRun'
import HumanSheild from '@/components/HumanShield'
import jump from '@/components/jump'
import leave from '@/components/leave'
import scream from '@/components/scream'
import rideHim from '@/components/rideHim'
import no from '@/components/no'
import yes from '@/components/yes'
import noHate from '@/components/noHate'
import yesJoin from '@/components/yesJoin'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'start',
	    component: start
	},
	{
	    path: '/HomePage',
	    name: 'HomePage',
	    component: HomePage
	},
 	{
	    path: '/inside',
	    name: 'inside',
	    component: inside
	},
	 {
	    path: '/goWith',
	    name: 'goWith',
	    component: goWith
	},
	{
	    path: '/screamRun',
	    name: 'screamRun',
	    component: screamRun
	},
	{
	    path: '/HumanShield',
	    name: 'HumanShield',
	    component: HumanShield
	}
	,
	{
	    path: '/jump',
	    name: 'jump',
	    component: jump
	},
	{
	    path: '/leave',
	    name: 'leave',
	    component: leave
	},
	{
	    path: '/rideHim',
	    name: 'rideHim',
	    component: rideHim
	},
	 {
	    path: '/scream',
	    name: 'scream',
	    component: scream
	}
	,
	{
	    path: '/no',
	    name: 'no',
	    component: no
	},
	 {
	    path: '/yes',
	    name: 'yes',
	    component: yes
	},
	{
	    path: '/yesJoin',
	    name: 'yesJoin',
	    component: yesJoin
	}
	,
	{
	    path: '/noHate',
	    name: 'noHate',
	    component: noHate
	}
  ]
})
