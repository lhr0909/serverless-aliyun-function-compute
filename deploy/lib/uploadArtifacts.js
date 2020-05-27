'use strict';

module.exports = {
  async uploadArtifacts() {
    const objectId = this.provider.getStorageObjectId();
    // const object = this.templates.update.Resources[objectId].Properties;
    const bucket = this.templates.create.Resources[this.provider.getStorageBucketId()].Properties;

    this.serverless.cli.log(`Object id is ${objectId}`);

    const objects = this.serverless.service.provider.compiledConfigurationTemplate.Resources[objectId];

    for(let i=0; i<objects.length; i++){
      const object = objects[i].Properties;
      this.serverless.cli.log(`Uploading ${object.ObjectName} to OSS bucket ${bucket.BucketName}...`);
      await this.provider.uploadObject(object.ObjectName, object.LocalPath);
      this.serverless.cli.log(`Uploaded ${object.ObjectName} to OSS bucket ${bucket.BucketName}`);
    }
  }
};
