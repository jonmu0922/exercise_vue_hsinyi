<template>
    <div class="container">       
        <input type="text" v-focus> <br />
        <div v-demo:foo.a.b="'hello'"></div> <br>
        <div v-color-swatch="'green'">hello world</div><br>
        <div v-demo2="{ color: 'green', text: 'hello world!!' }"></div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>

</style> 
