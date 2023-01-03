'use strict';

/**
 * user-information router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-information.user-information',{
    prefix: '',
    // only: ['find', 'findOne'],
    except: [],
    config: {
      find: {
        // auth: true,
        policies: [],
        middlewares: [],
      },
      findOne: {},
      create: {},
      update: {},
      delete: {},
    },
});
