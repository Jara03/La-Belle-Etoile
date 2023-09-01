<script setup>
import NewCarousel from './new-carousel.vue';
import {onMounted, ref} from "vue";

// Define the data property
const photos = ref([]); // Initialize with an empty array

// Fetch API data using the onMounted lifecycle hook
onMounted(async () => {
  const axios = require('axios');

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:1337/api/photos?populate=*');
      const data = response.data.data[0].attributes.LBEPhoto.data;
      photos.value = await data.map(item => 'http://localhost:1337' + item.attributes.formats.large.url);

      console.log(photos.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  await fetchData();
});
</script>

<template>
  <div class="flex items-center justify-center">
    <p class="px-5 mt-15 my-10 text-center description">Bienvenue dans notre havre de paix. Si vous êtes à la recherche d'un séjour mémorable, laissez-nous vous présenter ce qui vous attend dans notre magnifique chambre d'hôtes</p>
    <NewCarousel class="carousel_container my-4" :photos="photos" />
  </div>
</template>

<style scoped>

.carousel_container{

}
.description{
  font-family: Quicksand,sans-serif;
  font-size: 20px;
  width: 50%;
}
</style>