<template>
    <ul v-if="Server != null">
        <li>
            Name:{{Server.Name}}
        </li>
        <li>
            Status:{{Server.Status}}
        </li>
        <li>
           <button @click="Change">Change Status</button>
        </li>
    </ul>
</template>

<script>   

export default {
    name: 'serverdetails',   
     data: function() {
        return {
            Server: null
        }
    },
    methods: {
        Change(){
            this.$bus.$emit('ChangeServerStatus', this.Server)
        }
    },
    created () {
        this.$bus.$on('ServerEdit', ($event) => {            
            this.Server = $event
        })
    }
}

</script>

<style>

</style> 
