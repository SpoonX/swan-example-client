"use strict";

const ApiGithub = require('api-github');

class BuildConfig {
  /**
   * Construct a new BuildConfig.
   */
  constructor() {
    this.config = {

      // Endpoint to use if preview doesn't have matching PR for server-side.
      defaultPreviewEndpoint: 'production',

      // Used to generate api url.
      herokuApp: 'swan-example',

      // Where does the server-side repository live?
      githubSlug: 'spoonx/swan-example-server',

      // Made configurable because... Convention.
      herokuAppUrl: 'herokuapp.com',

      // Default endpoints (api urls).
      endpoints: {
        production: 'https://swan-example.herokuapp.com/'
      }
    };

    this.github = new ApiGithub({auth: {token: process.env.GITHUB_BUILD_TOKEN}});
  }

  /**
   * Get the endpoint for provided context.
   *
   *  - production: Returns production url
   *  - branch-deploy: Returns branch url, or staging url (if branch doesn't exist in config).
   *  - deploy-preview: Returns url as found on github, or staging.
   *
   * @param {string} context
   * @param {string} head
   *
   * @return {*}
   */
  getEndpoint(context, head) {
    if (context === 'production') {
      return Promise.resolve(this.config.endpoints.production);
    }

    if (context === 'branch-deploy') {
      // Return endpoint for branch
      return Promise.resolve(this.config.endpoints[head] || this.config.endpoints[this.config.defaultPreviewEndpoint]);
    }

    if (context !== 'deploy-preview') {
      return Promise.resolve(this.config.endpoints[this.config.defaultPreviewEndpoint]);
    }

    return this.findMatchingPullRequest(head).then(matching => {
      if (!matching) {
        return this.config.endpoints[this.config.defaultPreviewEndpoint];
      }

      return this.getHerokuUrl(matching.number);
    });
  }

  /**
   * Get the url to the preview url over at heroku.
   *
   * @param {number} pullRequest
   *
   * @return {string}
   */
  getHerokuUrl(pullRequest) {
    // App name gets used for url, but capped at 30 characters.
    let appName   = this.config.herokuApp;
    let prBetween = '-pr-';
    let prNumber  = pullRequest + '';
    let subDomain = appName + prBetween + prNumber;
    let length    = subDomain.length;
    let limit     = 30;

    if (length > limit) {
      subDomain = appName.substr(0, appName.length - (length - limit)) + prBetween + prNumber;
    }

    return `https://${subDomain}.${this.config.herokuAppUrl}/`;
  }

  /**
   * Find a pull request over at the server-side repository that matches this pull request.
   *
   * @param {string} ref
   *
   * @return {Promise}
   */
  findMatchingPullRequest(ref) {
    return this.github.repos.pullRequests(this.config.githubSlug).then(result => {
      for (let i in result) {
        let pr = result[i];

        if (pr.head.ref === ref) {
          return pr;
        }
      }

      return null;
    });
  }
}

module.exports = BuildConfig;
