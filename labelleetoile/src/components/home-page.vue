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
      photos.value = data.map(item => 'http://localhost:1337' + item.attributes.formats.large.url);

      console.log(photos.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  await fetchData();
});
</script>

<template>
<div>Ceci est l'accueil</div>
  <div>
    <NewCarousel :photos="photos" />
  </div>
</template>

<style scoped>

</style>