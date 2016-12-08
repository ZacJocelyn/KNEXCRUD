module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/posion'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
