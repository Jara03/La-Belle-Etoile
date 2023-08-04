'use strict';

/**
 * i-calendar service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const AIRBNB_LINK = 'https://www.airbnb.fr/calendar/ical/937663970777157078.ics?s=fffdf122b9d33e29da4406d910f716cf';
const axios = require('axios');
const ical = require('ical');




module.exports = createCoreService('api::i-calendar.i-calendar',({ strapi }) =>({
  async  getAirbnbICalLink() {
    try {
      const response = await axios.get(AIRBNB_LINK);

      if (response.status === 200) {
        const iCalData = response.data;
        return iCalData;
      } else {
        console.error('Failed to fetch Airbnb iCal data.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching Airbnb iCal data:', error.message);
      return null;
    }
  },
  async hello(...args){
    let response = { okay: true }

    if (response.okay === false) {
      return { response, error: true }
    }

    return response
  },

  async  fetchAndStoreICalData () {

    try {

      // Fetch the iCal data from Airbnb
      const iCalData = await this.getAirbnbICalLink()

      // Parse the iCal data
      const parsedICalData = ical.parseICS(await iCalData);

      // Transform the iCal data into JSON format
      const jsonData = Object.values(parsedICalData).map((event) => ({
        summary: event.summary,
        start: event.start,
        end: event.end,
        // Add other relevant fields here
      }));


      // Save the JSON data to the Strapi collection


     return await strapi.db.query('api::i-calendar.i-calendar').update({
       where:{ id:11 }, //TODO trouver une solution pour ce morceau faire un update plus propre
          data:{
            icalData: jsonData
          },
        }); // Replace "iCal" with your actual model name

    } catch (error) {
      console.error('Error fetching or storing iCal data:', error);
      throw error;
    }
  }

}));
