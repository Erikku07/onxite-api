const { get } = require('lodash');

module.exports = (policyContext, config, { strapi }) => {

    if (policyContext.state.user) {

        policyContext.request.body.data.requestedByUser = get(policyContext, 'state.user.id');
        
      return true;
    }
  
    return false; 
  };