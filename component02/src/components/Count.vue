<template>
	<div>		
		{{Counter}} <br />
		<button @click="ChildAdd">Child +1</button> <br />
		<button @click="SetTo5">Child Set to 5</button> <br />
	</div>    
</template>

<script>
export default {
  props: {
    Counter: Number
  },
  methods: {
    ChildAdd() {
		this.$emit('Add')
	},
	SetTo5(){
		this.$emit('Set',5)
	}
  },
  name: "count"
};
</script>

<style>

</style> 
