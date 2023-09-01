<template>
  <div class="flex flex-col min-h-screen ">
    <Header class="bg-white shadow-lg">
      <!-- Header content -->
    </Header>
      <router-view></router-view>
    <Footer class="bg-gray-200 py-4">
      <!-- Footer content -->
    </Footer>
  </div>
</template>


<script>
import Footer from "./components/footer-comp.vue";
import Header from "./components/header-comp.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

.flex {
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

</style>
