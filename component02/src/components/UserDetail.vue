<template>
	<div>		
		{{User.Name}} {{User.Age}}
	</div>    
</template>

<script>
export default {  
	props:['User'],
	name: "UserDetail"	
};
</script>

<style>

</style> 
