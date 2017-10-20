<template>
    <div class="container">       
        <appHeader></appHeader>
        <UserNameSlot>            
            <div slot="username">jonmu</div>         
            <div>你好</div>   
        </UserNameSlot>
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

// https://cn.vuejs.org/v2/guide/components.html

import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Slot from "./components/Server/Slot.vue";

export default {
  data: function() {
    return {
      ServerName: "testtest",
      //ServerData: {List:[{ Name: 'Sever A', Status: true }, { Name: 'Sever B', Status: true }, { Name: 'Sever C', Status: false }]}
      ServerData: [
        { Name: "Sever A", Status: true },
        { Name: "Sever B", Status: true },
        { Name: "Sever C", Status: false }
      ]
    };
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    Servers,
    ServerDetails,
    UserNameSlot: Slot
  },
  created() {
    this.$bus.$on("ChangeServerStatus", $event => {
      this.ServerData.forEach(function(s) {
        if (s.Name == $event.Name) s.Status = !s.Status;
      });
    });
  }
};
</script>

<style>

</style> 
