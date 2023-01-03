const { get } = require('lodash');
const idGenerator = require("../../../../utils/id-generator");

module.exports = {
    beforeCreate(event) {
      const { data, where, select, populate } = event.params;
		console.log('data', data);
      // let's do a 20% discount everytime
      event.params.data.jobOrderId = idGenerator(6);
    },
  
    // afterCreate(event) {
    //   const { result, params } = event;
  
    //   // do something to the result;
    // },
    async afterFindOne(event) {
      const { result, params } = event;

     if (!!get(result, 'requestedByUser.id')) {
		const entity = await strapi.db.query('api::user-information.user-information').findOne({
			// select: ['title', 'description'],
			where: { user: result.requestedByUser.id },
		  });
		result.requestedByUser = entity;
	 }
      
    },
	async afterFindMany(event) {
		const { result, params } = event;

		const requestedUserIds = result
			.filter((data)=> !!get(data, 'requestedByUser.id'))
			.map((data)=> data.requestedByUser.id);

		if (requestedUserIds.length) {
			const userInformations = await strapi.db.query('api::user-information.user-information').findMany({
					user: {
						$in: [...new Set(requestedUserIds)],
					},
					populate: { user: true },
				});

				result.map((data)=> {
				
				const [requestedByUser] = userInformations
					.filter((userInfo)=> get(userInfo, 'user.id') === get(data, 'requestedByUser.id'))

				data.requestedByUser = requestedByUser;
			});
		}
	  }
  };
   