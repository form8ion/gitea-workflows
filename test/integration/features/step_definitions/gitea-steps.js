import {promises as fs} from 'node:fs';

import {Given} from '@cucumber/cucumber';

Given('the repository is hosted on Gitea', async function () {
  await fs.mkdir(`${this.projectRoot}/.gitea`);
});

Given('the repository is not hosted on Gitea', async function () {
  return undefined;
});
