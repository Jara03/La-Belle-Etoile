

<template>
  <div class="min-h-screen flex">
    <div class="w-1/3 p-4">
      <DatePicker class="w-full" @date-selected="handleDateSelected" />
    </div>
    <div class="w-2/3 p-4">
      <div v-if="selectedPeriod && isCardOpen" class="bg-white shadow-md p-4">
        <!-- Reservation Card content -->
        <p>Selected Period: {{ selectedPeriod }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import DatePicker from './date-picker-test.vue'; // Import the DatePicker component

const selectedPeriod = ref(null);
const isCardOpen = ref(false);

function handleDateSelected(date) {
  // Update the selectedPeriod property with the selected date
  selectedPeriod.value = date;
  isCardOpen.value = true;
  console.log("HIII")

  // You can also perform any other actions based on the selected date
}
</script>
<style scoped>

</style>