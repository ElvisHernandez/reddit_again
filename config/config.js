module.exports = {
  development: {
    username: 'elvis',
    password: 'NEVER_STOP_LEARNING',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: 0
  },
  test: {
    username: 'elvis',
    password: 'NEVER_STOP_LEARNING',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: 0
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: 0
  }
}
