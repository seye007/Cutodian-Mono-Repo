const webpack = require('webpack');
const path = require('path');

// Set the environment variable, e.g., development or production
const env = process.env.NODE_ENV || 'development';

// Require the main webpack configuration file and pass the environment variable
const webpackConfig = require('./webpack.config')(env);

// Invoke webpack with the configuration
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }

  // Handle additional logic or logging if needed
});
