'use strict';

/**
 * vehicle router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vehicle.vehicle', {
    prefix: '',
    // only: ['find', 'findOne'],
    except: [],
    config: {
      	findOne: {
            policies: ['global::filter-by-client'],
        	middlewares: [],
      	},
        find: {
        	policies: ['global::filter-by-client'],
        	middlewares: [],
      	},	
      	create: {
        	policies: [],
        	middlewares: [],
      	},
      	update: {
        	policies: []
      	},
      	delete: {},
    },
});
