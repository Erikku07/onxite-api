module.exports = async (policyContext, config, { strapi }) => {

    if (policyContext.state.user) {
        const { id, role } = policyContext.state.user;
    
        if (role.type === 'client_user') {
            try {
                const entity = await strapi.db.query('api::client.client').findOne({
                    where: { users: id },
                    // populate: { user: true },
                });
      
                if (entity) {
                    policyContext.request.query.filters = { ... policyContext.request.query.filters,  client: { id: entity.id }};
                    return true;
                }
    
            } catch (err) {
                strapi.log.error('eerr', err);
            }
        }

        if (role.type === 'operations_manager') {
            return true;
        }  

    }

    if (policyContext.state.isAuthenticated) {
        return true;
    }
  
    return false; 
  };