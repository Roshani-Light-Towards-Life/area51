module.exports = {
    query: `
    studentsCount(where: JSON): Int
    `,
    resolver: {
      Query: {
        studentsCount: {
            description: 'Return the count of students',
            resolverOf: 'application::student.student.count',
            resolver: async (obj, options, ctx) => {
              return await strapi.api.student.services.student.count(options.where || {});
            },
          },
      },
    },
  };