<template>
  <Carousel items-to-show="3" :wrap-around="true" :autoplay="3000">
    <Slide v-for="(photo,index) in photos" :key="index">
      <img class="carousel__item"
           :style="{ 'max-height': index === 0 ? 'auto' : '100%'}"
           :src="photo" alt="photo"/>
    </Slide>
    <template #addons>
      <Navigation/>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'new-carousel',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    photos: Array,
  },


})
</script>

<style>

.carousel__item {
  background-color: var(--vc-clr-white);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Crop content when it overflows the height */
  margin-right:5px;

}
</style>
