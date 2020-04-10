let webpackConfig = require("@vue/cli-service/webpack.config");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],
    files: ["tests/**/*.spec.js"],
    preprocessors: {
      "**/*.spec.js": ["webpack", "sourcemap"],
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ["spec", "coverage" ],
    browsers: ["ChromeHeadless"],
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    }
  });
};
