'use strict';

/**
 * job-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-order.job-order');
