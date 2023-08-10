<template>
  <div class="min-h-screen flex flex-col">



      <header class="bg-white shadow-lg">
        <div class="container mx-auto flex justify-between items-center py-4">
          <h1 class="text-2xl font-semibold">La Belle Étoile</h1>
          <nav class="space-x-4">
            <router-link to="/" class="text-gray-600 hover:text-gray-800 transition">Accueil</router-link>
            <router-link to="/reservation" class="text-gray-600 hover:text-gray-800 transition">Réservation</router-link>
            <router-link to="/contact" class="text-gray-600 hover:text-gray-800 transition">Contact</router-link>
          </nav>
        </div>
      </header>
    <div class="min-h-screen">
      <router-view class="flex-grow"></router-view>
    </div>

      <Footer/>

  </div>
</template>

<script>
import Footer from "./components/footer-comp.vue";
export default {
  name: 'App',
  components: {
    Footer
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
