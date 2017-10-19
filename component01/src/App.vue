<template>
    <div class="container">
        <!-- <div class="row">
                    <div class="col-xs-12">
                        <header>
                            <h1>Server Status</h1>
                        </header>
                    </div>
                </div> -->
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">               
                <Servers :Name="ServerName" :Server="ServerData"></Servers>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ServerDetails></ServerDetails>                
                
            </div>
        </div>
        <hr>
        
        <appFooter></appFooter>
    </div>
</template>

<script>

import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
    data: function() {
        return {
            ServerName:'testtest',
            //ServerData: {List:[{ Name: 'Sever A', Status: true }, { Name: 'Sever B', Status: true }, { Name: 'Sever C', Status: false }]}
            ServerData: [{ Name: 'Sever A', Status: true }, { Name: 'Sever B', Status: true }, { Name: 'Sever C', Status: false }]
        }
    },
    components: {
        'appHeader': Header,
        'appFooter': Footer,
        Servers,
        ServerDetails
    },
    created () {
        this.$bus.$on('ChangeServerStatus', ($event) => {
            this.ServerData.forEach(function(s) {                                    
                if(s.Name == $event.Name)
                    s.Status = !s.Status
            })
        })
    }
}
</script>

<style>

</style> 
