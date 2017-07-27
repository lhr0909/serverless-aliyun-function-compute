'use strict';

const BbPromise = require('bluebird');

module.exports = {
  generateArtifactDirectoryName() {
    const date = new Date();
    const prefix = this.provider.getArtifactDirectoryPrefix();
    const dateString = `${date.getTime().toString()}-${date.toISOString()}`;

    this.serverless.service.package
      .artifactDirectoryName = `${prefix}/${dateString}`;

    return BbPromise.resolve();
  },
};
