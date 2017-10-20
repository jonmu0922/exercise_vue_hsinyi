<template>
    <div class="container">       
		{{count}} 
		<br />
		<Counter :Counter="count" @Add="Add" @Set="SetCount"></Counter>
		<button @click="Add">+1</button> <br />
		<button @click="SetCount(5)">Parent Set to 5</button>
		<hr />

		<select v-model="currentView">
			<option>Component1</option>
			<option>Component2</option>
			<option>Component3</option>
		</select>
		<br /><br />
		<keep-alive>
			<component :is="currentView">
				<!-- 组件在 vm.currentview 变化时改变！ -->
			</component>
		</keep-alive>

		<ul>
			<!-- <li v-for="(l,index) in List" :key="index">
				{{l.Name}}
			</li> -->
			<li  v-for="(l,index) in List" :key="index">
				<!-- 不加 native 沒有辦法觸發到 -->
				<UserDetail :User="l" @click.native="UserClick(index)" ></UserDetail>				
			</li>
			
		</ul>
    </div>
</template>

<script>
// https://cn.vuejs.org/v2/guide/components.html

import Counter from './components/count.vue'
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'
import UserDetail from './components/UserDetail.vue'

export default {
  data: function() {
    return {
		count:0,
		currentView :'Component1',
		List:[{Name:'Jon',Age:25},{Name:'Mu',Age:30},{Name:'Eye123',Age:35}]
	};
  },
  methods: {
	  Add(){
		  console.log('parent + 1')
		  this.count++
	  },	  
	  SetCount:function(cnt) {this.count = cnt},

	  UserClick(idx){
		  console.log('UserClick ' + idx)
	  }
  },
  components: {
	  Counter,
	  Component1,
	  Component2,
	  Component3,
	  UserDetail
  }
};
</script>

<style>

</style> 
