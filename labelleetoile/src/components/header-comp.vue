<script setup>

</script>

<template>


  <header class="bg-white shadow-lg">
    <div class="flex flex-grow mx-5 flex-row items-center justify-center">
      <img src="../assets/stars.png" style="width: 50px; height: 50px;">
    <h1 class="font-semibold title mx-4">La Belle Étoile</h1>
  </div>
    <div class="container mx-auto flex items-center flex-row py-4 mt-6" style="width: 60%">
      <nav class="flex justify-between flex-grow flex-row">
        <router-link to="/" class="header-link text-gray-600 hover:text-gray-800 transition">Accueil</router-link>
        <router-link to="/reservation" class="header-link text-gray-600 hover:text-gray-800 transition">Réservation</router-link>
        <router-link to="/contact" class="header-link text-gray-600 hover:text-gray-800 transition">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.title{
  font-family: "DM Serif Display",sans-serif;
  font-size: 36px;
}
.header-link{
  font-family: "Quicksand",sans-serif;
  font-size: 24px;
}
</style>