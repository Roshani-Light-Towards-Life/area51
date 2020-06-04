module.exports = {
    query: `
    scholarshipsCount(where: JSON): Int!
    `,
    resolver: {
      Query: {
        scholarshipsCount: {
            description: 'Return the count of scholarships',
            resolverOf: 'application::scholarship.scholarship.count',
            resolver: async (obj, options, ctx) => {
              return await strapi.api.scholarship.services.scholarship.count(options.where || {});
            },
          },
      },
    },
  };