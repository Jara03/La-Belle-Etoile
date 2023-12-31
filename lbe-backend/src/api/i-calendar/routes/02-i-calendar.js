'use strict';

/**
 * i-calendar router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;


module.exports = createCoreRouter('api::i-calendar.i-calendar',{
  prefix: '',
  only: [],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
