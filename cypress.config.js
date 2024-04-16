module.exports = {
  baseUrl: "http://localhost:3000", // Change this to match your application's URL
  integrationFolder: "cypress/integration", // Location of your Cypress test files
  testFiles: "**/*.spec.js", // Pattern to match test files
  video: false, // Disable video recording for now
  viewportWidth: 1280, // Adjust as needed
  viewportHeight: 720, // Adjust as needed
  waitForAnimations: true, // Wait for animations to complete
  chromeWebSecurity: false // Disable Chrome's same-origin policy to allow cross-origin requests
};