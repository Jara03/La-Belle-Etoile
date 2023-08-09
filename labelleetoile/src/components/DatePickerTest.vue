
<template>
  <div>
    <vue-tailwind-datepicker
        i18n="fr"
        v-model="dateValue"
        :disable-date="dDate"
    />
  </div>
</template>


<script setup>
import { ref} from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
const dateValue = ref([])

/*
 if (airbnbData.value.icalData) {
    const disabledDate = airbnbData.value.icalData
        .filter(item => item.summary === 'Reserved' || item.summary === 'Airbnb (Not available)')
        .map(item => new Date(item.start));
    console.log(disabledDate);
    return disabledDate;
  } else {
    return [];
  }
    // Disable all Mondays in August 2023
  return date.getMonth() === 7 && date.getFullYear() === 2023 && date.getDay() === 1;

 */
// Define the dDate function to disable date ranges from airbnbData
const dDate = (date) => {
  // Disable specific date ranges from airbnbData
  if (airbnbData.value.icalData) {
    const disabledRanges = airbnbData.value.icalData
        .filter(item => item.summary === 'Reserved' || item.summary === 'Airbnb (Not available)')
        .map(item => ({
          start: new Date(item.start),
          end: new Date(item.end),
        }));

    return disabledRanges.some(disabledRange => isDateInRange(date, disabledRange));
  }

  // Helper function to check if a date is within a range
  function isDateInRange(date, range) {
    return date >= range.start && date <= range.end;
  }
};


import { onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

const airbnbData = ref([{ summary: 'Reserved', start: '2023-08-15T00:00:00' },
  { summary: 'Airbnb (Not available)', start: '2023-08-20T00:00:00' }]);
let interval;


// Fetch data immediately upon component mount
onMounted(fetchData);

// Fetch data every 3 minutes
interval = setInterval(fetchData, 3 * 60 * 1000);

// Clear the interval when the component is destroyed
onBeforeUnmount(() => {
  clearInterval(interval);
});

// Define the fetchData method
async function fetchData() {
  try {
    const response = await axios.get('http://localhost:1337/api/i-calendar/');
    airbnbData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


</script>
<script>
//import axios from "axios";



// eslint-disable-next-line vue/no-export-in-script-setup
/*
export default {
  data: function(){
    return {
      dateValue: new Date(), // The selected date
      airbnbData: {},  // Your Airbnb data object
    };
  },
  computed: {
    async disabledDates() {
      if (this.airbnbData.icalData) {
        const disabledDate =  this.airbnbData.icalData
            .filter(item => item.summary === 'Reserved' || item.summary === 'Airbnb (Not available)')
            .map(item => new Date(item.start));
        console.log(disabledDate);
        return ['2023-08-18'];
      } else {
        return [];
      }
    },
  },
  mounted() {
    // Fetch data immediately upon component mount
    this.fetchData();

    // Fetch data every 3 minutes
    this.interval = setInterval(this.fetchData, 3 * 60 * 1000);
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.interval);
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:1337/api/i-calendar/');
        this.airbnbData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};

 */
</script>


<style scoped>

</style>