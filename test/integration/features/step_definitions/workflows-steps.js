import {promises as fs} from 'node:fs';
import {directoryExists, fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Given, Then} from '@cucumber/cucumber';

Given('the repository has Gitea workflows', async function () {
  await fs.mkdir(`${this.projectRoot}/.gitea/workflows`, {recursive: true});
});

Then('the workflows directory exists', async function () {
  assert.equal(await directoryExists(`${this.projectRoot}/.gitea/workflows`), true);
  assert.equal(await fileExists(`${this.projectRoot}/.gitea/workflows/.gitkeep`), true);
});

Then('the workflows directory does not exist', async function () {
  assert.equal(await directoryExists(`${this.projectRoot}/.gitea/workflows`), false);
});
