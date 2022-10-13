const { get } = require('lodash');

module.exports = (policyContext, config, { strapi }) => {

    if (get(policyContext, 'state.user.role.type') === 'operations_manager') {
    
      	return true;
    }

    return policyContext.params.id === 5; 
};