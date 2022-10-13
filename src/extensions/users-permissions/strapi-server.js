const utils = require('@strapi/utils');
const { sanitize } = utils;

const sanitizeOutput = (entity, ctx) => {
    const schema = strapi.getModel('plugin::users-permissions.me');
    const { auth } = ctx.state;
  
    return sanitize.contentAPI.output(entity, schema, { auth });
};

module.exports = (plugin) => {
  const me = plugin.controllers.user.me;

  plugin.controllers.user.me = async (ctx) => {

    const { isAuthenticated, user } = ctx.state;
    const { query } = ctx;
 
    if (!isAuthenticated) {
      return ctx.unauthorized();
    }

    const userInformation = await strapi.db.query('api::user-information.user-information').findOne({
        where: { user: user.id },
      });

    ctx.body = await sanitizeOutput({ role: user.role, userInformation: userInformation }, ctx);

    return ctx.body;
  };
  return plugin;
};