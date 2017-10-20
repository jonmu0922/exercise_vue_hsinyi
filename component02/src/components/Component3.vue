<template>
	<div>		
		component3

		{{count}}	
		<button @click="count++">+1</button>
	</div>    
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  name: "component3"
};
</script>

<style>

</style> 
