import Vue from 'vue'
import App from './App.vue'


// Event bus instantiation
const EventBus = new Vue()

// To make it available everywhere 
// attach it to the Vue global object.
Object.defineProperties(Vue.prototype, {
	$bus: {
		get: function () {
			return EventBus
		}
	}
})


new Vue({
	el: '#app',
	render: h => h(App)
})
