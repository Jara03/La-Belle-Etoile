'use strict';

/**
 * i-calendar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::i-calendar.i-calendar',({ strapi }) => ({

  async updateIcalData(ctx) {
    try {
       return await strapi.service('api::i-calendar.i-calendar').fetchAndStoreICalData();
      //return await strapi.service('api::i-calendar.i-calendar').find(ctx);


    } catch (error) {
      ctx.send({ error: 'Failed to fetch and store iCal data.' }, 500);
    }
  },


    async find(ctx){

    return await strapi.service('api::i-calendar.i-calendar').find(ctx);
    }
}));
