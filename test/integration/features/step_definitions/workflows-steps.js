import {directoryExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the workflows directory exists', async function () {
  assert.equal(await directoryExists(`${this.projectRoot}/.gitea/workflows`), true);
});

Then('the workflows directory does not exist', async function () {
  assert.equal(await directoryExists(`${this.projectRoot}/.gitea/workflows`), false);
});
