import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", webpack({
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
  })
  );
  require('cypress-grep/src/plugin')(config);
  return config;
}

export default defineConfig({
  projectId: 'xp9to9',
  viewportHeight: 550,
  viewportWidth: 700,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/e2e/**/*.{feature,ts}",
    setupNodeEvents,
    experimentalSessionAndOrigin: true,
    experimentalStudio: true,
    retries: {
      runMode: 1
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    }
  },
});
