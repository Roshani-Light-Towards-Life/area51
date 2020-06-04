module.exports = {
    query: `
    trainingCentersCount(where: JSON): Int!
    `,
    resolver: {
      Query: {
        trainingCentersCount: {
            description: 'Return the count of trainingCenters',
            resolverOf: 'application::training-center.training-center.count',
            resolver: async (obj, options, ctx) => {
              let res = await strapi.api["training-center"].services["training-center"].count(options.where || {});
              console.log(res)
              return res
            },
          },
      },
    },
  };