const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshots: false,
  experimentalStudio: true,
  watchForFileChanges: false,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
