module.exports = async (policyContext, config, { strapi }) => {

    if (policyContext.state.user) {
        const { id } = policyContext.state.user;

        try {
			const entity = await strapi.db.query('api::client.client').findOne({
				where: { users: id },
				// populate: { user: true },
			});

            if (entity) {

                policyContext.request.body.data.client = entity.id;
            }
        } catch (err) {
            strapi.log.error('eerr', err);
        }
 
      return true;
    }
  
    return false; 
  };