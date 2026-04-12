import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Given, Then} from '@cucumber/cucumber';

Given('the repository is hosted on Gitea', async function () {
  await fs.mkdir(`${this.projectRoot}/.gitea`);
});

Given('the repository is not hosted on Gitea', async function () {
  return undefined;
});

Given('the `.gitkeep` file exists in the `.gitea` directory', async function () {
  await fs.writeFile(`${this.projectRoot}/.gitea/.gitkeep`, '');
});

Then('the `.gitkeep` file has been removed from the `.gitea` directory', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/.gitea/.gitkeep`), false);
});
