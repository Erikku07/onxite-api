'use strict';

/**
 * job-order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job-order.job-order', {
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
		},
      	create: {
        	policies: ['global::attach-user', 'global::attach-client'],
        	middlewares: [],
      	},
      	update: {
        	policies: []
      	},
      	delete: {},
    },
});
