<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="m-3 flex-1">
    <DatePickerTest/>
  </div>
</template>

<script>
import DatePickerTest from "@/components/DatePickerTest.vue";

export default {
  name: 'App',
  components: {
    DatePickerTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
