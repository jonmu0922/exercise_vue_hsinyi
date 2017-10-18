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
                hello test
                <!-- <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="index in 5"
                        :key="index" >
                        Server #{{ index }}
                    </li>
                </ul> -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <!-- <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div> -->
        <appFooter></appFooter>
    </div>
</template>

<script>
     import Header from './components/Shared/Header.vue';
     import Footer from './components/Shared/Footer.vue';
    // import Servers from './components/Server/Servers.vue';
    // import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            'appHeader' : Header,
            'appFooter' : Footer
        }
    }
</script>

<style>

</style> 
