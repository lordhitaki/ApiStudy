'use strict';

/**
 * profile-pic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile-pic.profile-pic');
