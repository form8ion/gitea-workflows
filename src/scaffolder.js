import {promises as fs} from 'node:fs';
import {directoryExists} from '@form8ion/core';

export default async function scaffold({projectRoot}) {
  if (await directoryExists(`${projectRoot}/.gitea`)) {
    await fs.mkdir(`${projectRoot}/.gitea/workflows`);
    await fs.writeFile(`${projectRoot}/.gitea/workflows/.gitkeep`, '');
  }

  return {};
}
