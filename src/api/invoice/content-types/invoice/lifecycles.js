const { get } = require('lodash');
const idGenerator = require("../../../../utils/id-generator");

module.exports = {
    beforeCreate(event) {
      const { data, where, select, populate } = event.params;
		console.log('data', data);
      // let's do a 20% discount everytime
      event.params.data.invoiceId = idGenerator(6);
    },
  };
   