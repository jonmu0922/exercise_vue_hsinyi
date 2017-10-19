<template>
    <ul class="list-group">
        <!-- <li>{{Name}}</li> -->
        <li class="list-group-item" v-for="(server, index) in Server" :key="index" @click="ServerClick(server)">
            #{{ index }} Server:{{server.Name}}, Status: {{server.Status}}
        </li>
    </ul>
</template>

<script>   

export default {
    name: 'servers',
    //props: {
        // Server: {type: Object},  
        // Name:{type:String}        
    //}
    props:['Name','Server'],
    methods: {
        ServerClick(server){            
            this.$bus.$emit('ServerEdit', server)            
        }
    }
    
}

</script>

<style>

</style> 
