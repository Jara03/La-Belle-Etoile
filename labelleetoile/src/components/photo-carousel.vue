<script setup>
import {defineProps, ref} from 'vue';

const props = defineProps(['photos']);

const currentSlide = ref(0);

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.photos.length) % props.photos.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.photos.length;
};
</script>

<template>
  <div class="carousel">
    <button class="prev-button" @click="prevSlide">Previous</button>
    <button class="next-button" @click="nextSlide">Next</button>
    <div class="slide" v-for="(photo,index) in photos" :key="index"  :class="{ '-translate-x-full': index !== currentSlide }">
      <img :src="photo"  alt="photo" class="w-full h-auto"/>
    </div>
  </div>
</template>
<style scoped>
.carousel {
  @apply flex overflow-hidden w-full relative;
}

.slide {
  @apply flex-none w-full transform transition-transform duration-300 ease-in-out;
}

.prev-button,
.next-button {
  @apply absolute top-1/2 transform -translate-y-1/2 border p-1 cursor-pointer;
}

.prev-button {
  @apply left-3;
}

.next-button {
  @apply right-3;
}
</style>
