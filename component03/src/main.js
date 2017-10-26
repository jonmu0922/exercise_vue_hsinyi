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

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
	// 当绑定元素插入到 DOM 中。
	inserted: function (el) {
		// 聚焦元素
		el.focus()
	}
})

Vue.directive('demo', {
	bind: function (el, binding, vnode) {
		var s = JSON.stringify
		el.innerHTML =
			'name: ' + s(binding.name) + '<br>' +
			'value: ' + s(binding.value) + '<br>' +
			'expression: ' + s(binding.expression) + '<br>' +
			'argument: ' + s(binding.arg) + '<br>' +
			'modifiers: ' + s(binding.modifiers) + '<br>' +
			'vnode keys: ' + Object.keys(vnode).join(', ')
	}
})

Vue.directive('color-swatch', function (el, binding) {
	console.log(binding.value)
	el.style.backgroundColor = binding.value
})

Vue.directive('demo2', function (el, binding) {
	console.log(binding.value.color) // => "white"
	console.log(binding.value.text)  // => "hello!"
	el.style.backgroundColor = binding.value.color
	el.innerText = binding.value.text
})

new Vue({
	el: '#app',
	render: h => h(App)
})
