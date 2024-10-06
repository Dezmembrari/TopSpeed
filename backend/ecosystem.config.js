module.exports = {
    apps: [
      {
        name: 'topspeed-backend', // Change the name to 'topspeed-backend'
        script: './server.js',
        env: {
          PORT: process.env.PORT || 3000,
          SMTP_USER: process.env.SMTP_USER,
          SMTP_PASS: process.env.SMTP_PASS,
          RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: process.env.PORT || 3000,
          SMTP_USER: process.env.SMTP_USER,
          SMTP_PASS: process.env.SMTP_PASS,
          RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
        }
      }
    ]
  };
  