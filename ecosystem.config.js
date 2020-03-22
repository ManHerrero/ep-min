module.exports = {
  apps: [
    {
      name: 'erasmus-play-cms',
      cwd: '/home/ubuntu/erasmus-play-cms',
      script: 'npm',
      args: 'start',
      /*env: {
        NODE_ENV: 'development',
        DATABASE_HOST: 'your-unique-url.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapi', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'postgres', // default username
        DATABASE_PASSWORD: 'Password',
      }, */
    },
  ],
};